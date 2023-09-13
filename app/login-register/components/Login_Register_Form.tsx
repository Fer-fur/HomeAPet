'use client';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/app/contexts/AuthContext';
import DOMPurify from 'dompurify';

interface FormData {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const Login_Register_Form = () => {

  const router = useRouter();

  const {login} = useAuth();

  const initialFormData: FormData = {
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const [activeTab, setActiveTab] = useState<'login' | 'register'>('login');
  const [registerSuccess, setRegisterSuccess] = useState(false);
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [errorMessage, setErrorMessage] = useState('');
  const [passwordMatch, setPasswordMatch] = useState(true);

  const toggleTab = (tab: 'login' | 'register') => {
    setActiveTab(tab);
    setErrorMessage("");
    setPasswordMatch(true);
  };


  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    // Prevent default form submission behaviour
    e.preventDefault();

    if (activeTab === 'login') {
      // Handles Login data
      try {
        const result = await axios.post('api/login', formData);
        login();

      } catch (error: any) {
        if (error.response && error.response.data && error.response.data.error) {
          setErrorMessage(error.response.data.error);
        } 
        return
      }

    }else {
      // Password & confirm password checker
      if (formData.password != formData.confirmPassword) {
        setPasswordMatch(false);
        return;
      } else {
        setPasswordMatch(true);
      }
      
      try {
        const result = await axios.put('api/register', formData);
        setRegisterSuccess(true);

      } catch (error: any) {
        if (error.response && error.response.data && error.response.data.error) {
          setErrorMessage(error.response.data.error);
        } 
          return
      }
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name] : DOMPurify.sanitize(value),
    }))
  }

  useEffect(() => {
    if (registerSuccess) {
      setTimeout(() => {
        login(); 
      }, 2000) // Delay 2 seconds to display success message
    }
  },[registerSuccess, router]);

  return (
    <div className="w-full max-w-md mx-auto">
      {registerSuccess ? (
          <div className='flex justify-center items-center bg-white h-64 rounded-lg shadow-lg'> 
            <p className=' font-poppins text-2xl font-semibold'> 
            Account Created Successfully!
          </p>
          </div>
          ) :(
      <div>
        <div className="flex">
          {/* Login / Register tabs */}
          <button
            className={`font-poppins font-semibold text-3xl ${
              activeTab === 'login' ? 'bg-white' : 'bg-gray-200 text-gray-700 '
            } flex-1 py-2 px-4 text-center rounded-l`}
            onClick={() => toggleTab('login')}
          >
            Login
          </button>
          <button
            className={`font-poppins font-semibold text-3xl ${
              activeTab === 'register' ? 'bg-white' : 'bg-gray-200 text-gray-700'
            } flex-1 py-2 px-4 text-center rounded-r`}
            onClick={() => toggleTab('register')}
          >
            Register
          </button>
        </div>

        {errorMessage && (
          <div className="bg-red-200 text-red-800 py-2 px-4 rounded">
            {errorMessage}
          </div>
        )}

        <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          {/* Form fields */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type= 'email'
              name= 'email'
              placeholder='Enter your email'
              required
              onChange={handleInputChange}
            />
          </div>
          <div className={`mb-4 ${activeTab === 'login' ? 'hidden' : ''}`}>
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Username
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type= 'text'
              name='username'
              placeholder='Choose a username'
              required = {activeTab === 'register'}
              disabled = {activeTab === 'login'}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="password"
              name='password'
              placeholder="********"
              required
              onChange={handleInputChange}
            />
          </div>
          <div className={`mb-4 ${activeTab === 'login' ? 'hidden' : ''}`}>
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Confirm Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type= 'password'
              name='confirmPassword'
              placeholder="********"
              required = {activeTab === 'register'}
              disabled = {activeTab === 'login'}
              onChange={handleInputChange}
            />
          </div>
          {!passwordMatch && <p className="text-red-500">Passwords do not match</p>}
          <div className="flex items-center justify-end">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              {activeTab === 'login' ? 'Log In' : 'Register'}
            </button>
          </div>
        </form>
      </div>
      )}
    </div>
  );
};

export default Login_Register_Form;
