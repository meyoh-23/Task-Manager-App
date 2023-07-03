const express = require('express');
const router = express.Router();

const {getAllTasks, CreateTask, getTask, updteTask, deleteTask} = require('../controllers/task')

router.route('/').get(getAllTasks).post(CreateTask); // chaining operations on the same routes together
router.route('/:id').get(getTask).patch(updteTask).delete(deleteTask);

module.exports = router;