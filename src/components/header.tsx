import React, { useState, useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faCog, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';

type HeaderProps = {
  text?: string;
};

export default function Header({ text }: HeaderProps) {
    const [isMenuOpen, setMenuOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);

    const toggleMenu = () => setMenuOpen(!isMenuOpen);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setMenuOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <header className="bg-[#ea580c] shadow-md p-4 flex items-center relative w-full">
            <div className="text-white font-bold text-xl">
                <Image src="/images/logoWhite.png" alt="logo" width={200} height={200} />
            </div>
            {text && (
                <div className="text-white text-2xl absolute right-32">
                    {text}
                </div>
            )}
            <div className="relative ml-auto" ref={menuRef}>
                <button
                    onClick={toggleMenu}
                    className="text-white focus:outline-none hover:bg-[#EB8D5A] rounded-md h-10 w-10 flex justify-center items-center"
                >
                    <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff">
                        <g id="SVGRepo_bgCarrier" stroke-width="0" />
                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" />
                        <g id="SVGRepo_iconCarrier">
                            <path d="M4 6H20M4 12H20M4 18H20" stroke="#ffffff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                        </g>
                    </svg>
                </button>
                {isMenuOpen && (
                    <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2">
                        <a href="#" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-200">
                            <FontAwesomeIcon icon={faUser} className="w-5 h-5 mr-2" />
                            View Profile
                        </a>
                        <a href="#" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-200">
                            <FontAwesomeIcon icon={faCog} className="w-5 h-5 mr-2" />
                            Settings
                        </a>
                        <a href="/" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-200">
                            <FontAwesomeIcon icon={faSignOutAlt} className="w-5 h-5 mr-2" />
                            Logout
                        </a>
                    </div>
                )}
            </div>
        </header>
    );
}
