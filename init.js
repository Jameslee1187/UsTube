import app from './App'

const PORT = 3000

const handleListening = () => {
  console.log(`Listening on ${PORT}`);
}

app.listen(PORT, handleListening )
