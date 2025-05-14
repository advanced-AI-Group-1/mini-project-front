import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlane, faCloud } from '@fortawesome/free-solid-svg-icons';

const WhiteLoadingLayout = ({ children, isLoading = false, fullPage = true }) => {
  const [clouds, setClouds] = useState([]);
  
  // 처음 마운트될 때 랜덤 구름 생성
  useEffect(() => {
    if (isLoading) {
      // 5-8개의 랜덤 구름 생성
      const count = Math.floor(Math.random() * 4) + 5;
      const newClouds = [];
      
      for (let i = 0; i < count; i++) {
        newClouds.push({
          id: i,
          top: Math.random() * 80 + 5, // 5% ~ 85%
          size: Math.random() * 0.6 + 0.6, // 0.6 ~ 1.2
          speed: Math.random() * 40 + 20, // 20s ~ 60s
          delay: Math.random() * 10, // 0 ~ 10s
        });
      }
      
      setClouds(newClouds);
    }
  }, [isLoading]);
  
  if (!isLoading) return children;
  
  return (
    <div className={`relative ${fullPage ? 'min-h-screen' : 'h-full'} overflow-hidden`}>
      {/* 하얀색 배경 */}
      <div className="absolute inset-0 bg-white z-0"></div>
      
      {/* 하늘색 비행기 */}
      <div className="airplane z-20">
        <FontAwesomeIcon 
          icon={faPlane} 
          className="text-sky-500 text-3xl transform rotate-12"
        />
      </div>
      
      {/* 하늘색 구름들 */}
      {clouds.map(cloud => (
        <div 
          key={cloud.id}
          className="cloud z-10 absolute"
          style={{
            top: `${cloud.top}%`,
            transform: `scale(${cloud.size})`,
            animation: `moveCloud ${cloud.speed}s linear infinite`,
            animationDelay: `${cloud.delay}s`,
          }}
        >
          <FontAwesomeIcon 
            icon={faCloud} 
            className="text-sky-300 text-5xl" 
          />
        </div>
      ))}
      
      {/* 실제 콘텐츠 */}
      <div className="relative z-30">
        {children}
      </div>
      
      {/* 애니메이션 스타일 */}
      <style jsx>{`
        .airplane {
          position: absolute;
          top: 30%;
          left: -50px;
          animation: movePlane 18s ease-in-out infinite;
        }
        
        @keyframes movePlane {
          0% {
            transform: translate(0, 0) rotate(12deg);
          }
          25% {
            transform: translate(calc(25vw), -30px) rotate(5deg);
          }
          50% {
            transform: translate(calc(50vw), 20px) rotate(10deg);
          }
          75% {
            transform: translate(calc(75vw), -40px) rotate(8deg);
          }
          100% {
            transform: translate(calc(100vw + 50px), 0) rotate(12deg);
          }
        }
        
        .cloud {
          left: -100px;
        }
        
        @keyframes moveCloud {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(100vw + 150px));
          }
        }
      `}</style>
    </div>
  );
};

export default WhiteLoadingLayout; 