### Requirements - Generate server public and private key (Already included)
### Generate private key
openssl genpkey -algorithm RSA -out privateKey.pem -pkeyopt rsa_keygen_bits:2048

### Generate public key from the private key
openssl rsa -pubout -in privateKey.pem -out publicKey.pem

### 1. Edit & Run createToken.js - node createToken.js (copy the token displayed in console.log)
### 2. Open verifyToken.js - Paste the token into "const token = 'here'" and run node verifyToken.js
