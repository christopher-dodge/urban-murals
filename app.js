const express   = require('express'),
      app       = express(),
      port      = process.env.PORT || 3000;

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.send('This is working!');
});

app.listen(port, () => console.log('Server has started'));