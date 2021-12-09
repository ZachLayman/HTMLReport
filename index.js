const express = require('express')
const app = express();


const PORT = process.env.PORT || 3000

// Static Files
app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public/css'))
app.use('/imgs', express.static(__dirname + 'public/imgs'))
app.use('/js', express.static(__dirname + 'public/js'))
app.use('/html', express.static(__dirname + 'public/html'))

app.get("/public", (req, res) => {
    res.send("hello world")
})
app.listen(PORT, () => console.log(`Server is running on ${PORT}`));
app.use(express.static('public'));
