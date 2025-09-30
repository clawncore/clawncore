import { useAuth } from '@/hooks/useAuth';
import { Button } from '@/components/ui/button';

export function TestAuth() {
    const { isAuthenticated, user, openLoginModal, logout } = useAuth();

    return (
        <div className="p-4 border rounded-lg bg-muted">
            <h3 className="text-lg font-semibold mb-2">Authentication Test</h3>
            <p className="mb-2">Authenticated: {isAuthenticated ? 'Yes' : 'No'}</p>
            {user && <p className="mb-2">User: {user.firstName} {user.lastName} ({user.email})</p>}
            <div className="flex gap-2">
                <Button onClick={openLoginModal} variant="outline">
                    Open Login Modal
                </Button>
                <Button onClick={logout} variant="outline">
                    Logout
                </Button>
            </div>
        </div>
    );
}