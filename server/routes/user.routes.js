const express = require('express');
const User = require('../models/User');
const auth = require('../middleware/auth.middleware');
// eslint-disable-next-line new-cap
const router = express.Router({mergeParams: true});

router.patch('/:userId', auth, async (req, res) => {
  try {
    const {userId} = req.params;
    // eslint-disable-next-line max-len
    const updatedUser = await User.findByIdAndUpdate(userId, req.body, {new: true});
    res.send(updatedUser);
  } catch (e) {
    res.status(500).json({
      message: 'Server error. Please try later...',
    });
  }
});
router.get('/:userId', async (req, res) => {
  try {
    const {userId} = req.params;
    const user = await User.findById(userId);
    res.send(user);
  } catch (e) {
    res.status(500).json({
      message: 'Server error. Please try later...',
    });
  }
});
module.exports = router;
