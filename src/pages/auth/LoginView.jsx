import { EyeIcon, EyeOff } from 'lucide-react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Logo = () => (
  <div className="mb-10 flex items-center gap-2">
    <span className="inline-flex h-6 w-6 items-center justify-center rounded-md bg-[#2f66ff] text-white">
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
        <path d="M12 3c4.97 0 9 4.03 9 9 0 5.52-4.48 9-9 9S3 17.52 3 12c0-2.31.79-4.43 2.11-6.1C5.04 8.33 7.83 11 12 11c2.76 0 5-2.24 5-5 0-.7-.14-1.36-.39-1.96A8.94 8.94 0 0 1 12 3z" />
      </svg>
    </span>
    <span className="text-xl font-semibold text-[#111b2b]">Deal Hunter</span>
  </div>
);

const TextInput = ({ label, type = 'text', placeholder, value, onChange, right }) => (
  <label className="block">
    <span className="mb-1 block text-sm text-[#111b2b]">{label}</span>
    <div className="relative">
      <input
        type={type}
        className="w-full rounded-md border border-gray-300 px-3 py-3 text-[15px] transition outline-none focus:border-[#2f66ff] focus:ring-2 focus:ring-[#2f66ff]/20"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      {right ? <div className="absolute inset-y-0 right-3 flex items-center">{right}</div> : null}
    </div>
  </label>
);

const LoginView = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [show, setShow] = useState(false);

  return (
    <section className="bg-[#f9fafb]">
      <div className="grid grid-cols-1 items-center md:grid-cols-2">
        {/* Left: form */}
        <div className="px-6 py-10 md:p-24 lg:px-32">
          <Logo />

          <h1 className="mb-2 text-[2rem] leading-tight font-semibold text-[#111b2b]">Login</h1>
          <p className="mb-8 text-[15px] text-[#6b7280]">Login to access your travelwise account</p>

          <form className="space-y-5">
            <TextInput
              label="Email"
              type="email"
              placeholder="john.doe@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <TextInput
              label="Password"
              type={show ? 'text' : 'password'}
              placeholder="••••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              right={
                <button
                  type="button"
                  aria-label={show ? 'Hide password' : 'Show password'}
                  onClick={() => setShow((s) => !s)}
                  className="text-gray-500 hover:text-[#2f66ff]"
                >
                  {show ? <EyeOff /> : <EyeIcon />}
                </button>
              }
            />

            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 text-[14px] text-[#111b2b]">
                <input
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-[#2f66ff] focus:ring-[#2f66ff]"
                />
                Remember me
              </label>
              <Link to="/auth/reset-password" className="text-[14px] text-rose-400 hover:underline">
                Forgot Password
              </Link>
            </div>

            <button
              type="submit"
              className="w-full rounded-md bg-[#2f66ff] py-3 font-medium text-white transition hover:bg-[#1f4fe0]"
            >
              Login
            </button>
          </form>

          <p className="mt-6 text-center text-[14px] text-[#6b7280]">
            Don't have an account?{' '}
            <Link to="/auth/register" className="text-rose-400 hover:underline">
              Sign up
            </Link>
          </p>
        </div>

        {/* Right: image */}
        <div className="">
          <img src="/img/login.png" alt="City skyline" className="h-screen w-full object-cover" />
        </div>
      </div>
    </section>
  );
};

export default LoginView;
