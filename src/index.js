const express = require('express');
const dotenv = require('dotenv');
const prisma = require('./config/database');

dotenv.config();

const app = express();
const port = process.env.PORT;

const RoutesUsers = require('./routes/users');
const MiddlewareLogs = require('./middlewares/logs');

app.use(MiddlewareLogs);
app.use(express.json());
app.use('/users', RoutesUsers);
app.use('/', async (req, res, next) => {
	try {
		await prisma.$connect();
		console.log('Koneksi berhasil');
	} catch (e) {
		console.error('Koneksi gagal', e);
	}
	next();
});

app.listen(port, () => {
	console.log(`Server Running in http://localhost:${port}`);
});
