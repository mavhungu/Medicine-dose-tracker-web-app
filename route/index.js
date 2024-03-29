const express = require('express');
const { body, validationResult } = require('express-validator');
const {AllMedicine,addMedicine,modalAddMedicine,findMedicine,updateMedicine,deleteMedicine} = require('../controllers/usersController');
const {login, register,users,logout} = require('../controllers/indexController');
const {getProfile,addProfile} = require('../controllers/usersProfileController');
const {hasAuthorization} = require('../middleware/auth.js');
const router = express.Router();

router.route('/register')
.post( register);

router.route('/login')
.post(login);

router.route('/user')
.get(users);

router.route('/addmedicine')
.get(hasAuthorization,AllMedicine)
.post(hasAuthorization,addMedicine);

router.route('/modaladdmedicine')
.post(hasAuthorization,modalAddMedicine);

router.route('/reports')
.get(hasAuthorization,AllMedicine);

router.route('/medicine/:id/edit')
.get(hasAuthorization,findMedicine);

router.route('/reportupdate/:id')
.put(hasAuthorization,updateMedicine);

router.route('/deletemedicine/:id')
.delete(hasAuthorization,deleteMedicine);

router.route('/profile')
.get(hasAuthorization,getProfile)
.post(hasAuthorization,addProfile);

router.route('/logout').post(logout);

module.exports = router;