const express = require("express");
const User = require('../models/User.js');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const JWT_SECRET = 'shantanuisagood$boy';
const jwt = require('jsonwebtoken');
const fetchuser = require("../middleware/fetchuser.js")
router.post('/createuser', [
  body('name', 'Enter a valid name').isLength({ min: 3 }),
  body('email', 'Enter a valid email').isEmail(),
  body('password', 'password at least 8 character').isLength({ min: 8 }),
],
  async (req, res) => {
    let success=false; 
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({success, errors: errors.array() });
    }
    try {
      let user = await User.findOne({ email: req.body.email });
      if (user) {
        return res.status(400).json({success, error: "sorry a user with this email already exists" })
      }
      const salt = await bcrypt.genSalt(10);
      const secPass = await bcrypt.hash(req.body.password, salt);
      user = await User.create({
        name: req.body.name,
        password: secPass,
        email: req.body.email,
      });
      const data = {
        user: {
          id: user.id
        }
      }
      const authtoken = jwt.sign(data, JWT_SECRET);
      success=true;
      res.json({ success,authtoken });
    }
    catch (error) {
      console.error(error.massage);
      res.status(500).send("some error accured");
    }
  })

// for login of user
router.post('/login', [
  body('email', 'Enter a valid email').isEmail(),
  body('password', 'login with correct password').exists(),
],
  async (req, res) => {
    let success=false; 
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({success, errors: errors.array() });
    }
    const { email, password } = req.body;
    try {
      let user = await User.findOne({ email: req.body.email });
      if (!user) {
        success=false;
        return res.status(400).json({success, error: "invalid Email" })
      }
      const passwordcompare = await bcrypt.compare(password, user.password);
      if (!passwordcompare) {
        success=false;
        return res.status(400).json({success, error: "invalid password" })
      }
      const data = {
        user: {
          id: user.id
        }
      }
      const authtoken = jwt.sign(data, JWT_SECRET);
      success=true;
      res.json({ success,authtoken });
    }
    catch (error) {
      console.error(error.massage);
      res.status(500).send("Internal server error");
    }
  })
router.post('/getuser', fetchuser, async (req, res) => {

  try {
    const userId = req.user.id;
    const user = await User.findById(userId).select("-password")
    res.send(user)
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
})
module.exports = router