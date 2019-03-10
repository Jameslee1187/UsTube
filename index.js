import express from 'express'
const app = express();
// function handleListening(){
//   console.log("I'm Listening");
// }
app.listen(3000)
//
// respond with "hello world" when a GET request is made to the homepage
const handleProfile =(req, res) => res.send("you're on profile")
const handleHome = (req, res) => res.send("you're home")
const betweenHome =(req,res,next)=>{
  console.log("the space between");
  next()
}


app.get('/', betweenHome, handleHome)

app.get('/profile', handleProfile)
