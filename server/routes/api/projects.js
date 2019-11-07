const express = require('express');
const router = express.Router();
const multer = require('multer');

const storage = multer.diskStorage({
	destination: './uploads/project_images/',
	filename: function(req, file, cb) {
		cb(null, Date.now() + '_' + file.originalname);
	}
});

const fileFilter = (req, file, cb) => {
	if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
		cb(null, true);
	} else {
		cb(null, false);
	}
};

const upload = multer({
	storage: storage,
	limits: {
		fileSize: 1024 * 1024 * 5
	},
	fileFilter: fileFilter
});

// const UserSession = require('../../models/UserSession');

// Item Model
const Project = require('../../models/Project');

// @route GET api/projects
// @desc Get all projects
// @access Public
router.get('/', (req, res) => {
	console.log('get request to projects');
	console.log('res: ' + res);
	Project.find()
		.then(projects => res.json(projects))
		.catch(err => res.status(400).json('Error: ' + err));
});

// @route GET api/projects/:id
// @desc Get a specified Project
// @access Public
router.get('/:id', (req, res) => {
	Project.findById(req.params.id)
		.then(Project => res.json(Project))
		.catch(err => res.status(400).json('Error: ' + err));
});

// @route POST api/projects
// @desc Create a new Project
// @access Public
router.post('/', upload.single('projectImg'), (req, res) => {
	console.log('POST REQUEST IN SERVER');
	console.log(req.file);

	const newProject = new Project({
		projectTitle: req.body.projectTitle,
		projectDescription: req.body.projectDescription,
		projectSidepanelText: req.body.projectSidepanelText,
		projectUrl: req.body.projectUrl,
		projectUrlText: req.body.projectUrlText,
		projectImg: req.file.path,
		date: req.body.date
	});

	newProject.save(err => {
		if (err) {
			return res.send({
				success: false,
				message: 'Project not saved! Error: ' + err
			});
		}
		return res.send({
			success: true,
			message: 'Project added!'
		});
	});
});

// @route POST api/projects/:id
// @desc Delete a Project
// @access Public
router.delete('/:id', (req, res) => {
	Project.findByIdAndRemove(req.params.id)
		.then(Project => res.json(`${Project.name} deleted`))
		.catch(err => res.status(400).json('Error: ' + err));
});

// @route PUT api/projects
// @desc Update Project
// @access Public
router.put('/update/:id', (req, res) => {
	Project.findByIdAndUpdate(req.params.id).then(Project => {
		Project.name = req.body.name;
		Project.description = req.body.description;
		Project.score = req.body.score;

		Project
			.save()
			.then(() => res.json('Project updated!'))
			.catch(err => res.status(400).json('Error: ' + err));
	});
});

module.exports = router;
