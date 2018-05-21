const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const post = require('../models/post');

const db = "mongodb://admin:admin@ds129780.mlab.com:29780/codepost";

mongoose.Promise = global.Promise;
mongoose.connect(db, function(err) {
    if (err) {
        console.log('connection error: ', err);
    }
});

router.get('/posts', function(req, res) {
    console.log('Requesting posts');
    post.find({})
        .exec(function(err, posts) {
            if (err) {
                console.log("Error getting posts");
            } else {
                res.json(posts);
                console.log(posts);
            }
        });
});

router.get('/details/:id', function(req, res) {
    console.log('Requesting post');
    post.findById(req.params.id)
        .exec(function(err, post) {
            if (err) {
                console.log("Error getting post");
            } else {
                res.json(post);
            }
        });
});
module.exports = router;