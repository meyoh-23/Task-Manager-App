const mongoose = require('mongoose');
const connectionString = `mongodb://127.0.0.1:27017/task-manager`;

const connectDB = (url) => {
    return mongoose.connect(connectionString, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            //useFindAndModify: true,
            useFindAndModify: false
        })
}

module.exports =connectDB;