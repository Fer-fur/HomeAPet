import { FormTextFieldProps } from "@/app/interfaces";

const TextFieldForm = ({fieldTitle,field_id, value, onChange, fieldGuide} : FormTextFieldProps) => {
  return (
    <div className="px-10 py-4 flex justify-center items-center mb-4">
      <label htmlFor={field_id} className="basis-1/3 mr-4 w-18 text-3xl text-center text-primary-blue">
        {fieldTitle}
      </label>
      <div className="basis-2/3 flex flex-col w-full">
        <input
          type="text"
          name={field_id}
          id = {field_id}
          defaultValue={value}
          onChange={onChange}
          required
          className=" h-14 border-2 text-2xl border-gray-400 px-3 rounded-lg focus:outline-none focus:border-0 focus:ring-4 focus:ring-blue-300"
        />
        {fieldGuide && <p className="text-red-400">
          ( {fieldGuide} )
        </p>}
      </div>
      
      
    </div>
  );
};

export default TextFieldForm;
