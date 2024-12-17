import React from 'react';
import CardComponent from '../../reUsableComponents/CardComponent';
import { useNavigate } from 'react-router-dom';
import { PiStudent } from "react-icons/pi";
import { FaSchool } from "react-icons/fa";
import { LuLibraryBig } from "react-icons/lu";


const OfficeStaffDashboard = () => {
  const navigate=useNavigate();

  const buttonConfig = {
    label: "Continue",
    type: "submit",
    btnWidth: "w-auto",
    btnHeight: "h-10",
    variant: "cardButton",
  };

  const handleClick=(page)=>{
    console.log(page);

    // Navigate to the respective page based on the button clicked
    if (page === "student") {
      navigate("/student-details");  
    } else if (page === "library") {
      navigate("/library-details");  
    } else if (page === "fees") {
      navigate("/fees-details");  
    }
  }

  return (
    <>
    <div className='font-extrabold flex justify-center items-center p-4'>
      <h1>OfficeStaff Dashboard</h1>
    <div className='flex justify-center p-4 space-x-4'>
      </div>
      <CardComponent
        buttonConfig={buttonConfig}
        title=" View Student Details"
        onClick={()=>{handleClick("student")}}
        Icon={PiStudent}
      />
      <CardComponent
        buttonConfig={buttonConfig}
        title=" View Library Details"
        Icon={LuLibraryBig}
        onClick={()=>{handleClick("library")}}
      />
      <CardComponent
        buttonConfig={buttonConfig}
        title=" View Fees Details"
        Icon={FaSchool}
        onClick={()=>{handleClick("fees")}}
         />
    </div>
    
    </>
  );
};

export default OfficeStaffDashboard;
