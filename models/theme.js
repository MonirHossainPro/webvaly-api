const mongoose = require('mongoose');

const themesScheme = new mongoose.Schema(
	{
		name: {
			type: String,
			required: [true, 'Theme name must be provided'],
		},
		price: {
			type: Number,
			required: [true, 'product price must be provided'],
		},
		featured: {
			type: Boolean,
			default: false,
		},
		rating: {
			type: Number,
			default: 4.5,
		},
		numRating: {
			type: Number,
			default: 25,
		},
		sales: {
			type: Number,
			default: 25,
		},
		category: {
			type: String,
			enum: {
				values: ['Site Template', 'React JS', 'MERN Stack', 'WordPress'],
				message: '{VALUE} is not supported',
			},
		},
	},
	{ timestamps: true }
);
module.exports = mongoose.model('Theme', themesScheme);
