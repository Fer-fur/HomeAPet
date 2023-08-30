'use client';

import axios, { AxiosError } from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

interface UserDataResponse {
    user: object | null;
    error: AxiosError | null;
}

export default function DashBoardLayout({
    children,
  }: {
    children: React.ReactNode
  }) {

    const router = useRouter();

    const [authorized, setAuthorized] = useState(false);

    const getUserData = async () => {
        const { user, error } : UserDataResponse = await axios.post('/api/auth_token');
    
        // if unauthorized, redirect to login/register page
        if (error) {
            router.push("/login-register");
            return;
        }
    
        setAuthorized(true);
    };

    useEffect(() => {
        // (async () => {
        //     const { user, error } = await getUserData();

        //     // if unauthorized, redirect to login/register page
        //     if (error) {
        //         router.push("/login-register");
        //         return;
        //     }
        // })();
        getUserData();
    }, [router])

    return (
          <main>
            {authorized ? (
                <>
                    {children}
                </>
            ): (
                <div className=" min-w-full min-h-screen flex justify-center items-center">
                    <p className=" bg-red-500 text-white text-xl font-bold p-10 rounded-xl shadow-md"> 
                        Unauthorized, please login or create an account. Thank you.
                    </p>
                </div>
            )}
          </main>
    )
  }
  
//   const getUserData = async(): Promise<UserDataResponse> => {
//     try {
//         const userData = await axios.post('/api/auth_token');

//         return {
//             user: userData,
//             error: null
//         };
//     } catch (err) {
//         const error = err as AxiosError;
//         return {
//             user: null,
//             error: error
//         }
//     }
//   };