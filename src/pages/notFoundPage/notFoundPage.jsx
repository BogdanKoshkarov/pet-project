import React from 'react';
import {Link} from 'react-router-dom';

const NotFoundPage = () => {
  return <>{`This page doesn't exist. Go'${(<Link to='/'>home</Link>)}`}</>;
};

export default NotFoundPage;
