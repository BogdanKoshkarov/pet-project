import {useDispatch, useSelector} from 'react-redux';
import {uploadItemList} from '../store/itemsSlice';
import PropTypes from 'prop-types';
import {uploadCategoriesList} from '../store/categorySlice';
import {getIsLoggedIn, loadUser} from '../store/userSlice';
import {useEffect} from 'react';

const AppLoader = ({children}) => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(getIsLoggedIn());
  useEffect(()=>{
    dispatch(uploadCategoriesList());
    dispatch(uploadItemList());
  }, []);
  useEffect(()=>{
    if (isLoggedIn) {
      dispatch(loadUser());
    }
  }, [isLoggedIn]);
  return children;
};
AppLoader.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export default AppLoader;
