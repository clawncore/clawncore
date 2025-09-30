import React from 'react';
import { useAuth } from '@/hooks/useAuth';
import { useLocation } from 'wouter';

interface ProtectedRouteProps {
    children: React.ReactNode;
}

export function ProtectedRoute({ children }: ProtectedRouteProps) {
    const { isAuthenticated, openLoginModal } = useAuth();
    const [, navigate] = useLocation();

    React.useEffect(() => {
        if (!isAuthenticated) {
            // Show login modal instead of redirecting
            openLoginModal();
        }
    }, [isAuthenticated, openLoginModal, navigate]);

    // Only render children if authenticated
    return isAuthenticated ? <>{children}</> : null;
}