import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col justify-between min-h-screen">
      <main className="flex justify-center items-center flex-grow">
        <div className="text-center">
          <Image className="m-auto" src={"/images/logoBlack.png"} alt="logo" width={400} height={400} />
          <h1 className="text-2xl font-bold mb-8 text-[#78716c]">Welcome to OpenFortWallet</h1>
          <div className="flex flex-col justify-center items-center space-y-4">
            <Link href="/login" className="bg-[#ea580c] shadow-md hover:bg-[#EB8D5A] text-white font-bold py-3 rounded focus:outline-none focus:shadow-outline w-48 text-center">
              Login
            </Link>
            <Link href="/signup" className="bg-[#ea580c] shadow-md hover:bg-[#EB8D5A] text-white font-bold py-3 rounded focus:outline-none focus:shadow-outline w-48 text-center">
              Sign Up
            </Link>
          </div>
        </div>
      </main>
      <footer className="text-gray-400 text-center py-4">
        © 2024 Alamas Labs. All rights reserved.
      </footer>
    </div>
  );
}
