import React, { useState } from 'react';

const LoginPage = () => {
  const [email, setEmail] = useState('');  // 빈 문자열로 초기화
  const [password, setPassword] = useState('');  // 빈 문자열로 초기화

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // 로그인 처리 로직
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white">
      <div className="w-full max-w-md p-6">
        <h1 className="text-2xl font-bold mb-8">로그인</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm mb-1">이메일</label>
            <input
              type="email"
              placeholder="이메일을 입력해주세요."  // Placeholder가 안내용 텍스트
              className="w-full p-3 bg-gray-800 rounded"
              value={email}  // value에 입력 상태를 연결
              onChange={(e) => setEmail(e.target.value)}  // 상태 업데이트
            />
          </div>
          <div className="mb-6">
            <label className="block text-sm mb-1">비밀번호</label>
            <input
              type="password"
              placeholder="비밀번호를 입력해주세요."  // Placeholder
              className="w-full p-3 bg-gray-800 rounded"
              value={password}  // value에 비밀번호 상태 연결
              onChange={(e) => setPassword(e.target.value)}  // 상태 업데이트
            />
          </div>
          <button
            type="submit"
            className="w-full p-3 bg-gray-700 rounded font-bold"
          >
            로그인하기
          </button>
        </form>
        <div className="flex justify-between mt-4 text-sm">
          <a href="#" className="text-gray-400">이메일 찾기</a>
          <a href="#" className="text-gray-400">비밀번호 찾기</a>
          <a href="#" className="text-gray-400">회원가입</a>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
