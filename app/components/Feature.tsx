import { feature_card_content } from "@/constants";
import FeatureCard from "./FeatureCard";
import { Header } from "@/components";

const Feature = () => {
  return (
    <div className='relative flex flex-col gap-5 max-w-screen-2xl mx-auto pb-10'>
        <Header 
            content="Our Features"
        />
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-20 mx-auto lg:w-3/4 h-auto">
            {feature_card_content.map((item) => (
                <FeatureCard 
                    icon_src={item.icon_src}
                    icon_alt={item.icon_alt}
                    title={item.title}
                    subtitle={item.subtitle}
                    key={item.title}
                />
            ))}
        </div>
    </div>
  )
}

export default Feature