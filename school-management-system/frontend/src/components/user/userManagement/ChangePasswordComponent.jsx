import React from 'react';
import FormComponent from '../../reUsableComponents/FormComponent';
import { passwordChangeRequest, passwordChangeSuccess, passwordChangeFailure } from '../../../redux/slices/passwordSlice';
import axios from 'axios';
import { useDispatch } from 'react-redux';

const ChangePasswordComponent = () => {
  const dispatch = useDispatch();

  // Input field configuration
  const inputConfig = {
    inputWidth: '100%',
    inputHeight: '48px',
  };

  // Field configurations for the form
  const fieldConfigs = [
    { name: 'oldPassword', type: 'password', placeholder: 'Enter Your Old Password', label: 'OldPassword', required: true },
    { name: 'newPassword', type: 'password', placeholder: 'Enter New Password', label: 'New Password', required: true },
  ];

  // Button configuration
  const buttonConfig = {
    label: 'Continue',
    type: 'submit',
    btnWidth: 'w-full',
    btnHeight: 'h-12',
    variant: 'login',
  };

  // Submit handler for changing password
  const handleSubmit = async (formData) => {
    dispatch(passwordChangeRequest());

    try {
      // Retrieve token from localStorage
      const token = localStorage.getItem('token');

      if (!token) {
        throw new Error('User not authenticated. Please log in.');
      }

      // Send API request to change password
      const response = await axios.post(
        'http://localhost:5000/school-management/change-password',
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`, // Pass token in the Authorization header
          },
        }
      );

      // Check for success response
      if (response.status === 200) {
        dispatch(passwordChangeSuccess());
        alert('Password changed successfully!');
      }
    } catch (error) {
      // Dispatch failure and handle error
      dispatch(passwordChangeFailure(error.response?.data?.message || 'An error occurred'));
      alert(error.response?.data?.message || error.message || 'An error occurred');
      console.error('Change password error:', error);
    }
  };

  return (
    <div className="flex justify-center items-center mt-10">
      <FormComponent
        inputConfig={inputConfig}
        fieldConfigs={fieldConfigs}
        buttonConfig={buttonConfig}
        apiEndpoint={handleSubmit}
      />
    </div>
  );
};

export default ChangePasswordComponent;
