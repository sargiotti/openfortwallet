import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

type User = {
  name: string;
  walletId: string;
  accountCreated: string;
};

type UserInfoProps = {
  user?: User;
};

export default function UserInfo({ user }: UserInfoProps) {
  if (!user) {
    return (
      <div className="border p-4 shadow-md rounded-lg bg-white text-red-500">
        <h2 className="text-xl font-semibold mb-2">User Information</h2>
        <p>Error: User information is not available.</p>
      </div>
    );
  }

  const { name, walletId, accountCreated } = user;
  return (
    <div className="border-2 p-4 rounded-lg bg-white h-full flex items-center">
      <div className="w-3/4 pl-4">
        <h2 className="text-3xl font-semibold mb-2 text-[#78716c]">User Information</h2>
        <p className='py-2 text-xl'><strong>Name:</strong> {name}</p>
        <p className='py-2 text-xl'><strong>Wallet ID:</strong> {walletId}</p>
        <p className='py-2 text-xl'><strong>Account Created:</strong> {accountCreated}</p>
      </div>
      <div className="w-1/4 flex justify-center">
        <FontAwesomeIcon icon={faUser} className="text-gray-600 w-24 h-24" />
      </div>
    </div>
  );
}
