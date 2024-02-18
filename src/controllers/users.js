const { getAllUser, createNewUser, patchUser, deletedUser, findUser } = require('../models/users');

const getAllUsers = async (req, res) => {
	try {
		const users = await getAllUser();

		res.status(200).json({
			status: 200,
			message: 'GET all users success',
			data: users,
		});
	} catch (error) {
		res.status(500).json({
			status: 500,
			message: `Error: ${error}`,
		});
	}
};

const getUserById = async (req, res) => {
	try {
		const id = parseInt(req.params.id);
		if (typeof id !== 'number') {
			throw Error('ID is not a number!');
		}

		const users = await findUser(id);
		res.status(200).json({
			status: 200,
			message: `GET user with ID: ${id} success`,
			data: users,
		});
	} catch (error) {
		res.status(500).json({
			status: 500,
			message: `Error: ${error}`,
		});
	}
};

const createUser = async (req, res) => {
	try {
		const data = req.body;
		const user = await createNewUser(data);

		res.status(201).json({
			status: 201,
			message: 'CREATE user success',
			data: user,
		});
	} catch (error) {
		res.status(500).json({
			status: 500,
			message: `Error: ${error}`,
		});
	}
};

const updateUser = async (req, res) => {
	try {
		const id = parseInt(req.params.id);

		if (typeof id !== 'number') {
			throw Error('ID is not a number!');
		}

		const data = req.body;
		const user = await patchUser(id, data);

		res.status(201).json({
			status: 201,
			message: 'UPDATE user success',
			data: user,
		});
	} catch (error) {
		res.status(500).json({
			status: 500,
			message: `Error: ${error}`,
		});
	}
};

const deleteUser = async (req, res) => {
	try {
		const id = parseInt(req.params.id);
		await deletedUser(id);

		res.status(200).json({
			message: 'DELETE user success',
			data: {
				id: id,
			},
		});
	} catch (error) {
		res.status(500).json({
			status: 500,
			message: `Error: ${error}`,
		});
	}
};

module.exports = {
	getAllUsers,
	getUserById,
	createUser,
	updateUser,
	deleteUser,
};
