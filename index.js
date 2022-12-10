const express = require('express')
const path = require("path")
const app = module.exports = express();
const port = 3000
app.set('views', path.join(__dirname, '/src/views'));
app.set('view engine', 'ejs');

app.use('/', require('./src/router/home'));


app.get('/uhm', (req, res) => {
  res.send('Haha = Block')
})

if (!module.parent) { 
   app.listen(3000); 
   console.log('Express started on port 3000'); 
}