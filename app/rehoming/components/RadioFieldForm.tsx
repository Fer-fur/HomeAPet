import { FormRadioFieldProps } from '@/app/interfaces';

const RadioFieldForm = ({fieldTitle,option_1,option_2,option_3, option_4, value, onChange, field_id} : FormRadioFieldProps) => {
  return (
    <div className="px-10 py-4 flex justify-center items-center mb-4">
        <span className='basis-1/3 mr-4 w-18 text-3xl text-center text-primary-blue'>
            {fieldTitle}
        </span>
        <div className='basis-2/3 flex justify-between text-center '>
            <input
                type="radio"
                name={field_id}
                id={option_1}
                checked={value === 'Male'}
                value={option_1}
                onChange={onChange}
                required
            />
            <label htmlFor={option_1} className="mr-4 w-18 text-3xl text-center">
                {option_1}
            </label>
            <input
                type="radio"
                name={field_id}
                id={option_2}
                checked={value === 'Female'}
                value={option_2}
                onChange={onChange}
                required
            />
            <label htmlFor={option_2} className="mr-4 w-18 text-3xl text-center">
                {option_2}
            </label>
            {option_3 != null ? (
                <>
                    <input
                        type="radio"
                        name={field_id}
                        id={option_3}
                        value={option_3}
                        onChange={(e) => onChange}
                        required
                    />
                    <label htmlFor={option_3} className="mr-4 w-18 text-3xl text-center">
                        {option_3}
                    </label>
                </> 
            ): null}
            {option_4 != null ? (
                <>
                    <input
                        type="radio"
                        name={field_id}
                        id={option_4}
                        value={option_4}
                        onChange={(e) => onChange}
                        required
                    />
                    <label htmlFor={option_4} className="mr-4 w-18 text-3xl text-center">
                        {option_4}
                    </label>
                </> 
            ): null}
        </div>
      
    </div>
  )
}

export default RadioFieldForm