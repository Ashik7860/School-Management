import React from 'react';
import {createBrowserRouter,} from 'react-router-dom';
import MainLayout from '../layout/MainLayout';

import SigninPage from '../pages/signIn/SigninPage';

import ProtectedLayout from '../layout/ProtectedLayout';

import AdminDashboardPage from '../pages/admin/AdminDashboardPage';
import LibrarianDashboardPage from '../pages/librarian/LibrarianDashboardPage';
import OfficeStaffDashboardPage from '../pages/officeStaff/OfficeStaffDashboardPage';
import StudentDashboardPage from '../pages/student/StudentDashboardPage';
import UserControlPage from '../pages/admin/UserControlPage';
import UserCreatePage from '../pages/userManagement/UserCreatePage';
import DeleteUserPage from '../pages/userManagement/DeleteUserPage';
import ChangePasswordPage from '../pages/userManagement/ChangePasswordPage';
import StudentDetailPage from '../pages/studentDetails/StudentDetailPage';


const router = createBrowserRouter([

  // Public route: Sign-In Page
  {
    path: "/signin",
    element: <SigninPage />,
  },

  // Protected routes: Require authentication
  {
    path: "/",
    element: <ProtectedLayout />, // Protected layout checks auth
    children: [
      {
        path: "/",
        element: <MainLayout />, // Main layout 
        children: [
          {
            path: "admindashboard",  
            element: <AdminDashboardPage />,
          },
          {
            path: "librarianDashboard",
            element:<LibrarianDashboardPage/>
          },
          {
            path:"officeStaffDashboard",
            element:<OfficeStaffDashboardPage/>
          },
          {
            path:"studentDashboard",
            element:<StudentDashboardPage/>
          },
          {
            path:"userController",
            element:<UserControlPage/>
          },
          {
            path:"createUser",
            element:<UserCreatePage/>
          },
          {
            path:"deleteUser",
            element:<DeleteUserPage/>
          },
          {
            path:"changePassword",
            element:<ChangePasswordPage/>
          },
          {
            path:"studentDetails",
            element:<StudentDetailPage/>
          }
        ],
      },
    ],
  },

]);



export default router;