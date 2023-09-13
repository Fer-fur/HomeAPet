'use client';
import axios from 'axios';
import DOMPurify from 'dompurify';
import { useRouter } from 'next/navigation';
import { ChangeEvent, FormEvent, useEffect, useState } from 'react';

const VolunteerSignUpForm = () => {

  const router = useRouter();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interests: '',
  });
  
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: DOMPurify.sanitize(value),
    }));
  };

  const handleSubmit = async(e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    try {
      const res = await axios.put('/api/uploadVolunteer', formData);
      setFormSubmitted(true);
    } catch (error) {
      alert("You have applied already, please wait for our staffs to reach out to you and get to know you better.")
    }
  };

  useEffect(() => {
    if(formSubmitted) {
      setTimeout(() => {
        router.push("/dashboard");
      }, 2000) // Delay 2 seconds to display success message
    }
  },[formSubmitted]);

  return (
    <div className="w-full max-w-md mx-auto">
      {formSubmitted ? (
          <div className='flex justify-center items-center bg-white h-64 rounded-lg shadow-lg'> 
            <p className=' font-poppins text-2xl font-semibold'> Form Submitted Successfully!</p>
          </div>
          ) : (
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
            Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">
            Phone
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="tel"
            id="phone"
            name="phone"
            placeholder="Enter your phone number"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="interests">
            Animal Interests / Knowledge
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="interests"
            name="interests"
            placeholder="Tell us about yourself and what pets are you interested and have good knowledge with."
            value={formData.interests}
            onChange={handleChange}
            required
          />
        </div>
        <div className="flex items-center justify-center">
          <button
            className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Sign Up
          </button>
        </div>
      </form>
    )}
    </div>
  );
};

export default VolunteerSignUpForm;
