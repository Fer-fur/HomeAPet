'use client';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { createContext, useContext, useEffect, useState } from 'react';

interface AuthContextValue {
  isLoggedIn: boolean;
  user_email: string;
  login: () => void;
  logout: () => void;
}

interface AuthRemovalProps {
    message: string;
    error: Error | null;
}

const AuthContext = createContext<AuthContextValue>({
                                                isLoggedIn: false,
                                                user_email: "",
                                                login() {},
                                                logout() {},
                                            });

export const AuthProvider = ({
    children,
  }: {
    children: React.ReactNode;
  }) => {
    const router = useRouter();

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [user_email, setUser_email] = useState("");

    const login = () => {
        setIsLoggedIn(true);
        getUserEmail();
        router.push("/dashboard");
    };

    const logout = async() => {
        try {
            const {message, error} : AuthRemovalProps = await axios.post('/api/auth_remove');
            setIsLoggedIn(false);
            router.push("/login-register");
        } catch (error) {
            router.push("/login-register");
        }
    };

    const getUserEmail = async() => {
        const res = await axios.get('/api/auth_status');
        setUser_email(res.data.user_email);
    }

    useEffect(() => {
        const fetchAuthStatus = async () => {
            try {
                const { data: { isLoggedIn, user_email } } = await axios.get('/api/auth_status');
                setIsLoggedIn(isLoggedIn);
                setUser_email(user_email);
            } catch (error) {
                return
            }
        };
        fetchAuthStatus();
    }, []);

    return (
        <AuthContext.Provider value={
        {
            isLoggedIn,
            user_email,
            login,
            logout,
        }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
