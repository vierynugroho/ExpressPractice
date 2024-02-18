const express = require('express');

const router = express.Router();
const ControllerUser = require('../controllers/users');

//TODO: READ
router.get('/', ControllerUser.getAllUsers);

//TODO: READ
router.get('/:id', ControllerUser.getUserById);

//TODO: CREATE
router.post('/', ControllerUser.createUser);

//TODO: UPDATE
router.patch('/:id', ControllerUser.updateUser);

//TODO: DELETE
router.delete('/:id', ControllerUser.deleteUser);

module.exports = router;
