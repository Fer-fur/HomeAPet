import { FormProps } from "@/app/interfaces";
import { Header } from "@/components";
import CheckBoxFieldForm from "./CheckBoxFieldForm";

const SectionC = ({formData, handleFormInput, handleNext, handlePrevious} : FormProps) => {
  return (
    <div className="flex flex-col min-h-fit">
      <Header content="Pet Personality" />

      <div className="ml-12 text-2xl font-bold text-primary-blue">
        <p>Select the relevant traits:</p>
      </div>

      <CheckBoxFieldForm
        formData = {formData.characteristics}
        onChange = {(e) => handleFormInput(e)}
      />

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

export default SectionC