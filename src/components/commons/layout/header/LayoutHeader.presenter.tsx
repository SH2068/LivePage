import React, { useState } from 'react';
import {
  InnerButton,
  InnerLogo,
  InnerWrapper,
  Wrapper,
} from "./LayoutHeader.styles";
import type { ILayoutHeaderProps } from "./LayoutHeader.types";
import LoginPopup from '../../../units/login/LoginPopup';  // 올바른 경로로 수정
import SignupPopup from '../../../units/signup/SignupPopup';  // 올바른 경로로 수정

export default function LayoutHeaderUI(props: ILayoutHeaderProps): JSX.Element {
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
    <Wrapper>
      <InnerWrapper>
        <InnerLogo onClick={props.onClickLogo}>💎 LIVE</InnerLogo>
        <div>
          <InnerButton onClick={handleLoginClick}>로그인</InnerButton>
          <InnerButton onClick={handleSignupClick}>회원가입</InnerButton>
        </div>
      </InnerWrapper>

      {showLogin && <LoginPopup />}
      {showSignup && <SignupPopup />}
      {(showLogin || showSignup) && (
        <button onClick={closePopup}>팝업 닫기</button>
      )}
    </Wrapper>
  );
}
