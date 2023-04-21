const connectToMongo = require('./db')
var session = require('express-session')
const express = require('express')
var cors = require('cors')
const bodyParser = require('body-parser')

connectToMongo();
const app = express()
const port = 5000

app.use(cors({credentials: true, origin: true}))
app.use(express.json())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// app.get('/', (req, res) =>{
//     res.send("Hello1")
// }
// );

//Routes

const MAX_AGE = 1000 * 60 * 60 * 3 // 3hrs
var MemoryStore =session.MemoryStore;
const sessionMiddleware = session({
        secret: 'DUB_NATION',
        name: 'session-id', // cookies name to be put in "key" field in postman
        cookie: {
            maxAge: MAX_AGE, // this is when our cookies will expired and the session will not be valid anymore (user will be log out)
            secure: false, // to turn on just in production
        },
        resave: false,
        saveUninitialized: false,
    })
app.use(sessionMiddleware);

app.use('/api/auth', require('./routes/auth'))
app.use('/api/auth', require('./routes/comment'))


app.listen(port, () => {
    console.log(`backend listening at http://localhost:${port}`)
})

module.exports = app;