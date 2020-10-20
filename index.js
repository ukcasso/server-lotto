let express = require('express');
let app = express();

app.set('views', './');
app.set('view engine', 'ejs');

app.use(express.static('public'));
app.use(express.static('.'));

app.get('/', function (req, res) {
  res.render('lotto');
});

app.listen(3000, () => console.log('Lotto Server is running on port 3000...'));