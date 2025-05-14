import { inputImagesAtom } from "@src/config/atom.js";
import { useAtom } from "jotai";
import React, { useMemo, useState } from "react";

const InputLayout = (props) => {
  const { onClick = () => {}, text, fileInputRef, handleFile } = props;
  const [isDragging, setIsDragging] = useState(false);
  const [images, setImages] = useAtom(inputImagesAtom);

  // 이미지 개수에 따라 그리드 설정을 동적으로 계산
  const gridSettings = useMemo(() => {
    const count = images.length;

    // 이미지 개수에 따른 그리드 설정
    if (count <= 5) {
      return {
        cols: "grid-cols-5",
        size: "",
      };
    } else if (count <= 10) {
      return {
        cols: "grid-cols-5",
        size: "",
      };
    } else if (count <= 15) {
      return {
        cols: "grid-cols-5",
        size: "",
      };
    } else {
      return {
        cols: "grid-cols-6",
        size: "",
      };
    }
  }, [images.length]);

  // 드래그 이벤트 핸들러
  const handleDragEnter = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (!isDragging) {
      setIsDragging(true);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);

    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      const file = e.dataTransfer.files[0];

      // 두 가지 방법으로 처리 (둘 중 하나만 사용)
      if (handleFile) {
        // 1. 상위 컴포넌트에서 제공한 핸들러 사용
        handleFile(file);
      } else if (fileInputRef && fileInputRef.current) {
        // 2. 파일 입력 요소에 파일 설정
        const dataTransfer = new DataTransfer();
        dataTransfer.items.add(file);
        fileInputRef.current.files = dataTransfer.files;

        // 파일 변경 이벤트 트리거
        const event = new Event("change", { bubbles: true });
        fileInputRef.current.dispatchEvent(event);
      }
    }
  };

  return (
    <div
      className={`m-2 flex flex-col rounded-2xl
      ${images.length > 0 ? "justify-start" : "justify-center"} items-center
      border-2 ${isDragging ? "border-indigo-600" : "border-indigo-400"} border-dashed
      cursor-pointer transition-colors duration-200 ease-in-out
      ${isDragging ? "bg-indigo-50" : ""}
      min-h-96 w-full max-w-[48rem]`}
      onClick={onClick}
      onDragEnter={handleDragEnter}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      {images.length > 0 ? (
        <div
          className={`grid ${gridSettings.cols} gap-1 p-2 w-full content-start`}
          style={{
            maxHeight: "384px",
            overflowY: "auto",
            gridAutoRows: "1fr",
          }}
        >
          {images.map((image, index) => (
            <div
              key={index}
              className="aspect-square w-full h-full overflow-hidden rounded-lg"
              style={{ minHeight: "0" }}
            >
              <img
                src={URL.createObjectURL(image)}
                alt={`Image ${index}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      ) : isDragging ? (
        <div className="flex items-center justify-center h-40">
          파일을 여기에 놓으세요
        </div>
      ) : (
        <div className="flex items-center justify-center h-40">{text}</div>
      )}
    </div>
  );
};

export default InputLayout;
