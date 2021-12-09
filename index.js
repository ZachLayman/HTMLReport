const express = require('express')
const app = express();
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server is running on ${PORT}`));
app.use(express.static('public'));