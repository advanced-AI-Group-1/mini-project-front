import { evaluationResultAtom, isLoadingAtom } from '@src/config/atom.js';
import axiosCustom from '@src/config/axios.js';
import { useMutation } from '@tanstack/react-query';
import { useAtom } from 'jotai';

const useEvalutePhoto = () => {
  const [, setIsLoading] = useAtom(isLoadingAtom);
  const [, setEvaluationResult] = useAtom(evaluationResultAtom);

  const { mutate, isLoading: isMutationLoading } = useMutation({
    mutationFn: (file) => {
      // FormData 객체 생성
      const formData = new FormData();
      formData.append('image', file);

      return axiosCustom.post('/api/analyze-photo', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
    },
    onMutate: () => {
      setIsLoading(true);
      // 이전 결과 초기화
      setEvaluationResult(null);
    },
    onSuccess: (response) => {
      // 응답 데이터를 상태에 저장
      console.log('평가 결과:', response.data);
      setEvaluationResult(response.data);
    },
    onError: (error) => {
      console.error('평가 중 오류 발생:', error);
      // 오류 발생 시 사용자에게 알림 (필요하다면 추가 구현)
    },
    onSettled: () => {
      // 성공이든 실패든 로딩 상태 해제
      setIsLoading(false);
    },
  });

  return { mutate, isLoading: isMutationLoading };
};

export default useEvalutePhoto;
