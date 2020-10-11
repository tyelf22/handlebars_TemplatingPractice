const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');

const app = express();
const PORT = process.env.PORT || 3000;

app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

let people = ['John', 'Sarah', 'Paul']

let peopleObj = [
    {
        firstname: 'Peter',
        lastname: 'Johnson'
    },
    {
        firstname: 'Bob',
        lastname: 'Doe'
    }
]

app.get('/', (req, res) => {
    res.render('home', {
        content: 'This is new content',
        people: people,
        peopleObj: peopleObj
    });
})

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});





