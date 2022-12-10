const express = require('express')
const Index = express.Router(); 
  
 Index.get('/', function(req, res) { 
   res.render("pages/home"); 
 }); 
  
 Index.get('/users', function(req, res) { 
   res.send('List of APIv1 users.'); 
 }); 
  
 module.exports = Index;