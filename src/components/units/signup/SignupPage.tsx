import React, { useState } from 'react';

const SignupPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError('비밀번호가 일치하지 않습니다.');
      return;
    }
    // 회원가입 로직 처리
  };

  return (
    <div style={{
      maxWidth: '400px',
      margin: '0 auto',
      padding: '20px',
      backgroundColor: '#000',
      color: '#fff',
      borderRadius: '8px'
    }}>
      <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>회원가입</h1>
      <form onSubmit={handleSignup}>
        <div>
          <label>이메일</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="이메일을 입력해주세요."
            style={{
              width: '100%',
              padding: '10px',
              margin: '10px 0',
              borderRadius: '4px',
              border: '1px solid #333',
              backgroundColor: '#444',
              color: '#fff'
            }}
          />
        </div>
        <div>
          <label>이름</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="이름을 입력해주세요."
            style={{
              width: '100%',
              padding: '10px',
              margin: '10px 0',
              borderRadius: '4px',
              border: '1px solid #333',
              backgroundColor: '#444',
              color: '#fff'
            }}
          />
        </div>
        <div>
          <label>비밀번호</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="비밀번호를 입력해주세요."
            style={{
              width: '100%',
              padding: '10px',
              margin: '10px 0',
              borderRadius: '4px',
              border: '1px solid #333',
              backgroundColor: '#444',
              color: '#fff'
            }}
          />
        </div>
        <div>
          <label>비밀번호 확인</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="비밀번호 확인을 입력해주세요."
            style={{
              width: '100%',
              padding: '10px',
              margin: '10px 0',
              borderRadius: '4px',
              border: '1px solid #333',
              backgroundColor: '#444',
              color: '#fff'
            }}
          />
        </div>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <button type="submit" style={{
          width: '100%',
          padding: '10px',
          marginTop: '20px',
          borderRadius: '4px',
          border: 'none',
          backgroundColor: '#333',
          color: '#fff',
          fontWeight: 'bold'
        }}>회원가입하기</button>
      </form>
    </div>
  );
};

export default SignupPage;
