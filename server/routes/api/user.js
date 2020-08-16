let express = require('express');
let router = express.Router();

let UserController = require('../../controllers/user');

router.get('/signup', UserController.signUp);
router.post('/addMovie', UserController.addMovie);
router.get('/getMovie', UserController.getMovie);

module.exports = router;

