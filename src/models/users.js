const prisma = require('../config/database');

const getAllUser = async () => {
	const users = await prisma.users.findMany();
	return users;
};

const findUser = async (id) => {
	const users = await prisma.users.findUnique({
		where: {
			id,
		},
	});
	return users;
};

const createNewUser = async (data) => {
	const user = await prisma.users.create({
		data: {
			name: data.name,
			email: data.email,
			address: data.address,
		},
	});

	return user;
};

const patchUser = async (id, data) => {
	const user = await prisma.users.update({
		where: {
			id,
		},
		data: {
			name: data.name,
			email: data.email,
			address: data.address,
		},
	});

	console.log(user);

	return user;
};

const deletedUser = async (id) => {
	await prisma.users.delete({
		where: {
			id,
		},
	});
};

module.exports = {
	getAllUser,
	findUser,
	createNewUser,
	patchUser,
	deletedUser,
};
