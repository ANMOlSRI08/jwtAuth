🔐 PERN Stack Authentication & Authorization Backend

A secure and reusable backend authentication system built using the PERN stack — PostgreSQL, Express.js, React, and Node.js — with JWT-based authentication and bcrypt password hashing.
This project is designed as a modular boilerplate that can be reused in future projects to handle user registration, login, and protected routes.

🚀 Features

✅ User Registration with SQL queries (PostgreSQL)

✅ Login with JWT Authentication

✅ Password Hashing using bcrypt

✅ Protected Routes using JWT verification middleware

✅ Error Handling & Validation

✅ Reusable Folder Structure for scaling future projects

🛠️ Tech Stack
Layer	Technology
Database	PostgreSQL
Backend Framework	Node.js + Express.js
Authentication	JWT (JSON Web Token)
Password Security	bcrypt
Environment Variables	dotenv
🧩 Project Structure
backend/
├── db.js                # PostgreSQL connection setup
├── index.js             # Main Express server file
├── routes/
│   ├── jwtAuth.js       # Handles register & login routes
│   ├── dashboard.js     # Protected route (JWT verification)
├── middleware/
│   ├── validInfo.js     # Validates user input
│   ├── authorization.js # Verifies JWT tokens
├── utils/
│   ├── jwtGenerator.js  # Generates JWT tokens
├── .env                 # Environment variables
├── package.json

⚙️ Setup Instructions
1. Clone the repository
git clone https://github.com/<your-username>/<your-repo-name>.git
cd <your-repo-name>

2. Install dependencies
npm install

3. Create a PostgreSQL database

In pgAdmin or psql, run:

CREATE DATABASE jwt_auth;


Then create a users table:

CREATE TABLE users(
  user_id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_name VARCHAR(255) NOT NULL,
  user_email VARCHAR(255) UNIQUE NOT NULL,
  user_password VARCHAR(255) NOT NULL
);

4. Configure environment variables

Create a .env file inside the backend folder:

PORT=3000
DB_USER=your_postgres_username
DB_PASSWORD=your_postgres_password
DB_HOST=localhost
DB_PORT=5432
DB_DATABASE=jwt_auth
jwtSecret=your_jwt_secret

5. Start the server
npm run dev


(Or node index.js if not using nodemon)

🔑 API Endpoints
Method	Endpoint	Description	Protected
POST	/register	Register a new user	❌
POST	/login	Authenticate and get JWT token	❌
GET	/dashboard	Access protected route	✅
🧠 How It Works

A user registers → credentials are hashed with bcrypt before saving.

On login → credentials are verified, and a JWT token is generated.

For protected routes → token is verified via a middleware.

If the token is valid → user gains access. Otherwise → 403 Forbidden.

🔒 Example .env File
PORT=3000
jwtSecret=mySuperSecretKey
DB_USER=postgres
DB_PASSWORD=12345
DB_HOST=localhost
DB_PORT=5432
DB_DATABASE=jwt_auth

🧰 Future Improvements

Add email verification flow

Add refresh tokens for long sessions

Integrate role-based access control

Add frontend (React Dashboard) for complete PERN integration

💻 Author

Anmol Srivastava
