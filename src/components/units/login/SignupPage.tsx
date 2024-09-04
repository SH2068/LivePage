import React, { useState } from 'react';

const SignupPage = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle login logic here
  };
  

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white">
      <div className="w-full max-w-md p-6">
        <h1 className="text-2xl font-bold mb-8">회원가입</h1>
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
          <div className="mb-4">
            <label className="block text-sm mb-1">이름</label>
            <input
              type="text"
              placeholder="이름을 입력해주세요."
              className="w-full p-3 bg-gray-800 rounded"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <p className="text-red-500 text-xs mt-1">이름을 확인해 주세요.</p>
          </div>
          <div className="mb-4">
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
          <div className="mb-6">
            <label className="block text-sm mb-1">비밀번호 확인</label>
            <input
              type="password"
              placeholder="비밀번호 확인을 입력해주세요."
              className="w-full p-3 bg-gray-800 rounded"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <p className="text-red-500 text-xs mt-1">비밀번호가 일치하지 않습니다.</p>
          </div>
          <button
            type="submit"
            className="w-full p-3 bg-gray-700 rounded font-bold"
          >
            회원가입하기
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignupPage;