import React from 'react';
import CardComponent from '../../../reUsableComponents/CardComponent';
import { useNavigate } from 'react-router-dom';
import { MdCreate } from "react-icons/md";
import { AiOutlineUsergroupDelete } from "react-icons/ai";



const UserControlComponent = () => {
  const navigate=useNavigate();

  const buttonConfigDelete = {
    label: "Delete",
    type: "submit",
    btnWidth: "w-auto",
    btnHeight: "h-10",
    variant: "cardButton",
  };
  const buttonConfigCreate = {
    label: "Create",
    type: "submit",
    btnWidth: "w-auto",
    btnHeight: "h-10",
    variant: "cardButton",
  };

  const handleClick=(page)=>{
    console.log(page);
    if (page==="create"){
        navigate("/createuser");
    }
    else if(page==="delete"){
        navigate("/deleteuser");
    }
    
  }

  return (
    <div className='flex justify-center p-4 space-x-4'>
      <CardComponent
        buttonConfig={buttonConfigCreate}
        label= "create"
        title=" Create User"
        onClick={()=>{handleClick("create")}}
        Icon={MdCreate}
      />
      <CardComponent
        buttonConfig={buttonConfigDelete} 
        title="Delete User"
        Icon={AiOutlineUsergroupDelete}
        onClick={()=>{handleClick("delete")}}
      />
      
    </div>
  );
};

export default UserControlComponent;
