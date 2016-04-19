var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var taxonomies = new Schema({
	name: String,
	description: String,
	type: String,
	uid: String
});

module.exports = mongoose.model('Taxonomies', taxonomies);