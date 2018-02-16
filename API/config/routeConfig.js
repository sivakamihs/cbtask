var express = require('express');
router = express.Router();

router.use('/user', require('../lib/controller/user'));

module.exports = router;