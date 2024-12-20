const express = require('express');
const path = require('path');
const dbConnect = require('./config/dbConnection');
const port = 1595;
const app = express();


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


app.use('/user', require('./routes/userRoutes'));
app.get('/', (req, res) => {
    return res.render('index');
})

app.listen(port, () => {


    console.log(`Server Start at http://localhost:${port}`);
})