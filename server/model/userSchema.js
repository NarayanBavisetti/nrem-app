const mongoose = require("mongoose")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    work:{
        type:String,
        required:true,
    },
    phone:{
        type:Number,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
    confirmpassword:{
        type:String,
        required:true,
    },
})

userSchema.pre("save", async function (next) {
    if(this.isModified('password')){
        this.password = await bcrypt.hash(this.password,12)
        this.confirmpassword = await bcrypt.hash(this.confirmpassword,12)
    }
    next();
})

userSchema.method.generateAuthToken = async function () {
    try{
        let token = jwt.sign({_id:this._id}, process.env.SECRET_KEY)
    }catch(err){
        console.log(err);
    }
}

const User = mongoose.model('user',userSchema);

module.exports = User;