const express = require('express');
const request = require('request-promise');

const app = express();
const PORT = process.env.PORT || 5000;

//command to parse json
app.use(express.json());

//initial root route
app.get('/', (req, res) => {
    res.send('Welcome to my first api')
});
// project start
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));