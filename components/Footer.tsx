import { footer_links } from '@/constants'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className='relative flex w-full flex-col border-t border-gray-200 pt-10 bg-slate-200'>
        <div className='flex flex-wrap justify-between px-6 py-10'>
            <div>
                <h1 className='font-poppins font-bold text-2xl'>
                    HomeAPet
                </h1> 
                <p>
                    HomeAPet 2023 <br />
                    All rights reserved &copy;    
                </p>  
            </div>
            <div className='flex-1 flex w-full flex-wrap justify-end gap-20 '>
                {footer_links.map((section) => (
                    <div className='flex flex-col gap-5' key={section.section_title}>   
                        <h3 className='text-xl font-semibold' >
                            {section.section_title}
                        </h3>
                        {section.links.map((link) => (
                            <Link href={link.url} key={link.title}>
                                {link.title}
                            </Link>
                        ))}
                    </div>
                ))}
            </div>
        </div>
        <div className='flex justify-between items-center flex-wrap mb-4 mt-10'>
            <p className='ml-2'>
                @2023 HomeAPet. All Rights Reserved
            </p>
            <div className='text-blue-500 ml-20 lg:px-16 flex-1 flex justify-center lg:justify-end gap-12'>
                <Link href='/'>
                    Privacy Policy
                </Link>
                <Link href='/'>
                    Terms of Use
                </Link>
            </div>
        </div>
    </footer>
  )
}

export default Footer