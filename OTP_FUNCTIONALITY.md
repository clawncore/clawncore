# OTP Functionality Implementation

## Overview
This document describes the OTP (One-Time Password) functionality implemented for user registration in the ClawnCore application.

## Registration Flow

### Step 1: User Registration Request
1. User fills in email and password on the signup form
2. Frontend sends a POST request to `/api/auth/register`
3. Backend validates the input and checks if user already exists
4. If valid, backend generates a 6-digit OTP
5. OTP is stored in memory with a 5-minute expiration
6. In development, OTP is logged to console; in production, it would be sent via email
7. Backend responds with success message

### Step 2: OTP Verification
1. User receives OTP (via email in production, console in development)
2. User enters OTP on the verification form
3. Frontend sends a POST request to `/api/auth/verify-otp` with email, OTP, and password
4. Backend validates the OTP:
   - Checks if OTP exists for the email
   - Verifies OTP matches stored value
   - Ensures OTP hasn't expired
5. If valid:
   - OTP is removed from storage
   - New user account is created in the database
   - Success response is sent
6. If invalid:
   - Error response is sent

## Technical Implementation

### Backend Endpoints
- `POST /api/auth/register` - Generates and "sends" OTP
- `POST /api/auth/verify-otp` - Verifies OTP and creates user account

### Storage
- OTPs are stored in-memory using a Map with 5-minute expiration
- In production, Redis or database storage should be used
- User accounts are stored in MongoDB via Mongoose

### Security Features
- OTPs expire after 5 minutes
- OTPs are removed after successful verification
- Passwords are handled securely (in this implementation, they would be hashed in a production environment)

## Testing
To test the OTP functionality:
1. Start the server: `npx tsx server/index.ts`
2. Start the client: `npm run dev`
3. Navigate to the signup page
4. Enter email and password
5. Check server console for the generated OTP
6. Enter the OTP in the verification form
7. Account should be created successfully

## Known Issues
- MongoDB connection issues with Atlas cluster (IP whitelisting required for production)
- In development, OTPs are logged to console instead of sent via email