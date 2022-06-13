import { students } from './data/students.js'
import express from 'express'

const app = express()

app.set('view engine', 'ejs')

app.get('/students', function (req, res) {
  res.render('students/index', {
    students: students
  })
})
app.get('/', function (req, res) {
  res.redirect('/students')
})

app.listen(3000, function() {
  console.log('Listening on port 3000')
})