const express = require('express');
const app = express();
// function handleListening(){
//   console.log("I'm Listening");
// }
app.listen(3000)
//
// respond with "hello world" when a GET request is made to the homepage
function handleProfile(req, res){
  res.send("you're on profile")
}

app.get('/', function (req, res) {
  res.send('hello world')
})

app.get('/profile', handleProfile)
