import mongoose, { Schema, Types } from 'mongoose';

const activitySchema = new Schema({
	title: { type: String, required: true },
	description: { type: String, required: false },
	// start: { type: Date, required: true },
	// end: { type: Date, required: true },
	createdAt: { type: Date, default: Date.now, immutable: true }
	// creatyBy: { type: Types.ObjectId, ref: 'User' },
	// updatedAt: { type: Date, default: Date.now },
	// participants: [{ type: String, required: true }]
});

activitySchema.pre('save', function (next) {
	this.updatedAt = Date.now();
	next();
});

export const ActivityModel = mongoose.model('Activity', activitySchema);
