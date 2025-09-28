import React, { useState } from 'react';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useAuth } from '@/contexts/AuthContext';

interface LoginModalProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
}

export function LoginModal({ open, onOpenChange }: LoginModalProps) {
    const { login, isLoggingIn } = useAuth();
    const [isSignUp, setIsSignUp] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (isSignUp) {
            // In a real implementation, this would be a sign up API call
            // For now, we'll just simulate by logging in
            await login(email, password);
        } else {
            await login(email, password);
        }
    };

    const handleOpenChange = (newOpen: boolean) => {
        onOpenChange(newOpen);
        if (!newOpen) {
            // Reset form when closing
            setEmail('');
            setPassword('');
            setConfirmPassword('');
            setIsSignUp(false);
        }
    };

    return (
        <Dialog open={open} onOpenChange={handleOpenChange}>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle className="text-2xl font-bold text-center">
                        {isSignUp ? 'Create Account' : 'Welcome Back'}
                    </DialogTitle>
                    <DialogDescription className="text-center sr-only">
                        {isSignUp
                            ? 'Create a new account to access our exclusive content and services'
                            : 'Sign in to your account to access exclusive content and services'}
                    </DialogDescription>
                </DialogHeader>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                        <Label htmlFor="login-modal-email">Email</Label>
                        <Input
                            id="login-modal-email"
                            type="email"
                            placeholder="m@example.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="login-modal-password">Password</Label>
                        <Input
                            id="login-modal-password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    {isSignUp && (
                        <div className="space-y-2">
                            <Label htmlFor="login-modal-confirm-password">Confirm Password</Label>
                            <Input
                                id="login-modal-confirm-password"
                                type="password"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                required
                            />
                        </div>
                    )}
                    <Button className="w-full" type="submit" disabled={isLoggingIn}>
                        {isLoggingIn ? 'Signing in...' : (isSignUp ? 'Sign Up' : 'Sign In')}
                    </Button>
                </form>
                <div className="text-sm text-muted-foreground text-center pt-2">
                    {isSignUp ? 'Already have an account?' : "Don't have an account?"}{' '}
                    <Button
                        variant="link"
                        className="p-0 h-auto"
                        onClick={() => setIsSignUp(!isSignUp)}
                    >
                        {isSignUp ? 'Sign in' : 'Sign up'}
                    </Button>
                </div>
            </DialogContent>
        </Dialog>
    );
}