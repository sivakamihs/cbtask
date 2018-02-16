var express = require('express');
var router = express.Router();

var User = require('../model/user');
var logger = require("winston-color");
const getIp = require('get-ip');
var urlName = '';
var ObjectId = require('mongoose').Types.ObjectId;
var getip = getIp();

router.get('/listUser', function (req, res) {
	urlName = 'user/listUser';
	User.find({}, function (err, data) {

		if (err) {
			logger.error(getip + ' ' + urlName + ' ' + 'Error while list');
			return res.json({ success: false, message: err + "Error while list" });
		}

		if (data.length == 0) {
			logger.warn(getip + ' ' + urlName + ' ' + 'No records found');
			return res.json({ success: true, message: "No records found" });

		}

		logger.info(getip + ' ' + urlName + ' ' + 'User listed successfully');
		return res.json({ success: true, message: "User listed successfully", data: data });
	});


});

router.post('/updateUser', function (req, res) {
	urlName = 'user/update';

	var userdata = req.body;

	User.update({_id: ObjectId(userdata._id) }, userdata, function (err, data) {

		if (err) {
			logger.error(getip + ' ' + urlName + ' ' + 'Error while Update');
			return res.json({ success: false, message: err + "Error while Update" });
		}

		logger.info(getip + ' ' + urlName + ' ' + 'User Updated successfully');
		return res.json({ success: true, message: "User Updated successfully", data: data });
	});
});

router.get('/test', function (req, res) {
	res.json({ success: true, message: 'API routes working fine' });

});


module.exports = router;