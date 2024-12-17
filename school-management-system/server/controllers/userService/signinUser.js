const express = require('express');
const bcrypt = require('bcrypt');
const jwt =require('jsonwebtoken')


const User =require('../../models/User');


const signinUser= async(req,res)=>{

    const {email,password}=req.body;
        try{

            const user=await User.findOne({email})

            if(!user){
                return res.status(404).json({message:"User not Found"});
            }

            const isMatch= await bcrypt.compare(password,user.password)
            if(!isMatch){
                return res.status(401).json({message:"Invalid password"})
            }
            
            //Extracting role from user details
            const role = user.role;

            //Sending Jwt Token
            const token=jwt.sign({id:user._id,role},process.env.JWT_SECRET,{
                expiresIn:"1h",
            });
            return res.status(200).json({message:"Login Successfull",token,role})
        } 
        catch(error){
            console.log("Error During Signin:",error);

            res.status(500).json({message:"An error occured during signin"})
        }
    }

module.exports = signinUser;
