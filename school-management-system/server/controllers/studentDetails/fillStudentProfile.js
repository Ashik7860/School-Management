const Student=require('../../models/Student');
const mongoose = require('mongoose');



const fillStudentProfile=async (req,res)=>{
    const {userId,name,age,grade,section}=req.body;

        
    try{
        // Validate the userId
        if (!userId || !mongoose.Types.ObjectId.isValid(userId)) {
            return res.status(400).json({ message: "Invalid or missing userId" });
        }
        

    const newProfile= new Student({
        userId,
        name,
        age,
        grade,
        section,
    })
    await newProfile.save();
    return res.status(201).json({message:"Profile created successfully",newProfile})
    }
    catch(error){
        return res.status(500).json({message:"Error creating profile"})
    }

}

module.exports=fillStudentProfile;