import React from 'react';
import WhiteLoadingBackground from './WhiteLoadingBackground';

const WhiteLoadingComponent = ({ message = '로딩 중입니다' }) => {
  return <WhiteLoadingBackground />;
};

export default WhiteLoadingComponent;
