const express = require("express");
const router = express.Router({mergeParams:true});
const wrapAsync = require("../utils/wrapAsync.js")
const {validateReview, isLoggedIn,isReviewauthor} = require("../middleware.js");
const reviewController = require("../controllers/reviews.js");

        //post review Route
  router.post("/",isLoggedIn, validateReview, wrapAsync(reviewController.createReview));        
    
        // delete review route
  router.delete("/:reviewId",isLoggedIn,isReviewauthor, wrapAsync(reviewController.destroyReview));     
      
  module.exports = router
    