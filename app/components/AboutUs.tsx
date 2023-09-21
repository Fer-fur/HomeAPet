import { aboutUs_card_content } from '@/constants'
import AboutUsCard from './AboutUsCard';
import { Header } from '../../components';

const AboutUs = () => {
  return (
    <div className='relative flex flex-col mt-10 max-w-screen-2xl mx-auto pb-10'>
        <Header 
          content='About Us'
        />
        <div className="flex flex-col justify-center bg-black">
            {aboutUs_card_content.map((item, i) => (
                <AboutUsCard 
                    title={item.title}
                    subtitle={item.subtitle}
                    extra_subtitle={item.extra_subtitle}
                    img_src={item.img_src}
                    img_alt={item.img_alt}
                    flip= {i%2 == 0 ? true: false}
                    key={i}
                />
                ))}
        </div>
    </div>
  )
}

export default AboutUs