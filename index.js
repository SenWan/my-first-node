const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const users = [
    {id: 1, name: 'Sakib', phone: 12345, email: 'slj@gmail.com'},
    {id: 2, name: 'Rakib', phone: 12345, email: 'aslj@gmail.com'},
    {id: 3, name: 'Jakib', phone: 12345, email: 'axlj@gmail.com'},
    {id: 4, name: 'Nakib', phone: 12345, email: 'xslj@gmail.com'},
    {id: 5, name: 'Bakib', phone: 12345, email: 'axsl@gmail.com'}
]

app.get('/',(req, res) => {
    res.send('Hello from node js using nodeomon auto reload');
});

app.get('/user/:id', (req, res) => {
    const id = req.params.id;
    const user = users.find(u => u.id == id);
    res.send(user);
});

app.post('/user', (req, res) => {
    const user = req.body;
    user.id = users.length + 1;
    users.push(user);
    res.send(user);
})

app.get('/users', (req, res) => {
    if(req.query.name){
        const search = req.query.name.toLowerCase();
        const matched = users.filter(user => user.name.toLowerCase().includes(search));
        res.send(matched);
    }
    else{
        res.send(users);
    }
})

app.listen(port, () => {
    console.log('Listening to port', port);
})