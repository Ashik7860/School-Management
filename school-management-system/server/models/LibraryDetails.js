const mongoose=require('mongoose');

const libraryDetailsSchema=mongoose.Schema({
    userId: {type: mongoose.Schema.Types.ObjectId,ref: 'User' ,required:true},
    bookTitle: { type: String, required: true },
    author: { type: String, required: true },
    category: { type: String, required: true },
},{ timestamps: true });

module.exports=mongoose.model('LibraryDetails',libraryDetailsSchema);