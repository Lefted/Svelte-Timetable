// based on https://github.com/m-haecker/svelte-kit-todo-app-mongoose/blob/main/src/lib/database.ts

import utils from '$lib/utils';
import mongoose from 'mongoose';

const MONGODB_URI = utils.env('MONGODB_URI');

if (!MONGODB_URI) {
	throw new Error('MONGODB_URI environment variable not set');
}

/**
 * Global is used here to maintain a cached connection across hot reloads
 * in development. This prevents connections growing exponentially
 * during API Route usage.
 */
let cached = global.mongoose;

if (!cached) {
	cached = global.mongoose = { conn: null, promise: null };
}

async function dbConnect() {
	if (cached.conn) {
		return cached.conn;
	}

	if (!cached.promise) {
		const opts = {
			bufferCommands: false
		};

		cached.promise = mongoose.connect(MONGODB_URI, opts).then((mongoose) => {
			return mongoose;
		});
	}
	cached.conn = await cached.promise;
	return cached.conn;
}

export default dbConnect;
