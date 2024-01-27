const express = require("express")
const cors = require("cors")

const applyMiddleware = (app) =>{
    app.use(cors())
    app
}