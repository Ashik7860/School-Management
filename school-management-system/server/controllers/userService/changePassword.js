const bcrypt=require('bcrypt');
const User=require('../../models/User')

const changepassword=async (req,res)=>{
    const {oldPassword,newPassword}=req.body;
    try{
        const userId=req.user.id;
        
        const user= await User.findById(userId);
        if(!user){
            return res.status(404).json({message:"User not found"});
        }

        //Comparing Password
        const isMatch=await bcrypt.compare(oldPassword,user.password);
        if(!isMatch){
            return res.status(401).json({message:"Old password is incorrect"});
        }

        //Hash Password
        const hashedPassword= await bcrypt.hash(newPassword,10);
        user.password=hashedPassword;

        await user.save();

        return res.status(200).json({ message: "Password changed successfully" });

    }catch (error) {
        console.error("Error during password change:", error);
        return res.status(500).json({ message: "An error occurred during password change" });
    }
}

module.exports= changepassword;