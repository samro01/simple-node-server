const express = require('express');
const { MongoClient, ServerApiVersion } = require('mongodb');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send('Simple node server running');
});

app.use(cors());
app.use(express.json());

const users = [
    { id: 1, name: 'Sabana', email: 'sabana@gmail.com' },
    { id: 2, name: 'Sabnnoor', email: 'sabnnoor@gmail.com' },
    { id: 3, name: 'Sabila', email: 'sabila@gmail.com' }
]
// rTRRKSICkj1wyC83
// dBuser1


const uri = "mongodb+srv://dBuser1:rTRRKSICkj1wyC83@cluster0.vejix2k.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

async function run(){
    try{
        const userCollection = client.db('simpleNode').collection('users');
        const user = {name:'mahiya mahi', email: 'mahi@gmail.com'}
        // const result = await userCollection.insertOne(user);
        // console.log(result);
        app.post('/users',async (req, res) => {

            const user = req.body;
            const result = await userCollection.insertOne(user);
            console.log(result);
            user.id = result.insertedId;
            res.send(user);
        })
    }
    finally{

    }
}

run().catch(err =>consoly.log(err))


app.get('/users', (req, res) => {
    res.send(users);
});


// app.post('/users', (req, res) => {

//     const user = req.body;
//     user.id = users.length + 1;
//     users.push(user);
//     console.log(user);
//     res.send(user);
// })


app.listen(port, () => {
    console.log(`simple node server running on port ${port}`);
});