const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));

async function testFullOTPFlow() {
    try {
        console.log('Testing full OTP registration flow...');

        // Test registration
        const registerResponse = await fetch('http://localhost:3000/api/auth/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: 'test2@example.com',
                password: 'testpassword123'
            })
        });

        const registerData = await registerResponse.json();
        console.log('Registration response:', registerData);

        if (registerResponse.ok) {
            console.log('Registration successful. Please check server logs for the OTP.');
            console.log('In a real application, the user would receive this OTP via email.');
            console.log('For testing purposes, you would need to check the server console output');
            console.log('to get the OTP and then manually test the verification step.');
        } else {
            console.log('Registration failed:', registerData.message);
        }
    } catch (error) {
        console.error('Error testing OTP flow:', error);
    }
}

testFullOTPFlow();