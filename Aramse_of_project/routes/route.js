const express = require("express")
const { register } = require("../controller/AuthController")

const router =express.Router()


router.post("/regsiter",register)

module.exports=router 