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
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      zIndex: 50,
    }}>
      <div style={{
        backgroundColor: '#1f2937',  // Tailwind의 bg-gray-800 색상 사용
        padding: '24px',
        borderRadius: '8px',
        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
        maxWidth: '400px',
        width: '100%',
      }}>
        <h2 style={{ 
          textAlign: 'center', 
          color: '#fff', 
          marginBottom: '20px',
          fontSize: '1.5rem',
          fontWeight: 'bold',
        }}>로그인</h2>  {/* 팝업 제목 수정 */}
        <LoginPage />  {/* 로그인 폼 컴포넌트 */}
        <button 
          onClick={() => window.history.back()}  // 팝업을 닫는 기능
          style={{ 
            marginTop: '20px',
            display: 'block',
            width: '100%',
            padding: '10px',
            backgroundColor: '#374151',  // Tailwind의 bg-gray-700 색상 사용
            color: '#fff',
            borderRadius: '4px',
            border: 'none',
            fontWeight: 'bold',
          }}>
          닫기
        </button>
      </div>
    </div>
  );
};

export default LoginPopup;
