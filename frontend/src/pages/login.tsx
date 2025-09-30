import { useState, useEffect } from 'react';
import { useLocation } from 'wouter';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useAuth } from '@/hooks/useAuth';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { CheckCircle } from 'lucide-react';

export default function Login() {
    const [, navigate] = useLocation();
    const { isAuthenticated, login, isLoggingIn } = useAuth();
    const [isSignUp, setIsSignUp] = useState(false);
    const [isOTPStep, setIsOTPStep] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [otp, setOtp] = useState('');
    const [showRegistrationSuccess, setShowRegistrationSuccess] = useState(false);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    // If already authenticated, redirect to home
    useEffect(() => {
        if (isAuthenticated) {
            navigate('/');
        }
    }, [isAuthenticated, navigate]);

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        try {
            const success = await login(email, password);
            if (!success) {
                setError('Invalid email or password');
            }
        } catch (err) {
            setError('An error occurred during login');
        }
    };

    const handleSignUpSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');

        // If we're at the OTP step, verify the OTP
        if (isOTPStep) {
            await verifyOTP();
            return;
        }

        // Simple password confirmation check
        if (password !== confirmPassword) {
            setError('Passwords do not match');
            return;
        }

        try {
            setLoading(true);
            // Call the registration API to send OTP
            const response = await fetch('/api/auth/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            const data = await response.json();

            if (response.ok) {
                // OTP sent successfully, move to OTP verification step
                setIsOTPStep(true);
            } else {
                // Registration failed
                setError(data.message || 'Registration failed');
            }
        } catch (err) {
            setError('An error occurred during registration');
        } finally {
            setLoading(false);
        }
    };

    const verifyOTP = async () => {
        try {
            setLoading(true);
            // Call the OTP verification API
            const response = await fetch('/api/auth/verify-otp', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, otp, password }),
            });

            const data = await response.json();

            if (response.ok) {
                // OTP verified successfully, account created
                setShowRegistrationSuccess(true);
                setIsSignUp(false);
                setIsOTPStep(false);
                setEmail('');
                setPassword('');
                setConfirmPassword('');
                setOtp('');
            } else {
                // OTP verification failed
                setError(data.message || 'OTP verification failed');
            }
        } catch (err) {
            setError('An error occurred during OTP verification');
        } finally {
            setLoading(false);
        }
    };

    const handleBackToSignUp = () => {
        setIsOTPStep(false);
        setOtp('');
        setError('');
    };

    // Reset registration success message when switching modes
    useEffect(() => {
        if (showRegistrationSuccess && (isSignUp || email || password)) {
            setShowRegistrationSuccess(false);
        }
    }, [isSignUp, email, password, showRegistrationSuccess]);

    return (
        <div className="min-h-screen flex items-center justify-center bg-background px-4">
            <Card className="w-full max-w-md">
                <CardHeader className="space-y-1">
                    <CardTitle className="text-2xl font-bold text-center">
                        {isOTPStep ? 'Verify OTP' : (isSignUp ? 'Create Account' : 'Welcome Back')}
                    </CardTitle>
                    <CardDescription className="text-center">
                        {isOTPStep
                            ? `Enter the OTP sent to ${email}`
                            : (isSignUp
                                ? 'Create a new account to access our exclusive content and services'
                                : 'Sign in to your account to access exclusive content and services')}
                    </CardDescription>
                </CardHeader>

                {showRegistrationSuccess && (
                    <div className="px-6 pb-4">
                        <Alert className="border-green-500 bg-green-50 dark:bg-green-950">
                            <CheckCircle className="h-4 w-4 text-green-500" />
                            <AlertDescription className="text-green-700 dark:text-green-300">
                                Account created successfully! Please sign in with your new credentials.
                            </AlertDescription>
                        </Alert>
                    </div>
                )}

                {error && (
                    <div className="px-6">
                        <Alert variant="destructive">
                            <AlertDescription>{error}</AlertDescription>
                        </Alert>
                    </div>
                )}

                {isSignUp ? (
                    <form onSubmit={handleSignUpSubmit}>
                        <CardContent className="space-y-4">
                            {isOTPStep ? (
                                <>
                                    <div className="space-y-2">
                                        <Label htmlFor="signup-otp">OTP</Label>
                                        <Input
                                            id="signup-otp"
                                            type="text"
                                            placeholder="Enter 6-digit OTP"
                                            value={otp}
                                            onChange={(e) => setOtp(e.target.value)}
                                            required
                                            maxLength={6}
                                        />
                                    </div>
                                    <Button
                                        className="w-full"
                                        type="button"
                                        variant="outline"
                                        onClick={handleBackToSignUp}
                                    >
                                        Back to Sign Up
                                    </Button>
                                </>
                            ) : (
                                <>
                                    <div className="space-y-2">
                                        <Label htmlFor="signup-email">Email</Label>
                                        <Input
                                            id="signup-email"
                                            type="email"
                                            placeholder="m@example.com"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            required
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="signup-password">Password</Label>
                                        <Input
                                            id="signup-password"
                                            type="password"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            required
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="signup-confirm-password">Confirm Password</Label>
                                        <Input
                                            id="signup-confirm-password"
                                            type="password"
                                            value={confirmPassword}
                                            onChange={(e) => setConfirmPassword(e.target.value)}
                                            required
                                        />
                                    </div>
                                </>
                            )}
                            <Button
                                className="w-full"
                                type="submit"
                                disabled={loading}
                            >
                                {loading ? 'Processing...' :
                                    (isOTPStep ? 'Verify OTP' : 'Sign Up')}
                            </Button>
                        </CardContent>
                    </form>
                ) : (
                    <form onSubmit={handleLogin}>
                        <CardContent className="space-y-4">
                            <div className="space-y-2">
                                <Label htmlFor="login-email">Email</Label>
                                <Input
                                    id="login-email"
                                    type="email"
                                    placeholder="m@example.com"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="login-password">Password</Label>
                                <Input
                                    id="login-password"
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                            </div>
                            <Button
                                className="w-full"
                                type="submit"
                                disabled={isLoggingIn}
                            >
                                {isLoggingIn ? 'Signing in...' : 'Sign In'}
                            </Button>
                        </CardContent>
                    </form>
                )}
                <CardFooter className="flex flex-col space-y-4">
                    <div className="text-sm text-muted-foreground text-center">
                        {isSignUp ? 'Already have an account?' : "Don't have an account?"}{' '}
                        <Button
                            variant="link"
                            className="p-0 h-auto"
                            onClick={() => {
                                setIsSignUp(!isSignUp);
                                setError('');
                                setOtp('');
                                setIsOTPStep(false);
                            }}
                        >
                            {isSignUp ? 'Sign in' : 'Sign up'}
                        </Button>
                    </div>
                </CardFooter>
            </Card>
        </div>
    );
}