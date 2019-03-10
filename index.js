import express from 'express'
import morgan from 'morgan'
import helmet from 'helmet'
import cookieParser from 'cookie-parser'
import bodyParser from 'body-parser'
const app = express();
// function handleListening(){
//   console.log("I'm Listening");
// }
app.listen(3000)
//
// respond with "hello world" when a GET request is made to the homepage
const handleProfile =(req, res) => res.send("you're on profile")
const handleHome = (req, res) => res.send("you're home")

app.use(cookieParser())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use(helmet())
app.use(morgan("dev"));

app.get('/',handleHome)

app.get('/profile', handleProfile)
