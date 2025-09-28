const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));

async function testOTPVerification() {
    try {
        console.log('Testing OTP verification...');

        // Test OTP verification
        const verifyResponse = await fetch('http://localhost:3002/api/auth/verify-otp', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: 'test@example.com',
                otp: '935712', // Use the OTP from the server logs
                password: 'testpassword123'
            })
        });

        const verifyData = await verifyResponse.json();
        console.log('Verification response:', verifyData);

        if (verifyResponse.ok) {
            console.log('OTP verification successful! Account created.');
        } else {
            console.log('OTP verification failed:', verifyData.message);
        }
    } catch (error) {
        console.error('Error testing OTP verification:', error);
    }
}

testOTPVerification();