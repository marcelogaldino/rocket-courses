const express = require('express')
const nunjucks = require('nunjucks')

const server = express()

server.set('view engine', 'njk')
server.use(express.static('public'))

nunjucks.configure('views', {
    express: server
})

server.get('/', (req, res) => {
    return res.render('index')
})

server.get('/sobre', (req, res) => {
    return res.render('sobre')
})

server.get('/conteudos', (req, res) => {
    return res.render('conteudos')
})

server.use((req, res) => {
    return res.status(404).render('not-found')
})

server.listen(3333, () => {
    console.log('Server is running')
})