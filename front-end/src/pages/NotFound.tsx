//@ts-nocheck
import React from 'react';
import { useRouteError } from 'react-router-dom';

const NotFound = () => {
  const error = useRouteError();
  console.error(error);
  return (
    <div>
      <span>Page does not exist</span>
      <p>{error.statusText || error.message}</p>
    </div>
  );
};

export default NotFound;
