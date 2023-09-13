import { FormProps } from "@/app/interfaces";
import { Header } from "@/components";
import TextFieldForm from "./TextFieldForm";
import Link from "next/link";
import RadioFieldForm from "./RadioFieldForm";

const SectionA = ({ formData, handleFormInput, handleNext, formErrors }: FormProps) => {
  return (
    <div className="flex flex-col min-h-fit">

      {/* Display error message for fields with error */}
      {formErrors &&
        (formErrors.A) && (
          <div>
            {Object.keys(formErrors.A).map((key: string) => (
              <p key={key} className="bg-red-200 text-red-800 py-2 px-4 rounded text-xl text-center">
                {(formErrors.A[key])}
              </p>
            ))}
          </div>
        )}

      <Header content="Pet Information" />

      <TextFieldForm
        fieldTitle="Pet Name: "
        field_id= "name"
        value={formData.name}
        onChange={(e) => handleFormInput(e)}
      />

      <TextFieldForm
        fieldTitle="Animal Species: "
        field_id = "type"
        value={formData.type}
        onChange={(e) => handleFormInput(e)}
      />

      <TextFieldForm
        fieldTitle="Breed: "
        field_id="breed"
        value={formData.breed}
        onChange={(e) => handleFormInput(e)}
      />

      <TextFieldForm
        fieldTitle="Fur Color: "
        field_id="color"
        value={formData.color}
        onChange={(e) => handleFormInput(e)}
      />

      <RadioFieldForm
        fieldTitle="Gender: "
        option_1="Male"
        option_2="Female"
        value={formData.gender}
        onChange={(e) => handleFormInput(e)}
        field_id="gender"
      />

      <TextFieldForm
        fieldTitle="Age: "
        field_id="age"
        value={formData.age}
        onChange={(e) => handleFormInput(e)}
        fieldGuide="Age format should be 'X years' or 'X years Y months"
      />

      <div className="my-3 flex justify-end mr-12 mb-6">
        <button onClick={handleNext} className="bg-primary-blue h-16 w-40 rounded-md text-white hover:bg-blue-700 text-2xl">
            Next
        </button>
      </div>
    </div>
  );
};

export default SectionA;
