'use client';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { createContext, useContext, useEffect, useState } from 'react';

interface AuthContextValue {
  isLoggedIn: boolean;
  login: () => void;
  logout: () => void;
}

interface AuthRemovalProps {
    message: string;
    error: Error | null;
}

const AuthContext = createContext<AuthContextValue>({
                                                isLoggedIn: false,
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

    const login = () => {
        setIsLoggedIn(true);
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

    useEffect(() => {
        const fetchAuthStatus = async () => {
            const { data: { isLoggedIn } } = await axios.get('/api/auth_status');
            setIsLoggedIn(isLoggedIn);
        };
        fetchAuthStatus();
    }, []);

    return (
        <AuthContext.Provider value={
        {
            isLoggedIn,
            login,
            logout,
        }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);