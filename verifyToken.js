const fs = require('fs');
const jwt = require('jsonwebtoken');

// Load public key
const publicKey = fs.readFileSync('publicKey.pem');

// Token to verify (this should be the token generated in the previous step)
const token1 = 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIxMjM0NTYiLCJ1c2VybmFtZSI6ImV4YW1wbGVVc2VyIiwiaWF0IjoxNzIxNzIyOTE0fQ.U-Y9Jk5an_MSX-uDfE72s3crDHv-062JNxBh5V_qpOoCLzIKod2b0dPi8A7wJrOzBnCCTF-k0ia4Z9pGPjEEV5ty3ouVX2OYCGDb4CExJwYmxJvykFmOaQM8pmDwENmPeiQLT8GN-k9GnE_0PH9F7PM1pe4pOsq_TINqhx2uOmGyIAjon_RXqO2ZeEG8tggUN7vpIlJheODhhpemqVWUWFzTsn65BcQP-f0BkAXsxhcsT8EAw5CfWXZCGjVHfaX2gG3mO-_fSioGdPA-d8oYIQiQBDksusT0zouenOyruDKx2M4HgQMiSuJLh9NJO8RUQqMhXH398dbd1yy5B0W1Zg';
const token2 = 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIyMzQ1NiIsInVzZXJuYW1lIjoiZXhhbXBsZVVzZXIiLCJpYXQiOjE3MjE3MjM1MjJ9.Q_PLrds5TmJs2Z0gF3CwDe8OqOkEGxsGyDFqfNvo7qaWAn8mW4inT_mwKeG_Qbk8GOqrIElstqxv-71fXvx8SDEJig_TeOVi4N7YSVU1f9BeN6BTTZNJvARkGrdv0jL6YUZCsoLZ-xyhtWy5cPBFsB_P85iLxP7o_vVsZl1uI9I-Bn_hZDc95IA1ooZtBwvTNgqe8w4fvhI2ODEvjaw0WKcCNSbLj5-hTdDxBFV5QD7O2nBhFtnafsyW4CL5go_h0KW3hauvMFZKP3ayAXiYES2LL92zAXv7dsAPTzqetp_Cnk4l6C9mNx8mDv4ARgA9YF_ZKOAruHUOA1ikidShWA'
try {
    const decoded = jwt.verify(token1, publicKey, { algorithms: ['RS256'] });
    console.log('Decoded Payload:', decoded);
} catch (err) {
    console.error('Token verification failed:', err);
}
