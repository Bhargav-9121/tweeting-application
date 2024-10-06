const express = require("express");
const {
  getUserFeed,
  getFollowing,
  getFollowers,
  getTweetDetails,
  getTweetLikes,
  getTweetReplies,
  getUserTweets,
  postTweet,
  deleteTweet,
} = require("../controllers/tweetController");
const authenticateToken = require("../middlewares/authMiddleware");

const router = express.Router();

// Route to get the user's feed
router.get("/user/tweets/feed", authenticateToken, getUserFeed);

// Route to get the list of users that the authenticated user is following
router.get("/user/following", authenticateToken, getFollowing);

// Route to get the list of followers of the authenticated user
router.get("/user/followers", authenticateToken, getFollowers);

// Route to get details of a specific tweet
router.get("/tweets/:tweetId", authenticateToken, getTweetDetails);

// Route to get likes for a specific tweet
router.get("/tweets/:tweetId/likes", authenticateToken, getTweetLikes);

// Route to get replies for a specific tweet
router.get("/tweets/:tweetId/replies", authenticateToken, getTweetReplies);

// Route to get all tweets of a specific user
router.get("/user/tweets", authenticateToken, getUserTweets);

// Route to post a new tweet
router.post("/tweets", authenticateToken, postTweet);

// Route to delete a tweet
router.delete("/tweets/:tweetId", authenticateToken, deleteTweet);

module.exports = router;
