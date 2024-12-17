const createUser=require('../userService/createUser');
const signinUser=require('../userService/signinUser');
const changePassword=require('../userService/changePassword');
const deleteUser=require('../userService/deleteUser');


const userService={
    createUser,
    signinUser,
    changePassword,
    deleteUser,

};

module.exports=userService;