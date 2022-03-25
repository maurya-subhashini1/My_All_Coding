const express = require("express")
const cookie = require("cookie-parser")
const jwt = require("jsonwebtoken")
// const CheckAuth=require("../Middlewere/Auth")


const router = express.Router()

const {Ragistation,Login, get_Registretion_data, logOut} = require("../controller/app")
const { create_Posts }=require("../controller/create_posts")



router.post("/api/ragistation",Ragistation)

router.get("/api/get_registretion_data",get_Registretion_data)

router.post("/api/login",Login)
router.get("/api/logout",logOut)

router.post("/api/post_blog",create_Posts)

module.exports = router;