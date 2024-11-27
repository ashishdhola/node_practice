const express = require('express');

const port = 1122;
const app = express();  // server create 

app.set('view engine', 'ejs');
app.use(express.urlencoded());
let students = [
    {
        id: 101,
        firstname: "Pravesh",
        lastname: "Prajapati",
        gender: "male",
        email: "pravesh@test.in",
        phone: 9874563210
    },
    {
        id: 102,
        firstname: "Ashish",
        lastname: 'Dhola',
        gender: 'male',
        email: 'ashish@test.in',
        phone:1234567890
    },
    {
        id: 103,
        firstname: "Palak",
        lastname: "Gohel",
        email:"palak@test.in",
        gender: 'female',
        phone:4567890321
    }
];


app.get('/', (req, res)=>{
    res.render('index',{students: students});
})
app.get('/about', (req, res)=>{
    res.render('about');
})

app.post('/addStudent', (req, res)=>{
    // console.log(req.body);
    const {id, firstname, lastname, email, gender, phone} = req.body;
    const newObj = {
        id: id,
        firstname: firstname,
        lastname: lastname,
        email: email,
        gender: gender,
        phone: phone
    }
    students.push(newObj);
    console.log('New Student Added');
    return res.redirect("/");
})


app.listen(port, (err)=>{
    if(err){
        console.log('Server not start');
    }else{
        console.log(`Server start at http://localhost:${port}`);
    }
});
