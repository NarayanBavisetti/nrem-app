
const express = require("express")
const router = express.Router()
const mongoose = require("mongoose")
const User = require("../model/userSchema")
require("../db/connection")


router.post("/login",((req,res) => {
    const {name,password} = req.body;

    User.findOne({name:name}).then((userExists) => {
        if(!userExists){
        res.status(400).json({msg :"user does not exist"})
        }
        User.findOne({password:password}).then((wright) => {
            if(!wright){
                res.status(400).json({msg :"password is wrong"})
            }
            res.status(200).json({msg :"user successfully logged in"})
        })
    })

}))

module.exports = router;