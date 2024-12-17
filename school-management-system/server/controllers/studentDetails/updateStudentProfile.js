const Student =require("../../models/Student");
const User =require("../../models/User");
const mongoose=require('mongoose');

const updateStudentProfile=async (req,res)=>{
    const {userId,name,age,grade,section,amount, dueDate, isPaid }=req.body;

    try {
        // Validate the userId
        if (!userId || !mongoose.Types.ObjectId.isValid(userId)) {
            return res.status(400).json({ message: "Invalid or missing userId" });
        }

        
         // Check if the user has the required role to update profiles
         const user = await User.findById(userId);
         if (!user || (user.role !== 'Admin' && user.role !== 'OfficeStaff')) {
             return res.status(403).json({ message: "Unauthorized access" });
         }

         // Find the student profile by userId
        const student = await Student.findOne({ userId });
        if (!student) {
            return res.status(404).json({ message: "Student not found" });
        }

        // Update the student profile fields
        if (name !== undefined) student.name = name;
        if (age !== undefined) student.age = age;
        if (grade !== undefined) student.grade = grade;
        if (section !== undefined) student.section = section;
        if (amount !== undefined || dueDate !== undefined || isPaid !== undefined) {
            student.fees = {
                ...(student.fees || {}),
                ...(amount !== undefined && { amount }),
                ...(dueDate !== undefined && { dueDate }),
                ...(isPaid !== undefined && { isPaid }),
            };
        }

        await student.save();
        return res.status(200).json({ message: "Student profile updated successfully", updatedStudent: student });
    }catch(error){

    }

}
module.exports=updateStudentProfile;