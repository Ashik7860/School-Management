const mongoose=require('mongoose');

const userSchema=mongoose.Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, enum: ['Admin', 'OfficeStaff', 'Librarian', 'Student'], default: 'student' },
},{ timestamps: true }
);

module.exports=mongoose.model('User',userSchema);