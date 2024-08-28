import { useState, FormEvent } from 'react';
import openfort from '../lib/openfortClient';
import Image from 'next/image';
import FormBox from '@/components/formBox';
import '../app/globals.css';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const response = await openfort.logInWithEmailPassword({
        email,
        password,
      });
    } catch (error) {
      console.error('Login error:', error);
    }
  };

  return (
    <div className="flex flex-col justify-between min-h-screen">
      <main className='flex flex-col justify-center items-center flex-grow'>
        <Image src={"/images/logoBlack.png"} height={400} width={400} alt="logo"></Image>
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
          <label className="block text-gray-700 font-semibold mb-2">
            Password
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="shadow appearance-none border rounded w-full mt-2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </label>
          <button
            type="submit"
            className="bg-[#ea580c] hover:bg-[#EB8D5A] mt-2 text-white font-semibold py-2 px-4 rounded"
          >
            Log In
          </button>
        </FormBox>
      </main>
      <footer className="text-gray-400 text-center py-4">
        © 2024 Alamas Labs. All rights reserved.
      </footer>
    </div>
  );
};

