import React from 'react'
import { pet_traits } from '../constants/formQuestions'
import { form_data } from '@/app/interfaces';

type CheckBoxProps = {
    formData : string[];
    onChange(e: React.ChangeEvent<HTMLInputElement>) : void;
}

const CheckBoxFieldForm = ({formData, onChange}: CheckBoxProps) => {
  return (
    <div className="px-10 py-4 flex flex-col gap-2 w-3/5 justify-start mb-4">
        {pet_traits.map((trait) => (
            <div className='flex gap-2 ml-8'>
                <input
                    type="checkbox"
                    name="characteristics"
                    id={trait}
                    defaultValue={trait}
                    checked={formData.includes(trait)}
                    onChange={onChange}
                    className=''
                />
                <label htmlFor={trait} className="text-2xl text-center">
                    {trait}
                </label>
            </div>
        ))}
        
    </div>
  )
}

export default CheckBoxFieldForm