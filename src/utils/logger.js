const fs = require("fs");
const config = require("../config.js");
const logPath = "./logs";

class logger {
	constructor() {
		if (!fs.existsSync(logPath)) {
			fs.mkdirSync(logPath);
		}
	}

	info(message) {

		const date = new Date();
		const dateString = `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;
		const timeString = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
		const logString = `[${dateString} ${timeString}] [info] ${message}`;

		console.log(logString);
		if (config.logging.level <= 2) {
			fs.appendFileSync(`${logPath}/combined.log`, logString + "\n");
		}
	}

	warn(message) {
		const date = new Date();
		const dateString = `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;
		const timeString = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
		const logString = `[${dateString} ${timeString}] [warn] ${message}`;

		console.warn(logString);
		if (config.logging.level <= 3) {
			fs.appendFileSync(`${logPath}/combined.log`, logString + "\n");
		}
	}

	error(message) {
		const date = new Date();
		const dateString = `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;
		const timeString = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
		const logString = `[${dateString} ${timeString}] [error] ${message}`;

		console.error(logString);
		if (config.logging.level <= 4) {
			fs.appendFileSync(`${logPath}/combined.log`, logString + "\n");
		}
	}

	critical(message) {
		const date = new Date();
		const dateString = `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;
		const timeString = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
		const logString = `[${dateString} ${timeString}] [critical] ${message}`;

		console.error(logString);
		if (config.logging.level <= 5) {
			fs.appendFileSync(`${logPath}/combined.log`, logString + "\n");
		}
	}
}

module.exports = new logger();