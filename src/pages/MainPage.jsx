import React, { useState } from "react";
import InputImage from "../components/common/InputImage.jsx";
import InputLayout from "../components/layout/InputLayout.jsx";

const MainPage = () => {
  const [images, setImages] = useState([]);
  return (
    <div className="w-[100vw] h-[100vh] flex justify-center items-center">
      <InputImage
        Layout={InputLayout}
        layoutProps={{ text: "이미지를 올려주세요" }}
      />
    </div>
  );
};

export default MainPage;
