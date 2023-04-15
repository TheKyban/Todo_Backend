export const response = (res,statusCode,success = false, message) => {
    return res.status(statusCode).send({
        success:success,
        message:message
    })
}