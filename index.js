// Import et instantiation
const express = require('express')
const app = express()

const port = 5000

// API : authors
const authors = [
    {
        name: "Lawrence Nowell",
        nationality: "UK",
        books: ["Beowulf"]
    },
    {
        name: "William Shakespeare",
        nationality: "UK",
        books: ["Hamlet", "Othello", "Romeo and Juliet", "MacBeth"]
    },
    {
        name: "Charles Dickens",
        nationality: "US",
        books: ["Oliver Twist", "A Christmas Carol"]
    },
    {
        name: "Oscar Wilde",
        nationality: "UK",
        books: ["The Picture of Dorian Gray", "The Importance of Being Earnest"]
    },
]

// ROUTES

//--- route page d'accueil
app.get('/', (req, res, next) => {
    res.send('Authors API')
})

//--- routes qui affichent les auteurs et leurs nationalités par leur ID
app.get('/authors/:id/', (req, res, next) => {
    const id = req.params.id
    const author = authors[id - 1]
    res.json(`Name : ${author.name} || Nationality : ${author.nationality}`)
})

//--- routes qui affichent les livres de chaque auteurs
app.get('/authors/:id/books/', (req, res, next) => {
    const id = req.params.id
    const author = authors[id - 1]
    res.json(`Books : ${author.books}`)
})

//--- routes qui affichent les auteurs et leurs nationalités sous forme d'objet
app.get('/json/authors/:id', (req, res, next) => {
    const id = req.params.id
    const author = authors[id - 1]
    res.json({
        name: author.name,
        nationality: author.nationality
    })
})

//--- routes qui affichent les livres des auteurs sous forme d'objet
app.get('/json/authors/:id/books', (req, res, next) => {
    const id = req.params.id
    const author = authors[id - 1]
    res.json({
        books: author.books
    })
})

//--- route erreur 404
app.get('*', (req, res) => {
    res.status(404).send("Not found")
  })

// Run server
app.listen(port, () => {
  console.log('Server started on port: ' + port);
})