const express = require('express')
const app = express()
const PORT = 4000
const mongoose = require('mongoose')
const router = require('./router/contactrouter')
const bodyParser = require('body-parser')
const cors = require('cors')

app.use(express.json())
app.use(bodyParser.json())
app.use(cors({
    credentials:true
}))
app.use(express.urlencoded({extended: true}));
app.use('/contact',router)

app.get('/',(req,res)=>{
    res.send("This is the home page")
})

const DB = "mongodb+srv://fk28:farhankhan123@cluster0.fq2ibrs.mongodb.net/"

mongoose.connect(DB , {
    useNewUrlParser:true,
    useUnifiedTopology:true  
}).then(()=>{
    console.log("connected successful")
}).catch(()=>{
    console.log("connection unsuccessful")
})

app.listen(PORT,()=>{
    console.log(`listening to port ${PORT}`)
})