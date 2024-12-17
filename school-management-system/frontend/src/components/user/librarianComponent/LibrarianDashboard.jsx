import React from 'react';
import CardComponent from '../../reUsableComponents/CardComponent';
import { useNavigate } from 'react-router-dom';
import { PiStudent } from "react-icons/pi";
import { LuLibraryBig } from "react-icons/lu";


const LibrarianDashboard = () => {
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
    }
  }

  return (<>
    <div className='font-extrabold flex justify-center items-center p-4'>
      <h1>Librarian Dashboard</h1>

    </div>
    <div className='flex justify-center p-4 space-x-4'>
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
      
    </div>
    </>
  );
};

export default LibrarianDashboard ;
