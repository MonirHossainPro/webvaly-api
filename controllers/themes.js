const Template = require('../models/theme');

const getAllThemesStatic = async (req, res) => {
	const search = 'a';

	const templates = await Template.find({
		name: { $regex: search, $options: 'i' },
	});
	res.status(200).json({ nbHits: templates.length, templates });
};

const getAllThemes = async (req, res) => {
	const { featured, category, name } = req.query;

	const queryObject = {};

	if (featured) {
		queryObject.featured = featured === 'true' ? true : false;
	}

	if (category) {
		queryObject.category = category;
	}

	if (name) {
		queryObject.name = { $regex: name, $options: 'i' };
	}

	const templates = await Template.find(queryObject);
	res.status(200).json({ nbHits: templates.length, templates });
};

module.exports = {
	getAllThemesStatic,
	getAllThemes,
};
