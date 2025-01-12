const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync");
const passport = require("passport");
const {savedredirectUrl} = require("../middleware.js")
const reviewsController = require("../controllers/users.js")

router.route("/signup")
.get(reviewsController.renderSignupForm)
.post(wrapAsync(reviewsController.signUp));

router.route("/login")
.get(reviewsController.renderLoginForm)
.post(savedredirectUrl,passport.authenticate('local', { 
       failureRedirect: '/login' ,
        failureFlash:true}),
        reviewsController.Login 
    );

router.get("/logout",reviewsController.logOut);

module.exports = router;
