'use client';
import Link from 'next/link'
import {useState} from 'react';
import { HiMenu } from 'react-icons/hi';
import { RxCross2 } from 'react-icons/rx';
import { CustomButton } from '.';
import { navbar_links } from '@/link_webContent';
import { useAuth } from '@/app/contexts/AuthContext';
import { useRouter } from 'next/navigation';

const NavBar = () => {

    const router = useRouter();

    // Using a useState as a boolean to toggle between the menu icon / cross icon for smaller viewports
    const [isOpen, setIsOpen] = useState(false);

    const { isLoggedIn, login, logout } = useAuth(); 

    return (
        <header className='w-full sticky top-0 z-20 bg-white border border-gray-100'>
            <nav className='max-w-screen-2xl mx-auto flex flex-wrap justify-between items-center p-6'>
                
                {/* Logo */}
                <Link 
                    href="/"
                    className=''
                >
                    <h1 className='font-poppins font-extrabold text-5xl hover:translate-y-[-5px]'>
                        HomeAPet
                    </h1>    
                </Link>

                {/* Login button & Dropdown Menu for smaller viewports */}
                <div className='flex h-16 lg:order-2 gap-2'>
                    {/* <Link href="/login-register"> */}
                    <CustomButton 
                        content={isLoggedIn ? "Logout" : "Login / Register"}
                        btnStyle={` text-[18px] rounded-xl  
                                ${isLoggedIn ? "text-white bg-red-500 hover:bg-red-700" 
                                : "text-black bg-white border-2 border-black hover:bg-black hover:text-white "}`}
                        handleClick={isLoggedIn ? logout : () => {router.push("/login-register")}}
                    />
                    {/* </Link> */}
                    {/* Dropdown Menu */}
                    <div className='block lg:hidden'>
                        <button 
                            type='button'
                            onClick={() => setIsOpen(!isOpen)}
                            className='flex items-center px-3 py-2 rounded-2xl hover:bg-black'
                        >
                            <HiMenu 
                                className={`w-12 h-12 text-black hover:text-white ${isOpen ? "hidden" : "block"}`}
                            />
                            <RxCross2 
                                className={`w-12 h-12 text-black hover:text-white ${isOpen ? "block" : "hidden"}`}
                            />

                        </button>
                    </div>
                </div>

                {/* Navigational Links */}
                <div className={`w-full block flex-grow lg:flex lg:w-auto lg:order-1 ${isOpen ? "block" : "hidden"}`}>
                    <ul className='text-[26px] flex justify-center mt-8 lg:ml-12 lg:text-[20px] bg-slate-200 lg:bg-white rounded-b-lg'>
                        {navbar_links.map((link) => (
                            <li className='hover:translate-y-[-5px]' key={link.title}>
                               <Link href={link.url}
                                className={`mx-4 ${link.textColour}`}
                                >
                                    {link.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                
            </nav>
        </header>
    )
}

export default NavBar