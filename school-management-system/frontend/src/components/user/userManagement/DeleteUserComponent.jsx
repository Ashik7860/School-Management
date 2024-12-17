import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUserByEmail } from "../../../redux/slices/deleteUserSlice";
import FormComponent from "../../../components/reUsableComponents/FormComponent";

const DeleteUserComponent = () => {
  const dispatch = useDispatch();
  const { loading, successMessage, errorMessage } = useSelector((state) => state.deleteUser);

  const inputConfig = {
    inputWidth: "100%",
    inputHeight: "48px",
  };

  const fieldConfigs = [
    { name: "email", label: "Email", placeholder: "Enter user email to delete", type: "email", required: true },
  ];

  const buttonConfig = {
    label: "Delete",
    type: "submit",
    btnWidth: "w-full",
    btnHeight: "h-10",
    variant: "cardButton",
  };

  const handleDelete = (data) => {
    dispatch(deleteUserByEmail(data.email));
  };

  return (
    <div className="flex flex-col justify-center items-center space-y-4">
      <FormComponent
        inputConfig={inputConfig}
        fieldConfigs={fieldConfigs}
        buttonConfig={buttonConfig}
        apiEndpoint={handleDelete}
      />

      {loading && <p className="text-blue-500">Deleting...</p>}
      {successMessage && <p className="text-green-500">{successMessage}</p>}
      {errorMessage && <p className="text-red-500">{errorMessage}</p>}
    </div>
  );
};

export default DeleteUserComponent;
