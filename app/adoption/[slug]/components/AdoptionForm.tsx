import { useState } from "react";
import DOMPurify from 'dompurify';
import StripeBuyButton from "./StripeBuyButton";
import { useAuth } from "@/app/contexts/AuthContext";
import LoginRedirect from "./LoginRedirect";
import axios from "axios";
import { useRouter } from "next/navigation";

interface AdoptionFormProps {
    pet_id: number;
}

const AdoptionForm = ( {pet_id} : AdoptionFormProps) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        pet_id: pet_id
    });

    const router = useRouter();
    
    const { isLoggedIn } = useAuth(); 

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(
            { ...formData, 
                [name]:  DOMPurify.sanitize(value) 
            }
        );
    };

    const handleSubmit = async(e: React.FormEvent) => {
        // Prevent the default form submission behavior
        e.preventDefault(); 

        // upload formData to database
        try {
            const res = await axios.put('/api/uploadAdoption', formData);
            router.refresh();
            router.push('/dashboard');
        } catch (error : any) {
            if (error.response.status === 404) {
                alert("Email not found.");
            } else if (error.response.status === 400) {
                alert("You cannot apply for your own pet.");
            }
            else {
                alert("Check input data, remember to be logged in, in order to apply for adoption.")
            }
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
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
            <div className="my-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                    Email <p className="text-red-400">( Please use the same email as you have used for this account. )</p>
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
            <div className="mb-8">
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
            <div className="flex justify-center flex-col items-center mb-4">
                <StripeBuyButton />
                <p className="text-red-400">( Payment can be made now or after viewing the pet with an admin via zoom call. )</p>
            </div>
            {isLoggedIn ? (
                <button type="submit" 
                    className="bg-green-400 h-20 w-full rounded-2xl text-white hover:bg-green-600 shadow-md flex justify-center items-center text-4xl">
                    Adopt me!
                </button>
            ): <LoginRedirect /> }
        </form>
    );
};

export default AdoptionForm