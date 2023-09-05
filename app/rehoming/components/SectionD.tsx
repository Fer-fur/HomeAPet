import { FormProps } from '@/app/interfaces';
import { Header } from '@/components';

const SectionD = ({formData, handleFormInput, handlePrevious, formErrors} : FormProps) => {
  return (
    <div className="flex flex-col min-h-fit">

      {/* Display error message for the empty 'reason' field */}
      {formErrors && formErrors.D && (
        <p className="bg-red-200 text-red-800 py-2 px-4 rounded text-2xl text-center">
          {formErrors.D.reason}
        </p>
      )}

      <Header content="Rehoming Reason" />

      <div className="px-10 py-4 flex justify-center items-center mb-4">
        <label htmlFor='reason' className="basis-1/3 mr-4 w-18 text-3xl text-center text-primary-blue">
          Reason: 
        </label>
        
        <textarea
          onChange={(e) => handleFormInput(e)}
          placeholder='List main reason for rehoming (Eg. Can no longer afford / Change in life situation )'
          rows={4}
          // Enable automatic line wrapping
          wrap="soft"
          required
          itemType='text'
          name='reason'
          defaultValue={formData.reason}
          id="reason"
          className='overflow-auto basis-2/3 w-3/5 h-80 border-2 text-2xl border-gray-400 px-3 rounded-lg focus:outline-none focus:border-0 focus:ring-4 focus:ring-blue-300'
        />
      </div>

      <div className="my-3 flex justify-between mx-12 mb-6">
        <button onClick={handlePrevious} className="bg-primary-green h-16 w-40 rounded-md text-white hover:bg-green-700 text-2xl">
            Previous
        </button>
        <button type='submit' className="bg-orange-400 h-16 w-40 rounded-md text-white hover:bg-orange-700 text-2xl">
            Submit
        </button>
      </div>
    </div>
  )
}

export default SectionD