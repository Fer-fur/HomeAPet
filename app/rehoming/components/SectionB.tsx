import { FormProps } from '@/app/interfaces';
import { Header } from '@/components';

const SectionB = ({formData, formErrors, imageProps, handleFormInput, handleNext, handlePrevious, handleImageInput, imageError} : FormProps) => {
  return (
    <div className="flex flex-col min-h-fit">

      {/* Display error message for the empty image field */}
      {formErrors && formErrors.B && (
        <p className="bg-red-200 text-red-800 py-2 px-4 rounded text-2xl text-center">
          {formErrors.B.image}
        </p>
      )}

      <Header content="Health Information & Photograph" />

      <div className="px-10 py-4 flex justify-center items-center mb-4">
        <label htmlFor='medical_condition' className="basis-1/3 mr-4 w-18 text-3xl text-center text-primary-blue">
          Medical Condition: 
        </label>
        
        <textarea
          onChange={handleFormInput}
          placeholder='List existing medical conditions here...'
          rows={4}
          // Enable automatic line wrapping
          wrap="soft"
          itemType='text'
          name='medical_condition'
          defaultValue={formData.medical_condition}
          id="medical_condition"
          className='overflow-auto basis-2/3 w-3/5 h-80 border-2 text-2xl border-gray-400 px-3 rounded-lg focus:outline-none focus:border-0 focus:ring-4 focus:ring-blue-300'
        />
      </div>

      {imageError && 
        <p className='bg-red-200 text-red-800 py-2 px-4 rounded text-2xl text-center'>
          {imageError}
        </p>}

      <div className='px-10 py-4 flex justify-center items-center mb-4'>
        <label className='basis-1/3 mr-4 w-18 text-3xl text-center text-primary-blue'>
          Image Upload: 
        </label>
        <div className='basis-2/3 flex-col'>
          <input type="file" accept="image/jpeg, image/png, image/gif" 
            onChange={handleImageInput} 
            className='text-2xl'
          />
          <p className='text-red-500 text-xl'>
            ( Please upload only JPEG, PNG, or GIF images. Max 32mb.)
          </p>
          <p className='text-2xl text-primary-blue'>Image Filename: 
            <span className='text-2xl text-red-500'> {imageProps}</span>
          </p>
        </div>
        
      </div>

      <div className="my-3 flex justify-between mx-12 mb-6">
        <button onClick={handlePrevious} className="bg-primary-green h-16 w-40 rounded-md text-white hover:bg-green-700 text-2xl">
            Previous
        </button>
        <button onClick={handleNext} className="bg-primary-blue h-16 w-40 rounded-md text-white hover:bg-blue-700 text-2xl">
            Next
        </button>
      </div>
    </div>
  )
}

export default SectionB