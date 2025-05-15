import { evaluationResultAtom } from '@src/config/atom.js';
import { useAtom } from 'jotai';
import React from 'react';

const EvaluataionLayout = () => {
  const [evaluationResult] = useAtom(evaluationResultAtom);

  if (!evaluationResult) {
    return null;
  }

  // 결과 항목 그룹화
  const resultGroups = {
    // 주요 결과
    mainResults: [
      { key: 'result', label: '적합 여부', value: evaluationResult.result },
      { key: 'emotion', label: '표정', value: evaluationResult.emotion },
      { key: '최종 판단', label: '최종 판단', value: evaluationResult['최종 판단'] },
    ],
    // 수치 데이터
    measurements: [
      { key: '입꼬리기울기', label: '입꼬리 기울기', value: evaluationResult['입꼬리기울기'] },
      { key: '입꼬리거리(px)', label: '입꼬리 거리(px)', value: evaluationResult['입꼬리거리(px)'] },
      { key: '입벌어짐비율', label: '입 벌어짐 비율', value: evaluationResult['입벌어짐비율'] },
      { key: '입꼬리비대칭', label: '입꼬리 비대칭', value: evaluationResult['입꼬리비대칭'] },
      { key: '광대비대칭', label: '광대 비대칭', value: evaluationResult['광대비대칭'] },
      { key: '입중앙오프셋', label: '입 중앙 오프셋', value: evaluationResult['입중앙오프셋'] },
    ],
    // 판정 결과
    judgments: [
      { key: '눈썹가림', label: '눈썹 가림', value: evaluationResult['눈썹가림'] },
      { key: '귀노출', label: '귀 노출', value: evaluationResult['귀노출'] },
      { key: '시선정면', label: '시선 정면', value: evaluationResult['시선정면'] },
      { key: '얼굴정면', label: '얼굴 정면', value: evaluationResult['얼굴정면'] },
    ],
  };

  // 값에 따른 색상 결정
  const getValueColor = (value) => {
    if (typeof value === 'string') {
      if (value.includes('⭕')) return 'text-green-600';
      if (value.includes('❌')) return 'text-red-600';
    }
    return 'text-gray-800';
  };

  // 수치 데이터 포맷팅
  const formatValue = (value) => {
    if (typeof value === 'number') {
      return value.toFixed(2);
    }
    return value;
  };

  return (
    <div className="mt-8 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-6 text-gray-800 border-b pb-2">증명사진 분석 결과</h2>
      
      {/* 주요 결과 */}
      <div className="mb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {resultGroups.mainResults.map((item) => (
            <div key={item.key} className="p-4 bg-gray-50 rounded-lg text-center">
              <h3 className="text-lg font-medium text-gray-700 mb-2">{item.label}</h3>
              <p className={`text-xl font-bold ${getValueColor(item.value)}`}>{item.value}</p>
            </div>
          ))}
        </div>
      </div>
      
      {/* 측정 수치 */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold mb-3 text-gray-800">측정 수치</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          {resultGroups.measurements.map((item) => (
            <div key={item.key} className="flex justify-between items-center p-3 bg-gray-50 rounded">
              <span className="font-medium text-gray-700">{item.label}</span>
              <span className="font-bold">{formatValue(item.value)}</span>
            </div>
          ))}
        </div>
      </div>
      
      {/* 판정 결과 */}
      <div>
        <h3 className="text-lg font-semibold mb-3 text-gray-800">판정 결과</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {resultGroups.judgments.map((item) => (
            <div key={item.key} className="flex justify-between items-center p-3 bg-gray-50 rounded">
              <span className="font-medium text-gray-700">{item.label}</span>
              <span className={`font-bold ${getValueColor(item.value)}`}>{item.value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EvaluataionLayout;
