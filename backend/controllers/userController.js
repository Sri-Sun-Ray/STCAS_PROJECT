const User=require('../models/User');

exports.register=async(req,res)=>{
    const {employee_name,phone_number,username,password}=req.body;
    const user=new User({employee_name,phone_number,username,password});
    await user.save();
    res.status(201).json(user);
};