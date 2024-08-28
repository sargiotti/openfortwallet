import React from 'react';

export default function Spinner() {
  return (
    <div className="flex justify-center items-center">
      <div className="w-12 h-12 border-4 border-[#ea580c] border-solid border-t-transparent rounded-full animate-spin"></div>
    </div>
  );
}