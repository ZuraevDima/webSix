const express = require('express');
const app = express();
const path = require('path');
const hbs = require('hbs');
const pug = require('pug');
const ejs = require('ejs');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
hbs.registerPartials(__dirname + "/views/partials");

app.get('/', (req, res) => {
  res.render('ejs-content.ejs');
});

app.get("/hbs", function(req, resp){
    resp.render('main.hbs');
});

app.get("/pug", function(req, resp){
    resp.render('pug-content.pug');
});


const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
