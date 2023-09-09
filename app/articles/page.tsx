import { Header } from '@/components'
import React from 'react'

const ArticlePage = () => {
  return (
    <div className='relative flex flex-col mt-10 max-w-screen-md mx-auto pb-10'>
        <div className='flex flex-col w-4/5 mx-auto rounded-xl bg-slate-50 border-2 border-slate-200'>
            <Header content="Ownership Responsibilities"/>
            <p className='px-6 pb-4'>
                Pet ownership comes with a significant set of responsibilities that extend beyond the joy and companionship our animal friends bring. 
                Caring for a pet involves providing them with a safe and loving home, ensuring they receive proper nutrition, regular exercise, and medical attention. 
                Responsible pet owners commit to the mental and emotional well-being of their pets, offering companionship and socialization. 
            </p>
            <p className='px-6 pb-4'>
                Furthermore, pet owners should be considerate of their pets' environmental impact, such as cleaning up after them and preventing them from causing harm to wildlife. 
                Ultimately, the bond between a pet and their owner is built on trust, love, and a steadfast commitment to meeting the needs of a cherished member of the family.
            </p>
        </div>
    </div>
  )
}

export default ArticlePage