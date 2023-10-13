const express = require('express')
const cors = require('cors')
const path = require('path')
// const bodyParser = require('body-parser')
require("dotenv").config()


const app = express()
app.use(express.urlencoded({ 
    extended:true
}))
const port = process.env.PORT || 5000
// const uri = process.env.URI

// mongoose.connect(uri)
// const connection = mongoose.connection
// connection.once('open', ()=>{
//     console.log("DB connected")
// })

app.use(cors())
app.use(express.json())

app.get("/", (req, res)=>{
    console.log("index path")
    res.sendFile(path.join(__dirname+"/index.html"))
})
app.get("/about", (req, res)=>{
    res.send("about")
})
app.post("/check", (req, res)=>{
    console.log("HI")
    let name = req.body.name
    console.log(name)
    res.send("Data submitted")
})

app.listen(port, ()=>{
    console.log(`Server started ${port}`)
})