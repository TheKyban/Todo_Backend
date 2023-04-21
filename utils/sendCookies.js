export const sendCookie = (res,token,time) => {
    res.cookie('token', token, {
        httpOnly: true,
        expires: new Date(Date.now() + time),
        // SameSite: process.env.NODE_ENV === "Development" ? "lax" : "none",
        // secure: process.env.NODE_ENV === "Development" ? false : true,
    })
}