const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');

const app = express();
const PORT = process.env.PORT || 3000;

let jsonData = require('./hpCharacters.json')

app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use(express.static('public'));

let hpObj = jsonData

//Set handlebar routes
app.get('/', (req, res) => {
    res.render('home', {
        hpObj: hpObj
    });
})

app.get('/:id', (req, res) => {
    res.render('character', {
        character: hpObj[req.params.id]
    });
})


app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});





