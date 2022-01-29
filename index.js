const express = require('express');
const request = require('request-promise');

const app = express();
const PORT = process.env.PORT || 5000;

const apiKey = '26f92a4ed9d0e7d23705e9c2c3bf0ecf'
const baseUrl = `http://api.scraperapi.com?api_key=${apiKey}&autoparse=true`

//command to parse json
app.use(express.json());

//initial root route
app.get('/', (req, res) => {
    res.send('Welcome to my first api')
});

//get product details
app.get('/products/:productId', async (req, res) => {
    const {productId} = req.params

    try {
        //data about specific product
        const response = await request(`${baseUrl}&url=https://www.amazon.com/dp/${productId}`);

        res.json(response);
    } catch (error) {
        res.json(error);
    }
});

// project start
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));