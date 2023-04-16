export const response = (res,statusCode,success = false, message) => {
    return res.status(statusCode).json({
        success:success,
        message:message
    })
}