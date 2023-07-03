//2: 57:25


class CustomAPIError extends Error {
    constructor(message, statusCode) {
        supper(message)
        this.statusCode = statusCode;
    }
}

const creatCustomError = (msg, statusCode) => {
    return new CustomAPIError(msg, statusCode)
}

module.exports = {
    creatCustomError,
    CustomAPIError
}