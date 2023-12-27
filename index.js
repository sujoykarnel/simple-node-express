const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello world! Hi, I am writing Express');
})

const users = [
    { id: 0, name: "Sukdeb Gharami", phone: "017111" },
    { id: 1, name: "Mokaddem Islam", phone: "017222" },
    { id: 2, name: "Hiren Chandra", phone: "0171333" },
    { id: 3, name: "Manik Barai", phone: "017444" },
    { id: 4, name: "Monnaf Ahmed", phone: "017555" },
    { id: 5, name: "Zahedul Islam", phone: "017666" }
]

app.get('/users', (req, res) => {
    const search = req.query.search;
    if (search) {
        const searchResult = users.filter(user => user.name.toLowerCase().includes(search));
        res.send(searchResult);
    } else {
        res.send(users);
    }
})

//app.METHOD
app.post('/users', (req, res) => {
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser);
    console.log(req.body)
    res.json(newUser);
})

app.get('/users/:Id', (req, res) => {
    const id = req.params.Id;
    const user = users[id];
    res.send(user);
})

app.listen(port, () => {
    console.log('Listening port is ', port);
})
