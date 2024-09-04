import React, { useState } from 'react';
import LoginPopup from '../../units/login/LoginPopup';
import SignupPopup from '../../units/signup/SignupPopup';

const AuthPage: React.FC = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

  const handleLoginClick = () => {
    setShowLogin(true);
    setShowSignup(false);
  };

  const handleSignupClick = () => {
    setShowSignup(true);
    setShowLogin(false);
  };

  const closePopup = () => {
    setShowLogin(false);
    setShowSignup(false);
  };

  return (
    <div>
      <button onClick={handleLoginClick}>로그인</button>
      <button onClick={handleSignupClick}>회원가입</button>

      {showLogin && <LoginPopup />}
      {showSignup && <SignupPopup />}
      {(showLogin || showSignup) && (
        <button onClick={closePopup}>팝업 닫기</button>
      )}
    </div>
  );
};

export default AuthPage;
