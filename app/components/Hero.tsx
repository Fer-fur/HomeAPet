import Image from 'next/image';
import { CustomButton } from '../../components';
import Link from 'next/link';

const Hero = () => {
  return (
    <div className='flex relative flex-col xl:flex-row gap-4 max-w-screen-2xl mx-auto'>
        <div className='flex-1 pt-24 lg:pl-10  '>
            <h1 className='font-bold font-poppins text-[50px] sm:text-[48px] text-center lg:text-left'>
                <span className='text-primary-green font-extrabold sm:text-[64px]'>Adoption </span> 
                and
                <span className='text-primary-blue font-extrabold sm:text-[64px]'> Rehoming </span> 
                made easy. 
            </h1>
            <p className='mt-5 text-[27px] font-thin text-center lg:text-left'>
                A streamlined process made stress-free for everyone.
            </p>
            <div className='flex gap-24 xl:gap-16 justify-center xl:justify-start my-10'>
                <Link href="/adoption">
                    <CustomButton 
                        content='Adoption'
                        btnStyle='bg-primary-green rounded-full text-white font-extrabold hover:bg-green-600 w-48 hover:translate-y-[-5px] drop-shadow-3xl'
                    />
                </Link>
                
                <Link href="/rehoming">
                    <CustomButton 
                        content='Rehoming'
                        btnStyle='bg-primary-blue rounded-full text-white font-extrabold hover:bg-blue-800 w-48 hover:translate-y-[-5px] drop-shadow-3xl'
                    />
                </Link>
            </div>
        </div>
        <div className='flex lg:flex-[1.5] justify-center items-end w-full lg:h-screen'>
            <div className='relative xl:w-full w-[90%] xl:h-full h-[520px]  '>
                <Image 
                    src='/Hero.jpg'
                    alt='hero'
                    fill
                    className='object-contain'
                />
            </div>
        </div>
    </div>
  )
}

export default Hero