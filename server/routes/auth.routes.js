const express = require('express');
const bcrypt = require('bcryptjs');
const {check, validationResult} = require('express-validator');
const User = require('../models/User');
const tokenService = require('../services/token.service');
// eslint-disable-next-line new-cap
const router = express.Router({mergeParams: true});

router.post('/signUp',
    [
      check('email', 'email is not correct')
          .isEmail(),
      async (req, res) => {
        try {
          const errors = validationResult(req);
          if (!errors.isEmpty()) {
            return res.status(400).json({
              error: {
                message: 'INVALID_DATA',
                code: 400,
                errors: errors.array(),
              },
            });
          }
          const {email, password} = req.body;
          const existingUser = await User.findOne({email});
          if (existingUser) {
            return res.status(400).json({
              error: {
                message: 'EMAIL_EXIST',
                code: 400,
              },
            });
          }
          const hashedPassword = await bcrypt.hash(password, 12);
          const newUser = await User.create({
            ...req.body,
            password: hashedPassword,
          });
          const tokens = tokenService.generate({_id: newUser._id});
          await tokenService.save(newUser._id, tokens.refreshToken);
          res.status(201).send({...tokens, userId: newUser._id, user: newUser});
        } catch (e) {
          res.status(500).json({
            error: {
              code: 500,
              message: 'Oops... There was a server error with your connection, please try again later...',
            },
          });
        }
      }],
);
router.post('/signUpWithGoogle',
    [
      check('email', 'email is not correct')
          .isEmail(),
      async (req, res) => {
        req.body;
        try {
          const errors = validationResult(req);
          if (!errors.isEmpty()) {
            return res.status(400).json({
              error: {
                message: 'INVALID_DATA',
                code: 400,
                errors: errors.array(),
              },
            });
          }
          const {email} = req.body;
          const existingUser = await User.findOne({email});
          if (existingUser) {
            return res.status(400).json({
              error: {
                message: 'EMAIL_EXIST',
                code: 400,
              },
            });
          }
          const newUser = await User.create({
            ...req.body,
          });
          const tokens = tokenService.generate({_id: newUser._id});
          await tokenService.save(newUser._id, tokens.refreshToken);
          res.status(201).send({...tokens, userId: newUser._id, user: newUser});
        } catch (e) {
          res.status(500).json({
            error: {
              code: 500,
              message: 'Oops... There was a server error with your connection, please try again later...',
            },
          });
        }
      }],
);
router.post('/signInWithPassword', [
  check('email', 'email is not correct')
      .normalizeEmail()
      .isEmail(),
  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({
          error: {
            message: 'INVALID_DATA',
            code: 400,
            errors: errors.array(),
          },
        });
      }
      const {email, password} = req.body;
      const existingUser = await User.findOne({email});
      if (!existingUser) {
        return res.status(400).json({
          error: {
            message: 'EMAIL_NOT_FOUND',
            code: 400,
          },
        });
      }
      const isPasswordEqual = await bcrypt.compare(
          password, existingUser.password);
      if (!isPasswordEqual) {
        return res.status(400).json({
          error: {
            message: 'INVALID_PASSWORD',
            code: 400,
          },
        });
      }
      const tokens = tokenService.generate({_id: existingUser._id});
      await tokenService.save(existingUser._id, tokens.refreshToken);
      res.status(201).send(
          {...tokens, userId: existingUser._id, user: existingUser});
    } catch (e) {
      res.status(500).json({
        message: 'Oops... There was a server error with your connection, please try again later...',
      });
    }
  },
]);
router.post('/signInWithGoogle', [
  check('email', 'email is not correct')
      .normalizeEmail()
      .isEmail(),
  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({
          error: {
            message: 'INVALID_DATA',
            code: 400,
            errors: errors.array(),
          },
        });
      }
      const {email} = req.body;
      const existingUser = await User.findOne({email});
      if (!existingUser) {
        return res.status(400).json({
          error: {
            message: 'EMAIL_NOT_FOUND',
            code: 400,
          },
        });
      }
      const tokens = tokenService.generate({_id: existingUser._id});
      await tokenService.save(existingUser._id, tokens.refreshToken);
      res.status(201).send(
          {...tokens, userId: existingUser._id, user: existingUser});
    } catch (e) {
      res.status(500).json({
        message: 'Oops... There was a server error with your connection, please try again later...',
      });
    }
  },
]);
function isTokenInvalid(data, dbToken) {
  return !data||!dbToken||data._id !== dbToken?.user?.toString();
}
router.post('/token', async (req, res) => {
  try {
    const {refresh_token: refreshToken} = req.body;
    const data = tokenService.validateRefresh(refreshToken);
    const dbToken = await tokenService.findToken(refreshToken);

    if (isTokenInvalid(data, dbToken)) {
      return res.status(401).json({message: 'UnauthorizedAuth'});
    }
    const tokens = tokenService.generate({_id: data._id});
    await tokenService.save(data._id, tokens.refreshToken);
    res.status(201).send({...tokens, userId: data._id});
  } catch (e) {
    res.status(500).json({
      message: 'Oops... There was a server error with your connection, please try again later...',
    });
  }
});
module.exports = router;
