import { browser } from '$app/env';
import dotenv from 'dotenv';

class Utils {
	static instance;

	constructor() {
		if (!browser) {
			dotenv.config();
		}
	}

	static getInstance() {
		if (!Utils.instance) {
			Utils.instance = new Utils();
		}
		return Utils.instance;
	}

	env(name) {
		if (browser) return undefined;
		return process.env[name];
	}
}

export default Utils.getInstance();
