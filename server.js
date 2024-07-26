const express = require("express")
const app = express()

app.use(logger) // Global middleware

// single middleware
app.get("/", (req, res) => {
    console.log("Home Page")
    res.send("Home Page")
})

app.get("/users", auth, (req, res) => {
    console.log(`User is admin = ${req.admin}`)             // controller action
    console.log("Users Page")
    res.send("Users Page")
})

// Global middleware
function logger(req, res, next) {
    console.log("Logged");
    next()
}

// Authentication middleware to authenticate users
function auth(req, res, next) {
    if (req.query.admin === "true") {                       // this is a query to check if the user is admin or not
        req.admin = true                                    // set the admin property to true
        next()                                              // pass to the control     
        //return                                               // stop the above execution
    } else {
        res.send("Users have No Auth")
    }
}

app.listen(3000, () => console.log("Server is running on port 3000"));