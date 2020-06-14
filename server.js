const express = require('express')
const nunjucks = require('nunjucks')

const data = require('./data')

const server = express()

server.set('view engine', 'njk')
server.use(express.static('public'))

nunjucks.configure('views', {
    express: server,
    autoescape: false
})

server.get('/', (req, res) => {
    return res.render('index', { data })
})

server.get('/sobre', (req, res) => {
    return res.render('sobre', { data })
})

server.get('/conteudos', (req, res) => {
    return res.render('conteudos', { data })
})

server.get('/courses/:id', (req, res) => {
    const id = req.params.id

    const course = data.courses.find(course => {
        return course.name === id
    })

    if(!course) {
        return res.send(`${id} course not found!`)
    }

    return res.render(`courses`, { course })
})

server.use((req, res) => {
    return res.status(404).render('not-found')
})

server.listen(3333, () => {
    console.log('Server is running')
})