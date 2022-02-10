const mongoose = require('mongoose')
const Msg = require('./models/messages')
const User = require('./models/messages')
var bodyParser = require('body-parser');


const app = require('express')()
const http = require('http').createServer(app)
const cors = require('cors')
const PORT = 4000;

app.use(bodyParser.urlencoded({ extended: false }));

const io = require('socket.io')(http)

mongoose.connect('mongodb+srv://labexercise:Unnikuttan860@cluster0.bm2bw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(console.log('Database COnnected'));

app.use(cors())
let users = []

// app.get("/loggedIn.html", (req, res) => {
//     res.sendFile(__dirname + '/loggedIn.html')
// })
app.get("/", (req,res)=> {
    res.sendFile(__dirname + '/index.html')
})
app.get("/signup.html", (req, res) => {
    res.sendFile(__dirname + '/signup.html')
})
app.get("/chat.html", (req, res) => {
    res.sendFile(__dirname + '/chat.html')
})

app.post('/signup.html',  async(req,res)=>{
    const usermessage = new User({
        userName: req.body.user,
        firstName:req.body.first_name,
        lastName:req.body.last_name,
        password:req.body.password  
    })
    usermessage.save().then(()=>{
        console.log("Success")
    })
})

io.on('connection', (socket) => {
    console.log('Socket Connected')
    socket.emit('welcome', 'welcome to Socket Programming:' + socket.id)

    socket.on('newUser', (name) => {
        console.log(name)
        //users.push(socket.id)
        users.push(name)
        console.log(users)
    })

    socket.on('joinroom', (room) => {
        socket.join(room)
    })
    socket.on('payload', (data)=>{
        console.log(data)
    })

    socket.on('message', (data) => {
        console.log(data.value)
        console.log(data.roomName)
        socket.to(data.roomName).emit('newMessage', data.value)
        const message = new Msg({ msg: data.value })
            message.save().then(() => {
                console.log('Success')
        })
    })

    socket.on('disconnect', () => {
        console.log(`${socket.id} disconnected`)
    })
})

http.listen(PORT, () => {
    console.log(`server Started at ${PORT}`)
})