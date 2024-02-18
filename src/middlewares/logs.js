const logRequest = (req, res, next) => {
	console.log(`Logs Middleware di REST API dengan path: ${req.path}`);
	next();
};

module.exports = logRequest;
