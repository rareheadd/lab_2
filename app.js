const express = require('express');

const app = express();

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});

app.get('/', (req, res) => {
    res.render('home', { title: 'Strona główna' });
});

app.get('/student', (req, res) => {
    res.render('student', { title: 'Strona studenta' });
});

app.set('view engine', 'html');
app.engine('html', require('ejs').renderFile);

app.set('views', './views');
