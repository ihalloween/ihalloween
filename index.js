const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Coming Soon!')
})
app.get('/uhm', (req, res) => {
  res.send('Haha = Block')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
           