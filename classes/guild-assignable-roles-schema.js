const mongoose = require('mongoose');

const Schema = mongoose.Schema;

module.exports = new Schema({
	guildId: { type: String, required: true, unique: true },
	roleIds: [String]
});
