const express = require('express');
const UserDB = require('./userDb.js');
const router = express.Router();
//calling middleware
router.use('/:id', validateUserId)


router.post('/', (req, res) => {

});

router.post('/:id/posts', (req, res) => {

});

router.get('/', (req, res) => {

});

router.get('/:id', (req, res) => {

});

router.get('/:id/posts', (req, res) => {

});

router.delete('/:id', (req, res) => {

});

router.put('/:id', (req, res) => {

});

//custom middleware

function validateUserId(req, res, next) {
    const {id}= req.params;
    UserDB.getById(id)
    .then(user => {
        if(user) {
            req.user = user;
            next();
        } else {
            res.status(400).json({message: "invalid user id"})
        }
    });
};

function validateUser(req, res, next) {

};

function validatePost(req, res, next) {

};

module.exports = router;
