const express = require('express')
const app = express();

if (process.env.NODE_ENV === 'production') {
	app.use(express.static('public/html'));
}

app.get('*', (request, response) => {
	response.sendFile(path.join(__dirname, 'public/html', 'index.html'));
});

const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`Server is running on ${PORT}`));
app.use(express.static('public'));
