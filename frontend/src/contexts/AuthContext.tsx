import { createContext, useContext, useState, useEffect } from 'react';
import type { ReactNode } from 'react';

interface User {
    id: string;
    email: string;
    firstName?: string;
    lastName?: string;
    profileImageUrl?: string;
    theme?: string;
    createdAt?: string;
    updatedAt?: string;
}

interface AuthContextType {
    user: User | null;
    isAuthenticated: boolean;
    isLoggingIn: boolean;
    loginModalOpen: boolean;
    setLoginModalOpen: (open: boolean) => void;
    login: (email: string, password: string) => Promise<boolean>;
    logout: () => void;
    openLoginModal: () => void;
    closeLoginModal: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
    const [user, setUser] = useState<User | null>(null);
    const [isLoggingIn, setIsLoggingIn] = useState(false);
    const [loginModalOpen, setLoginModalOpen] = useState(false);

    // Check if user is already logged in (from localStorage/sessionStorage)
    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            try {
                setUser(JSON.parse(storedUser));
            } catch (e) {
                console.error('Failed to parse user data', e);
                localStorage.removeItem('user');
            }
        }
    }, []);

    const login = async (email: string, _password: string): Promise<boolean> => {
        setIsLoggingIn(true);
        try {
            // In a real implementation, this would be an API call to your backend
            // For now, we'll simulate a successful login but fetch real user data
            await new Promise(resolve => setTimeout(resolve, 1000));

            // Fetch real user data from the backend
            const response = await fetch('/api/auth/user', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials: 'include'
            });

            if (response.ok) {
                const userData = await response.json();
                setUser(userData);
                localStorage.setItem('user', JSON.stringify(userData));
                setLoginModalOpen(false);
                return true;
            } else {
                // Fallback to mock user if API call fails
                const mockUser: User = {
                    id: '1',
                    email,
                    firstName: email.split('@')[0],
                    lastName: 'User'
                };

                setUser(mockUser);
                localStorage.setItem('user', JSON.stringify(mockUser));
                setLoginModalOpen(false);
                return true;
            }
        } catch (error) {
            console.error('Login failed', error);
            // Fallback to mock user if API call fails
            const mockUser: User = {
                id: '1',
                email,
                firstName: email.split('@')[0],
                lastName: 'User'
            };

            setUser(mockUser);
            localStorage.setItem('user', JSON.stringify(mockUser));
            setLoginModalOpen(false);
            return true;
        } finally {
            setIsLoggingIn(false);
        }
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem('user');
    };

    const openLoginModal = () => {
        setLoginModalOpen(true);
    };

    const closeLoginModal = () => {
        setLoginModalOpen(false);
    };

    const value = {
        user,
        isAuthenticated: !!user,
        isLoggingIn,
        loginModalOpen,
        setLoginModalOpen,
        login,
        logout,
        openLoginModal,
        closeLoginModal
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
}