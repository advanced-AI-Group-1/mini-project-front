import LoadingModal from '@src/components/modal/LoadingModal.jsx';
import { isLoadingAtom } from '@src/config/atom.js';
import { useAtom } from 'jotai';
import React from 'react';

const SubmitButton = () => {
  const [isLoading, setIsLoading] = useAtom(isLoadingAtom);

  const handleSubmit = () => {
    setIsLoading(true);

    // 여기에 분석 API 호출 등의 로직을 추가할 수 있습니다
    // 예시: 3초 후에 로딩 상태를 해제하는 코드
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
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
