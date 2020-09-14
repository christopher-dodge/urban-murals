const express   = require('express'),
      app       = express(),
      port      = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.use(express.static(__dirname + "/public"));
console.log(__dirname);

app.get('/', (req, res) => {
    res.render('home');
});

app.listen(port, () => console.log('Server has started'));