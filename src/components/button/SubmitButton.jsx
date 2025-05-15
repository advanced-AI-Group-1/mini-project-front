import LoadingModal from '@src/components/modal/LoadingModal.jsx';
import { inputImageAtom, isLoadingAtom } from '@src/config/atom.js';
import useEvalutePhoto from '@src/hooks/useEvalutePhoto.js';
import { useAtom } from 'jotai';
import React from 'react';

const SubmitButton = () => {
  const [isLoading, setIsLoading] = useAtom(isLoadingAtom);
  const [image] = useAtom(inputImageAtom);
  const { mutate } = useEvalutePhoto();

  const handleSubmit = () => {
    if (!image) {
      alert('이미지를 먼저 업로드해주세요.');
      return;
    }

    // 이미지 평가 API 호출
    mutate(image);
  };

  return (
    <>
      <button
        className="w-full py-3 px-4 mt-4
        flex justify-center items-center 
        bg-primary-600 hover:bg-primary-700
        text-white font-medium rounded-lg 
        transition-colors duration-200"
        onClick={handleSubmit}
        disabled={isLoading}
      >
        {isLoading ? '분석 중...' : '분석'}
      </button>
      <LoadingModal isOpen={isLoading} />
    </>
  );
};

export default SubmitButton;
