const express = require('express');
const tasks = require('./routes/tasks');
const connectDB = require('./db/connect');
const notFound = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');

const app = express();


//middleware
app.use(express.static('./public')) //serving static files
app.use(express.json()); //to access the data in req.body

//routes
app.use('/api/v1/tasks', tasks);

app.use(notFound); //when the resource is not accessed
app.use(errorHandlerMiddleware);


/* app.get('/api/v1/tasks');                  // get all tasks
app.post('/api/v1/tasks');               // create a new Task
app.get('/api/v1/tasks/:id');          // get a single task
app.patch('/api/v1/tasks/:id');        // update a single Task
app.delete('/api/v1/tasks/:id');     // delete a single task */

const port = process.env.PORT ||3000; // for Deployment Purposes, use the environment port

const start = async () => {
    try {
        await connectDB()
        app.listen(port, () => {
            console.log(`Server is Listening on Port ${port}...`)
        });
        
    } catch (error){
        console.log(erro)
    }
}

start()
