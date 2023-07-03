const {CustomAPIError} = require('../errors/custom-errors');
const errorHandlerMiddleware =(err, req, res, next) => {
    if (err instanceof CustomAPIError) {
        return res.status(err.statusCode).json({msg: err.message });
    }

    return res.status(500).json({msg: 'Something went wrong, please try again'});
    //return res.status(err.status).json({msg: err.message});
}

module.exports = errorHandlerMiddleware;