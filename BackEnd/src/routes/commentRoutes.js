const express = require("express");
const router = express.Router();
const { check } = require("express-validator");
const {createComment} = require('../controllers/commentController');
const {authenticate} = require('../middleware/authMiddleware');

// comment User Route   

router.post('/:id',[
    check("body", "Make sure comment is not empty").exists()
], authenticate, createComment);

module.exports = router;