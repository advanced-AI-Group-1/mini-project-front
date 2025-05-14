import { inputImagesAtom } from "@src/config/atom.js";
import { useAtom } from "jotai";
import React, { useEffect, useRef } from "react";
//input file을 만들기
//input은 보이지 않게 하고
//div를 클릭할 경우 만들 수 있도록
/**
 * @param props {object}
 * @param props.images {Array} 파일 객체 리스트
 * @param props.setImages {Function} 파일 객체 리스트를 변경하는 함수
 * @param props.Layout {Function} input 디자인 컴포넌트
 * @param props.layoutProps {Object} Layout 컴포넌트에 전달할 props
 * @returns {Element}
 * @constructor
 */
const InputImage = (props) => {
  const { Layout, layoutProps = {} } = props;
  const [images, setImages] = useAtom(inputImagesAtom);

  const fileInputRef = useRef(null);

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    if (files.length === 0) {
      return;
    }
    files.forEach((file) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
    });
    console.log("files", files);
    setImages([...images, ...files]);
  };

  useEffect(() => {
    console.log("images", images);
  }, [images]);

  return (
    <>
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        className="hidden"
        accept="image/*"
        multiple
      />
      {Layout && (
        <Layout
          onClick={() => fileInputRef.current.click()}
          fileInputRef={fileInputRef}
          handleFile={handleFileChange}
          {...layoutProps}
        />
      )}
    </>
  );
};

export default InputImage;
