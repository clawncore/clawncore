const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));

async function testOTP() {
    try {
        console.log('Testing OTP registration flow...');

        // Test registration
        const registerResponse = await fetch('http://localhost:3002/api/auth/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: 'test@example.com',
                password: 'testpassword123'
            })
        });

        const registerData = await registerResponse.json();
        console.log('Registration response:', registerData);

        if (registerResponse.ok) {
            console.log('OTP should have been logged to console. Please check server logs for the OTP.');
            console.log('Use the OTP to test verification by making a POST request to /api/auth/verify-otp');
            console.log('with the email, OTP, and password in the request body.');
        } else {
            console.log('Registration failed:', registerData.message);
        }
    } catch (error) {
        console.error('Error testing OTP:', error);
    }
}

testOTP();