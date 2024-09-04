import React, { useState } from 'react';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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
              placeholder="이메일을 입력해주세요."
              className="w-full p-3 bg-gray-800 rounded"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <p className="text-red-500 text-xs mt-1">이메일을 확인해 주세요.</p>
          </div>
          <div className="mb-6">
            <label className="block text-sm mb-1">비밀번호</label>
            <input
              type="password"
              placeholder="비밀번호를 입력해주세요."
              className="w-full p-3 bg-gray-800 rounded"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <p className="text-red-500 text-xs mt-1">비밀번호를 확인해 주세요.</p>
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
