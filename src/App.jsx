import React, { memo } from 'react';

const App = (props) => {
  console.log('App render');
  const { info } = props;
  return <div>{info.name}</div>;
};

export default memo(App);
