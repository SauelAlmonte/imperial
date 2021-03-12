import express from 'express'

const app = express()
const PORT = process.env.PORT || 8080
const HOST = process.env.HOST || '0.0.0.0'

app.get("/", (req, res) =>
    res.send({response : "OK"}))

app.get('/search', (req, res) =>
    res.send({response : "Search Results"}))

app.get('/about', (req, res) =>
    res.send("About Us"))

// app.get('/login', (req, res) =>
//     res.send("Please Login"))
//
// app.get('/signup', (req, res) =>
//     res.send("Please SignUp"))
//
// app.get('/terms', (req, res) =>
//     res.send("Terms"))
//
// app.get('/privacy', (req, res) =>
//     res.send("Privacy"))

// app.get('/new', (req, res) =>
//     res.send("Hello"))

app.listen(PORT,() => console.log(`Server run on http://${HOST}:${PORT}`) )

/**
 * Data Models (designing how app is going to store an interact with data and entities)
 *
 * APP (several things & people that would be interacting with each other)
 *
 * Entity
 *
 * Schema
 */
