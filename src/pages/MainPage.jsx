import SubmitButton from '@src/components/button/SubmitButton.jsx';
import InputImage from '@src/components/common/InputImage.jsx';
import EvaluataionLayout from '@src/components/layout/EvaluationLayout.jsx';
import InputLayout from '@src/components/layout/InputLayout.jsx';
import MainContainer from '@src/components/layout/MainContainer.jsx';
import React, { useState } from 'react';

const MainPage = () => {
  const [images, setImages] = useState([]);
  return (
    <MainContainer>
      <InputImage
        Layout={InputLayout}
        layoutProps={{ text: '이미지를 올려주세요' }}
      />
      <SubmitButton />
      <EvaluataionLayout />
    </MainContainer>
  );
};

export default MainPage;
