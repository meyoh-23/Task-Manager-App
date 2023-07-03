const Task = require('../models/Task');
const asyncWrapper = require('../middleware/async');
const {createCustomError} = require('../errors/custom-errors')

//getting all Tasks
const getAllTasks = asyncWrapper(async (req, res) => {
        const tasks = await Task.find({});
        res.status(200).json({tasks});
        //res.status(500).json({msg: error});
})

// creating a new Task
const CreateTask = asyncWrapper(async (req, res) => {
        const task = await Task.create(req.body);
        res.status(201).json({task});
})

// getting a single task
const getTask = asyncWrapper(async (req, res, next) => {
        const { id: taskID } = req.params;
        const task = await Task.findOne({ _id: taskID });
        if (!task) {
            const error = new Error('Not Found');
            error.status = 404;
            return next(createCustomError(`No task with id ${taskID}`,  404));
        }
        res.status(200).json({ task })
})
// deleting a task
const deleteTask = asyncWrapper(async (req, res) => {
        const {id: taskID} = req.params;
        const task = await Task.findOneAndDelete({_id: taskID});
        if (!task) {
            return next(createCustomError(`No task with id ${taskID}`,  404));
        }
       // res.status(200).json({ task })
        //res,status(200).send()
        res.status(200).json({task: null, status: 'successs'}); // possibilities are limited
})

// updating a task
const updteTask =  asyncWrapper(async (req, res) => {
        const {id: taskID} = req.params;

        const task = await Task.findOneAndUpdate({_id: taskID}, req.body,
                {new: true,
                runValidators: true}
            );
        if (!task) {
            return next(createCustomError(`No task with id ${taskID}`,  404));
        }
})

// edit task
/* const editTask = async (req, res) => {
    try {
        const {id: taskID} = req.params;

        const task = await Task.findOneAndUpdate({_id: taskID}, req.body,
                {new: true,
                runValidators: true}
            );
        if (!task) {
            return res.status(404).json({msg: `No task with id: ${taskID}`});
        }
    } catch (error) {
        res.status(500).json({msg: error});
    }
} */

module.exports = {
    // exporting the operations as an object
    getAllTasks,
    CreateTask,
    getTask,
    updteTask,
    deleteTask,
    //editTask
}