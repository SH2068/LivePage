import React from 'react';
import LoginPage from './LoginPage';  // 로그인 폼 컴포넌트

const LoginPopup: React.FC = () => {
  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.7)',  // 더 어두운 배경
      zIndex: 50,
    }}>
      <div style={{
        backgroundColor: '#1f2937',  // Tailwind의 bg-gray-800 색상 사용
        padding: '32px',
        borderRadius: '12px',
        boxShadow: '0 15px 40px rgba(0, 0, 0, 0.3)',  // 더 진한 그림자
        maxWidth: '500px',
        width: '100%',
      }}>
        <h2 style={{ 
          textAlign: 'center', 
          color: '#fff', 
          marginBottom: '24px',
          fontSize: '2rem',
          fontWeight: 'bold',
        }}>로그인</h2>
        <LoginPage />  {/* 로그인 폼 컴포넌트 */}
        <button 
          onClick={() => window.history.back()}  // 팝업을 닫는 기능
          style={{ 
            marginTop: '24px',
            display: 'block',
            width: '100%',
            padding: '12px',
            backgroundColor: '#4f46e5',  // Tailwind의 indigo-600 색상
            color: '#fff',
            borderRadius: '6px',
            border: 'none',
            fontWeight: 'bold',
            fontSize: '1rem',
            cursor: 'pointer',
            transition: 'background-color 0.3s',
          }}
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#4338ca'}  // Hover 스타일
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#4f46e5'}
        >
          닫기
        </button>
      </div>
    </div>
  );
};

export default LoginPopup;
