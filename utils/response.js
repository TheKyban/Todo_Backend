export const response = (res,statusCode,success = false, message) => {
    return res.setHeader('Content-Type', 'application/json').status(statusCode).json({
        success:success,
        message:message
    })
}