const express = require('express')
const mustacheExpress = require('mustache-express')
const bodyParser = require('body-parser')

const app = express()

app.engine('mustache', mustacheExpress())
app.set('view engine', 'mustache')
app.set('views', './templates')

app.use(express.static('public'))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
let id = 0
let incompleteTasks = []

app.get('/', (req, res) => {
  res.render('index', { incompleteTasks: incompleteTasks })
})

app.post('/', (req, res) => {
  incompleteTasks.push({ id: id, title: req.body.title })
  id++
  res.redirect('/')
})

app.listen(3000, (req, res) => {
  console.log('Listening on 3000')
})
