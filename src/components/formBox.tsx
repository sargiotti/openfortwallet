import React from 'react';

type CustomFormProps = {
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  children: React.ReactNode;
};

export default function FormBox ({ onSubmit, children }: CustomFormProps) {
  return (
    <form 
      onSubmit={onSubmit} 
      className="w-full max-w-sm border p-5 shadow-md rounded-lg bg-white"
    >
      {children}
    </form>
  );
};
