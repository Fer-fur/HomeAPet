"use client";
import React, { useEffect, useState } from "react";
import { FormErrors, formSections } from "../constants/formQuestions";
import SectionA from "./SectionA";
import SectionB from "./SectionB";
import SectionC from "./SectionC";
import SectionD from "./SectionD";
import { form_data } from "@/app/interfaces";
import { useRouter } from "next/navigation";
import axios from "axios";

const MultiStepForm = () => {

  const router = useRouter();

  const initialFormData = {
    name: '',
    type: '',
    breed: '',
    color: '',
    gender: '',
    age: '',
    medical_condition: '',
    reason: '',
    characteristics: [],
    petImgUrl: '',
    owner: ''
  };

  const [formSection, setFormSection] = useState<string>("A");
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);
  const [formErrors, setFormErrors] = useState<FormErrors>({});
  const [formData, setFormData] = useState<form_data>(initialFormData);
  const [imageFile, setImageFile] = useState<File | undefined>();
  const [image64Data, setImage64Data] = useState<string>("")
  const [imageError, setImageError] = useState<string>("");

  // Function for Next Button Logic
  const handleNext = () => {
    if (formSection === "A") setFormSection("B");
    else if (formSection === "B") setFormSection("C");
    else if (formSection === "C") setFormSection("D");
  };

  // Function for Previous Button Logic
  const handlePrevious = () => {
    if (formSection === "D") setFormSection("C");
    else if (formSection === "C") setFormSection("B");
    else if (formSection === "B") setFormSection("A");
  };

  // Function to handle form inputs and update the formData object for any changes
  const handleFormInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name] : value,
    }))
  };

  // Function to handle check box selects/unselects and update the formData object for any changes
  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, checked } = e.target;

    if (checked) {
      // Add the value to the array if checked
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: [...prevFormData[name],value],
      }));
    } else {
      // Remove the value from the array if unchecked
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: prevFormData[name].filter((item: string) => item !== value),
      }));
    }
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const uploadedImage = e.target.files?.[0];

    // Handle empty submissions
    if(!uploadedImage) {
      return;
    }

    // Validate image file format
    const allowedImageFormats = ['image/jpeg', 'image/png', 'image/gif'];
    if (!allowedImageFormats.includes(uploadedImage.type)){
      setImageError("Invalid file format, Please upload an image (JPEG, PNG, GIF). ");
      return;
    }

    // Validate image file size, up to a maximum of 32 mb
    const maxImageSize = 32 * 1024 * 1024; 
    if (uploadedImage.size > maxImageSize) {
      setImageError("Image size exceed 32MB. Please select a smaller image.");
      return;
    }

    try {
      // Read the uploaded image as a data URL
      const base64Data = await readImageDataAsBase64(uploadedImage);
  
      // Set the base64-encoded image data
      setImageFile(uploadedImage);
      setImage64Data(base64Data);
      setImageError('');
    } catch (error) {
      console.error(error);
      setImageError("An error occurred while processing the image.");
    }
  };
  
  // Function to read image data as base64
  const readImageDataAsBase64 = (imageFile: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
  
      reader.onload = (event) => {
        if (event.target && typeof event.target.result === "string") {
          resolve(event.target.result.split(',')[1]); // Extract base64 data from data URL
        } else {
          reject(new Error("Failed to read image data."));
        }
      };
  
      reader.onerror = () => {
        reject(new Error("An error occurred while reading the image."));
      };
  
      reader.readAsDataURL(imageFile);
    });
  };

  // Function to validate the form data inputs upon submit
  const validateFormData = (data: form_data) => {
    const errors: { [key: string]: { [key:string]: string} } = {};

    // Checks if required fields in Section A ( Basic Pet Information ) is left empty
    if (!data.name.trim()) {
      errors.A = { ...errors.A, name: "Name is required" };
    }
    if (!data.type.trim()) {
      errors.A = { ...errors.A, type: "Type is required"};
    }
    if (!data.breed.trim()) {
      errors.A = { ...errors.A, breed: "Breed is required" };
    }
    if (!data.color.trim()) {
      errors.A = { ...errors.A, color: "Color is required"};
    }
    if (!data.gender) {
      errors.A = { ...errors.A, gender:  "Gender selection is required"};
    }
    if (!data.age.trim()) {
      errors.A = { ...errors.A, age: "Age is required"};
    }

    // Validate age input format (e.g., "2 years" or "2 years 10 months")
    const agePattern = /^(\d+)\s+years(\s+(\d+)\s+months)?$/;
    if (!agePattern.test(data.age)) {
      errors.A = { ...errors.A, age: "Age format should be 'X years' or 'X years Y months'"};
    }

    // Validate if image uploading field is empty
    if(imageFile === undefined) {
      errors.B = { ...errors.B, image: "An image of the pet is required"};
    }
    
    // Check if required field in Section D is left empty.
    if (!data.reason.trim()) {
      errors.D = { ...errors.D, reason: "Reason is required" };
    }
  
    return errors;
  };

  // Function to handle form submission, validates the form first then uploads it to the database
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    // Prevent the default form submission behavior
    e.preventDefault(); 

    // Validate the form data before submission
  const errors = validateFormData(formData);

  if (Object.keys(errors).length === 0) {
    // Reset any existing errors to 0
    setFormErrors({});

    try {
      // Check if the user is logged in
      const userData = await axios.post('/api/auth_token');

      if (userData.data.userData) {
        // Update the form data with the owner's email

        setFormData((prevFormData) => ({
          ...prevFormData,
          owner: userData.data.userData.email,
        }));

        console.log(formData);

        // Now that you have the owner's email, proceed to upload the image
        if (image64Data) {
          // Creating a FormData object to store the image
          const imageData = new FormData();
          imageData.append('image', image64Data);

          // Retrieve the API key for imgbb
          const api_key = process.env.NEXT_PUBLIC_IMGBB_API_KEY;

          if (!api_key) {
            throw new Error("IMGBB_API_KEY environment variable is not set.");
          }

          // Upload the image to image hosting (imgbb)'s API to obtain the URL
          const petImgURL = await axios.post(
            `https://api.imgbb.com/1/upload?key=${api_key}`,
            imageData
          );

          // Update the pet's image URL in form data
          setFormData((prevFormData) => ({
            ...prevFormData,
            petImgUrl: petImgURL.data.data.url,
          }));
        }
      } else {
        // If user is not logged in, redirect to the login page
        router.push("/login-register");
      }
    } catch (error: any) {
      // Check if the error is due to unauthorized access
      if (error.response && error.response.status === 401 && error.response.data.message === "Unauthorized") {
        // Redirect to the login page
        alert("Please login or register an account to submit a rehoming listing.");
        router.push("/login-register");
      } else {
        // Handle other errors as needed
        console.error(error);
      }
    }
  } else {
    // Set the errors for display
    setFormErrors(errors);
  }
};

  // Upon successful submission, updates the page to display a success message and redirects the user to the dashboard page
  useEffect(() => {
    if (formSubmitted) {
      setTimeout(() => {
        // redirect to homepage after successful account registration
        router.push('/dashboard'); 
      }, 2000) // Delay 2 seconds to display success message
    };

    if (formData.petImgUrl && formData.owner) {
      uploadFormToDb();
    }

  },[formSubmitted, router, formData.petImgUrl, formData.owner]);

  const uploadFormToDb =async () => {
    // Now that you have updated the form data with the image URL, proceed to upload to the database
    try {
      const res = await axios.put('api/uploadPet', formData);
      console.log('Rehoming form submitted successfully', res.data);

      // Set form submission to true to remove the form and display a success feedback for the user to view
      setFormSubmitted(true);
      setFormData(initialFormData);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col justify-center flex-1 rounded-xl mx-auto bg-white shadow-lg scale-[60%] lg:scale-[70%]">
      {formSubmitted ? (
          <div className='flex justify-center items-center bg-white h-64 rounded-lg shadow-lg'> 
            <p className=' font-poppins text-2xl font-semibold'> Form Submitted Successfully!</p>
          </div>
          ) : (
          <form onSubmit={handleSubmit}>
            <div className="flex justify-between">
              {formSections.map((item) => (
                <div
                  key={item.section}
                  className={`basis-1/4 min-h-fit p-10 flex justify-center items-center text-center rounded-t-lg font-poppins font-semibold cursor-pointer ${
                    item.section === formSection ? "bg-sky-200" : "hover:bg-sky-100"
                  } ${
                    formErrors && formErrors[item.section] ? "bg-red-400" : ""
                  }`}
                  onClick={() => setFormSection(item.section)}
                >
                  {item.section_title}
                </div>
              ))}
            </div>

            {formSection === "A" ? (
              <SectionA
                formData={formData}
                formErrors={formErrors}
                handleFormInput={handleFormInput}
                handleNext={handleNext}
              />
            ) : null}
            {formSection === "B" ? (
              <SectionB
                formData={formData}
                handleFormInput={handleFormInput}
                handleImageInput={handleImageUpload}
                handleNext={handleNext}
                handlePrevious={handlePrevious}
                imageError={imageError}
                formErrors={formErrors}
                imageProps = {imageFile ? imageFile.name : "Please upload an Image."}
              />
            ) : null}
            {formSection === "C" ? (
              <SectionC
                formData={formData}
                handleFormInput={handleCheckboxChange}
                handleNext={handleNext}
                handlePrevious={handlePrevious}
              />
            ) : null}
            {formSection === "D" ? (
              <SectionD
                formData={formData}
                formErrors={formErrors}
                handleFormInput={handleFormInput}
                handlePrevious={handlePrevious}
              />
            ) : null}
        </form>
      )}    
    </div>
  );
};

export default MultiStepForm;
