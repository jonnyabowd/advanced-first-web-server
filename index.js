
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = process.env.PORT || 4000
const users = require('./state').users;

app.listen(port, () => 
  console.log(`Example app listening on port ${port}!`))

app.get('/', (req, res) => res.send('Hello World!'))

app.get('/users', (req, res) => {
  console.log('USERS', users)
  res.json(users)
})

app.get('/users/1', (req, res) => {
  res.json(users[0])
})

app.post('/users', (req, res, next) => {
  users.push({
    "_id": 6,
    "name": "The Dude",
    "occupation": "Who The Fuk Knows",
    "avatar": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Jeff_Bridges_by_Gage_Skidmore_3.jpg/1024px-Jeff_Bridges_by_Gage_Skidmore_3.jpg"
  })
  return res.send(users);
})

app.put('/users/1', (req, res, next) => {
  users[0].name = "Patrick Schwasted"
  return res.send(users[0])
})

app.delete('/users', (req, res, next) => {
  users.shift()
  return res.send('User 1 nuked')
})



app.use(bodyParser.json())
