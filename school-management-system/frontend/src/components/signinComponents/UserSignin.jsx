import React from 'react'
import FormComponent from '../reUsableComponents/FormComponent'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/slices/authSlice'; 

const UserSignin = () => {
  const navigate= useNavigate();
  const dispatch = useDispatch();

  const buttonConfig={
    label: "Continue",
    type: "submit",
    btnWidth: "w-full",
    btnHeight: "h-12",
    variant: "login",
  }

  const fieldConfigs=[
    { name: 'email', label: 'Email', placeholder: 'Enter your email', type: 'email', required: true }, 
    { name: 'password',type: 'password',placeholder: 'Password',label: 'Password', required: true},
  ]

  const inputConfig={
    inputWidth: "100%",
    inputHeight: "48px"
  }

  const handleSubmit = async (values) => {
    try {
      const respone=await fetch("http://localhost:5000/school-management/signin",{
        method :"POST",
        headers :{
          "Content-Type": "application/json"
        },
        body: JSON.stringify(values),
      });

      const data=await respone.json();

      if (respone.ok){
        console.log("Login Successfull",data);
        localStorage.setItem("token",data.token);
        dispatch(login(data.user,data.token));

        // Check the role and navigate accordingly
        if (data.role === 'Admin') {
          navigate('/admindashboard');
        } else if (data.role === 'Student') {
          navigate('/studentdashboard');
        } else if (data.role === 'Librarian') {
          navigate('/librariandashboard');
        } else if (data.role === 'OfficeStaff') {
          navigate('/officestaffdashboard');
        } else {
          console.error("Invalid role:", data.role);
          alert("Access Denied: Invalid Role");
        }
      }
      else {
        console.error("Login Failed:",data.message);
        alert(data.message);
      }
    } 
    
    catch (error) {
      console.error("Error during sign-in:", error);
      alert("An error occurred. Please try again.")
    }
  };

  
  return (
    <div className='flex justify-center items-center h-screen'>
      
      <div className=" sm:min-w-[400px] md:min-w-[450px] lg:min-w-[500px] xl:min-w-[600px] bg-signinBackground p-6 shadow-lg rounded-lg">
       <div className='flex justify-center'>
      <FormComponent
     
      inputConfig={inputConfig}
      fieldConfigs={fieldConfigs}
      buttonConfig={buttonConfig}
      apiEndpoint={handleSubmit}
      heading="Sign In Here"
      />
        </div>
      </div>
    </div>
  )
}

export default UserSignin
