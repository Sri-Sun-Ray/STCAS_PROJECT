const User=require('../models/User');

exports.register=async(req,res)=>{
    const {employee_name,phone_number,username,password}=req.body;
    const user=new User({employee_name,phone_number,username,password});
    await user.save();
    res.status(201).json(user);
};
exports.login=async(req,res)=>{
    const {username,password}=req.body;
    const existingUser=await User.findOne({username,password});//for demo ....
    try{
    if(existingUser)
    {
        res.status(200).json({message:"Login Succesfull",user:existingUser});
    }
    else{
        res.status(401).json({message:"User not registered"});
    }
} catch(err){
    res.status(500).json({message:"Server Error",error:err});
}
};