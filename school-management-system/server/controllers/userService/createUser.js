const express=require('express');
const bcrypt=require('bcryptjs');
const user=require('../../models/User');

const createUser=async(req,res)=>{
    const {email,password,role}=req.body;
    try{
        const existingUser=await user.findOne({email})
        if(existingUser)
            return res.status(400).json({message:'User already exists'})

        // Ensure only Admin can create Office Staff and Librarians
        if (['OfficeStaff', 'Librarian'].includes(role) && req.user.role !== 'Admin') {
            return res.status(403).json({ message: 'Access denied. Only Admin can create Office Staff or Librarians.' });
        }

        // Ensure only Office Staff can create Students
        if (role === 'Student' && req.user.role !== 'OfficeStaff' && req.user.role !== 'Admin') {
            return res.status(403).json({ message: 'Access denied. Only Office Staff can create Students.' });
        }

         // Encrypting password
    const hashedPassword=await bcrypt.hash(password,10);

    const newUser= new user({
        email,
        password:hashedPassword,
        role,
    });

    await newUser.save();

    return res.status(201).json({ message: 'User created successfully', user: newUser });
}
    
     catch(error){
        return res.status(500).json({message:"Error creating new user"});
     }
};



module.exports= createUser;