let express = require('express');
let router = express.Router();

let UserController = require('../../controllers/user');

router.get('/signup', UserController.signUp);

module.exports = router;

