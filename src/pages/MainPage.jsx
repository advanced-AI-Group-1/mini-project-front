import SubmitButton from '@src/components/button/SubmitButton.jsx';
import MainContainer from '@src/components/layout/MainContainer.jsx';
import React, { useState } from 'react';
import InputImage from '../components/common/InputImage.jsx';
import InputLayout from '../components/layout/InputLayout.jsx';

const MainPage = () => {
  const [images, setImages] = useState([]);
  return (
    <MainContainer>
      <InputImage
        Layout={InputLayout}
        layoutProps={{ text: '이미지를 올려주세요' }}
      />
      <SubmitButton />
    </MainContainer>
  );
};

export default MainPage;
