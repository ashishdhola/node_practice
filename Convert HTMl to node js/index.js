const express = require('express');
const port = 1111;
const path = require('path');
const app = express();

app.set("view engine", 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

const validate = (req, res, next) => {
    if (req.query.name == 'ashish') {
        next();
    } else {
        return res.redirect('/');
    }
}

const user = (req, res, next) => {
    if (req.query.pass >= 3) {
        next()
    } else {
        return res.redirect('/');
    }
}

app.get('/', (req, res) => {
    return res.render('home');
})

app.get('/about', validate, (req, res) => {
    return res.render('about');
})

app.get('/contact', user, (req, res) => {
    return res.render('contact');
})

app.listen(port, () => {
    console.log(`Server start at http://localhost:${port}`);
})