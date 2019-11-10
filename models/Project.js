const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Schema
const ProjectSchema = new Schema({
	projectTitle: {
		type: String
	},
	projectDescription: {
		type: String
	},
	projectSidepanelText: {
		type: String
	},
	projectUrl: {
		type: String
	},
	projectUrlText: {
		type: String
	},
	projectImg: {
		type: String
	}
});

module.exports = Project = mongoose.model('Project', ProjectSchema);
