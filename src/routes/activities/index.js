import dbConnect from '$lib/database';
import { ActivityModel } from '../../models/activity';

export async function get() {
	try {
		await dbConnect();
		const activities = await ActivityModel.find({}).exec();

		return {
			body: { activities }
		};
	} catch (error) {
		return {
			status: 500,
			body: {
				error: `Server error: ${error}`
			}
		};
	}
}

export const post = async ({ request }) => {
	try {
		await dbConnect();
		const activity = await request.json();
		console.log(activity);
		const doc = new ActivityModel({ ...activity, createdAt: new Date() });
		await doc.save();

		return {
			body: { status: 'Success' }
		};
	} catch (error) {
		return {
			status: 400,
			body: {
				error: String(error)
			}
		};
	}
};
