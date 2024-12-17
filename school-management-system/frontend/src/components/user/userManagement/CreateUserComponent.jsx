import React from 'react';
import FormComponent from '../../reUsableComponents/FormComponent';
import { useDispatch, useSelector } from 'react-redux';
import { createUser } from '../../../redux/slices/userSlice';

const CreateUserComponent = () => {
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.user);

  const inputConfig = {
    inputWidth: "100%",
    inputHeight: "48px",
  };

  const fieldConfigs = [
    { name: 'email', label: 'Email', placeholder: 'Enter your email', type: 'email', required: true },
    { name: 'password', type: 'password', placeholder: 'Password', label: 'Password', required: true },
    { name: 'role', type: 'text', placeholder: 'Role', label: 'User Role', required: true },
  ];

  const buttonConfig = {
    label: "Create",
    type: "submit",
    btnWidth: "w-full",
    btnHeight: "h-12",
    variant: "cardButton",
  };

  const handleSubmit = async (values) => {
    dispatch(createUser(values));
  };

  return (
    <div className="flex justify-center items-center p-6">
      <FormComponent
        inputConfig={inputConfig}
        fieldConfigs={fieldConfigs}
        buttonConfig={buttonConfig}
        apiEndpoint={handleSubmit}
      />
      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}
    </div>
  );
};

export default CreateUserComponent;
