School Management System
Project Description
The School Management System is a full-stack web application designed to streamline and manage various school operations effectively.
It features a frontend built using React.js with Tailwind CSS and a backend developed with Node.js, Express.js, and MongoDB. 
This project aims to manage users (students, librarians, office staff, and administrators), student profiles, and library details efficiently.

Key Features
User roles: Admin, Librarian, Office Staff, and Student.
Authentication: Secure sign-in and password management.
Manage student profiles, update, and view details.
Admin functionalities: User creation, deletion, and password management.
Librarian module for handling library details.
Protected routes for role-based access control.
Responsive UI with Tailwind CSS.
State management using Redux.


Setup Instructions
1. Clone the Repository
bash
Copy code
git clone https://github.com/Ashik7860/School-Management.git
cd School-Management
2. Install Dependencies
Navigate to both the frontend and server directories and install dependencies.

For the Frontend:
bash
Copy code
cd school-management-system/frontend
npm install
For the Backend:
bash
Copy code
cd school-management-system/server
npm install
3. Setup Environment Variables
Create a .env file in the server directory with the following keys:

env
Copy code

# Backend Environment Variables
PORT=5000
MONGO_URI=YOUR_MONGODB_CONNECTION_STRING
JWT_SECRET=YOUR_JWT_SECRET_KEY
Replace YOUR_MONGODB_CONNECTION_STRING and YOUR_JWT_SECRET_KEY with your actual MongoDB URI and secret key.

4. Run the Application
Start the Backend Server:
bash
Copy code
cd school-management-system/server
npm start
The server will start on http://localhost:5000.

Start the Frontend Development Server:
bash
Copy code
cd school-management-system/frontend
npm run dev
The frontend will start on http://localhost:5173
