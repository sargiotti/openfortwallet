import { useState, FormEvent } from 'react';
import Image from 'next/image';
import openfort from '../lib/openfortClient';
import '../app/globals.css';
import EyeIcon from '@/components/eyeIcon';
import FormBox from '@/components/formBox';

export default function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const [error, setError] = useState('');

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    setError('');

    if (!validateEmail(email)) {
      setError('Invalid email format');
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    try {
      await openfort.signUpWithEmailPassword({
        email,
        password,
        options: {
          data: { name: 'User' },
        },
      });
    } catch (error) {
      console.error('Sign up error:', error);
      setError('Sign up failed. Please try again.');
    }
  };

  return (
    <div className="flex flex-col justify-between min-h-screen">
      <main className="flex flex-col justify-center items-center flex-grow">
        <Image src={"/images/logoBlack.png"} height={400} width={400} alt="logo"></Image>
        <h1 className='text-3xl font-semibold text-orange-500 my-3'>Sign Up</h1>
        <FormBox onSubmit={handleSubmit}>
          <label className="block text-gray-700 font-semibold mb-2">
            Email
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="shadow appearance-none border rounded w-full mt-2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </label>

          <label className="block text-gray-700 font-semibold mb-2 relative">
            Password
            <input
              type={passwordVisible ? 'text' : 'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="shadow appearance-none border rounded w-full mt-2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
            <button
              type="button"
              onMouseDown={() => setPasswordVisible(true)}
              onMouseUp={() => setPasswordVisible(false)}
              onMouseLeave={() => setPasswordVisible(false)}
              className="absolute right-2 top-9 bg-transparent hover:bg-gray-200 text-gray-500 font-bold py-1 px-2 rounded-full focus:outline-none focus:shadow-outline"
            >
              <EyeIcon width={20} height={20} />
            </button>
          </label>

          <label className="block text-gray-700 font-semibold mb-2 relative">
            Confirm Password
            <input
              type={confirmPasswordVisible ? 'text' : 'password'}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="shadow appearance-none border rounded w-full mt-2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
            <button
              type="button"
              onMouseDown={() => setConfirmPasswordVisible(true)}
              onMouseUp={() => setConfirmPasswordVisible(false)}
              onMouseLeave={() => setConfirmPasswordVisible(false)}
              className="absolute right-2 top-9 bg-transparent hover:bg-gray-200 text-gray-500 font-bold py-1 px-2 rounded-full focus:outline-none focus:shadow-outline"
            >
              <EyeIcon width={20} height={20} />
            </button>
          </label>

          {error && <p className="text-red-500 text-xs italic mb-4">{error}</p>}

          <button
            type="submit"
            className="bg-[#ea580c] hover:bg-[#EB8D5A] text-white font-bold mt-2 py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Sign Up
          </button>
        </FormBox>
      </main>
      <footer className="text-gray-400 text-center py-4">
        © 2024 Alamas Labs. All rights reserved.
      </footer>
    </div>
  );
};

