const mongoose =require('mongoose');

const studentSchema=new mongoose.Schema({
    userId: {type: mongoose.Schema.Types.ObjectId,ref: 'User',required:true},
    name:{type:String,required:true},
    age:{type:Number,required:true},
    grade:{type:Number,required:true},
    section:{type:String,required:true},
    fees: {
        amount: { type: Number, required: true },
        dueDate: { type: Date, required: true },
        isPaid: { type: Boolean, default: false },
    } 
    },  {timestamps:true});

module.exports= mongoose.model('Student',studentSchema);