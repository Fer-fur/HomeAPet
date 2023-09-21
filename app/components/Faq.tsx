'use client';
import { FAQ_content } from '@/constants';
import FaqCard from './FaqCard';
import { Header } from '../../components';

const Faq = () => {

  return (
    <div className='relative flex flex-col my-10 max-w-screen-2xl mx-auto pb-10'>
        <Header 
          content='Frequently Asked Questions'
        />
        <div className="flex flex-col w-4/5 mx-auto rounded-xl bg-slate-50 border-2 border-slate-200">
          {FAQ_content.map((content, index) => (
                <FaqCard 
                  content = {content}
                  index = {index}
                  // A check to see if it is the last child, if it is, set value to invisible for <hr /> tag
                  cardStyle= {index === FAQ_content.length-1
                                ? "invisible"
                                : "border-b-1"}
                  key={index}
                />
          ))}
        </div>
    </div>
  )
}

export default Faq