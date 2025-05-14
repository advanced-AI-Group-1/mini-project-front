import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const WhiteLoadingBackground = ({ children }) => {
  return (
    <div className="loading-background relative overflow-hidden w-full h-full">
      {/* 하얀 배경 */}
      <div className="absolute inset-0 bg-white z-0"></div>

      {/* 구름들 */}
      <div className="cloud cloud-1 z-10"></div>
      <div className="cloud cloud-2 z-10"></div>
      <div className="cloud cloud-3 z-10"></div>
      <div className="cloud cloud-4 z-10"></div>
      <div className="cloud cloud-5 z-10"></div>

      {/* 비행기 */}
      <div className="airplane z-20">
        <FontAwesomeIcon
          icon={faPaperPlane}
          className="text-sky-500 text-4xl"
        />
      </div>

      {/* 실제 콘텐츠 */}
      <div className="relative z-30">{children}</div>

      {/* CSS 스타일 */}
      <style jsx>{`
        .loading-background {
          min-height: 100vh;
        }

        /* 구름 스타일 */
        .cloud {
          position: absolute;
          background: #529cef; /* sky-300 */
          border-radius: 50%;
          opacity: 0.6;
        }

        .cloud:before,
        .cloud:after {
          content: '';
          position: absolute;
          background: #529cef; /* sky-300 */
          border-radius: 50%;
        }

        .cloud-1 {
          width: 100px;
          height: 60px;
          top: 15%;
          left: -100px;
          animation: moveCloud 30s linear infinite;
        }

        .cloud-1:before {
          width: 50px;
          height: 50px;
          top: -25px;
          left: 15px;
        }

        .cloud-1:after {
          width: 60px;
          height: 60px;
          top: -30px;
          left: 45px;
        }

        .cloud-2 {
          width: 120px;
          height: 70px;
          top: 40%;
          left: -120px;
          animation: moveCloud 25s linear infinite;
          animation-delay: 5s;
        }

        .cloud-2:before {
          width: 60px;
          height: 60px;
          top: -30px;
          left: 20px;
        }

        .cloud-2:after {
          width: 70px;
          height: 70px;
          top: -35px;
          left: 50px;
        }

        .cloud-3 {
          width: 80px;
          height: 50px;
          top: 25%;
          left: -80px;
          animation: moveCloud 35s linear infinite;
          animation-delay: 10s;
        }

        .cloud-3:before {
          width: 40px;
          height: 40px;
          top: -20px;
          left: 10px;
        }

        .cloud-3:after {
          width: 50px;
          height: 50px;
          top: -25px;
          left: 30px;
        }

        .cloud-4 {
          width: 150px;
          height: 90px;
          top: 60%;
          left: -150px;
          animation: moveCloud 28s linear infinite;
          animation-delay: 8s;
        }

        .cloud-4:before {
          width: 70px;
          height: 70px;
          top: -35px;
          left: 25px;
        }

        .cloud-4:after {
          width: 85px;
          height: 85px;
          top: -42px;
          left: 60px;
        }

        .cloud-5 {
          width: 110px;
          height: 65px;
          top: 75%;
          left: -110px;
          animation: moveCloud 32s linear infinite;
          animation-delay: 15s;
        }

        .cloud-5:before {
          width: 55px;
          height: 55px;
          top: -27px;
          left: 18px;
        }

        .cloud-5:after {
          width: 65px;
          height: 65px;
          top: -32px;
          left: 48px;
        }

        /* 구름 이동 애니메이션 */
        @keyframes moveCloud {
          0% {
            transform: translateX(0);
            left: -150px;
          }
          100% {
            transform: translateX(calc(100vw + 200px));
            left: 100%;
          }
        }

        /* 비행기 스타일 및 애니메이션 */
        .airplane {
          position: absolute;
          top: 30%;
          left: -80px;
          animation: movePlane 15s ease-in-out infinite;
          transform: rotate(25deg);
        }

        @keyframes movePlane {
          0% {
            transform: translate(0, 0) rotate(25deg);
            left: -80px;
          }
          20% {
            transform: translate(calc(20vw), -50px) rotate(15deg);
          }
          40% {
            transform: translate(calc(40vw), 30px) rotate(25deg);
          }
          60% {
            transform: translate(calc(60vw), -20px) rotate(20deg);
          }
          80% {
            transform: translate(calc(80vw), 50px) rotate(25deg);
          }
          100% {
            transform: translate(calc(100vw + 80px), 0) rotate(20deg);
            left: 100%;
          }
        }
      `}</style>
    </div>
  );
};

export default WhiteLoadingBackground;
