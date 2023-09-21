import Image from 'next/image';
import { feature_card_content } from '@/constants';

interface FeatureCardProps {
    icon_src : string;
    icon_alt : string;
    title: string;
    subtitle: string;
}

const FeatureCard = ({ icon_src, icon_alt, title, subtitle} : FeatureCardProps) => {
  return (
    <div className='bg-slate-200 mx-auto w-3/4 rounded-2xl text-center py-24 flex flex-col gap-10 justify-center'>
        <div className='flex-2 flex justify-center'>
            <Image 
                src={icon_src}
                alt={icon_alt}
                width={125}
                height={125}
                className='object-contain'
            />
        </div>
        <h4 className='flex-1 font-semibold text-2xl '>
            {title}
        </h4>
        <p className='flex-1 text-lg px-10'>
            {subtitle}
        </p>
    </div>
  )
}

export default FeatureCard