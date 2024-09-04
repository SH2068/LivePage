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
      <div className="w-full max-w-md p-8 bg-gray-900 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-8 text-center">로그인</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label className="block text-sm font-medium mb-2">이메일</label>
            <input
              type="email"
              placeholder="이메일을 입력해주세요."
              className="w-full p-4 bg-gray-800 rounded-lg border border-gray-600 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label className="block text-sm font-medium mb-2">비밀번호</label>
            <input
              type="password"
              placeholder="비밀번호를 입력해주세요."
              className="w-full p-4 bg-gray-800 rounded-lg border border-gray-600 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="w-full p-4 bg-indigo-600 rounded-lg font-bold text-white hover:bg-indigo-700 transition duration-300"
          >
            로그인하기
          </button>
        </form>
        <div className="flex justify-between mt-4 text-sm">
          <a href="#" className="text-gray-400 hover:text-white transition">이메일 찾기</a>
          <a href="#" className="text-gray-400 hover:text-white transition">비밀번호 찾기</a>
          <a href="#" className="text-gray-400 hover:text-white transition">회원가입</a>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
