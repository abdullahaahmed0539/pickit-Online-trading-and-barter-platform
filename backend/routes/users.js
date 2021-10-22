const express = require("express");
const { signUp } = require("../api/controllers/users/signup");
const { login } = require("../api/controllers/users/login");
const { updateProfile } = require("../api/controllers/users/updateProfile");
const checkAuth = require('../api/middleware/check-auth');
const router = express.Router();

router.route("/signup").post(signUp);
router.route("/login").post(login);
router.route("/updateprofile").post(checkAuth,updateProfile);

module.exports = router;
