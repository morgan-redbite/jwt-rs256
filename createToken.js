const fs = require('fs');
const jwt = require('jsonwebtoken');

// Load private key from the root folder
const privateKey = fs.readFileSync('privateKey.pem');

// Define the payload
const payload = {
    userId: '23456',
    username: 'exampleUser'
};

// Sign the JWT with RS256
const token = jwt.sign(payload, privateKey, { algorithm: 'RS256' });

console.log('Generated Token:', token);
