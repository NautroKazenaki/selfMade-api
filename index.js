const express = require('express');
const request = require('request-promise');

const app = express();
const PORT = process.env.PORT || 5000;



const generateScraperUrl = (apiKey) => `http://api.scraperapi.com?api_key=${apiKey}&autoparse=true`

//command to parse json
app.use(express.json());

//initial root route
app.get('/', (req, res) => {
    res.send('Welcome to my first api')
});

//get product details
app.get('/products/:productId', async (req, res) => {
    const {productId} = req.params
    //to get api_key for every1 their own
    const {api_key} = req.query

    try {
        //data about specific product
        const response = await request(`${generateScraperUrl(api_key)}&url=https://www.amazon.com/dp/${productId}`);
        // pretty json response
        res.json(JSON.parse(response));
    } catch (error) {
        res.json(error);
    }
});
//get product reviews
app.get('/products/:productId/reviews', async (req, res) => {
    const {productId} = req.params
    const {api_key} = req.query

    try {
        //data about specific product
        const response = await request(`${generateScraperUrl(api_key)}&url=https://www.amazon.com/product-reviews/${productId}`);
        // pretty json response
        res.json(JSON.parse(response));
    } catch (error) {
        res.json(error);
    }
});
//get product offers
app.get('/products/:productId/offers', async (req, res) => {
    const {productId} = req.params
    const {api_key} = req.query

    try {
        //data about specific product
        const response = await request(`${generateScraperUrl(api_key)}&url=https://www.amazon.com/gp/offer-listing/${productId}`);
        // pretty json response
        res.json(JSON.parse(response));
    } catch (error) {
        res.json(error);
    }
});
//get search results
app.get('/search/:searchQuery', async (req, res) => {
    const {searchQuery} = req.params
    const {api_key} = req.query

    try {
        //data about specific product
        const response = await request(`${generateScraperUrl(api_key)}&url=https://www.amazon.com/s?k=${searchQuery}`);
        // pretty json response
        res.json(JSON.parse(response));
    } catch (error) {
        res.json(error);
    }
});

// project start
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));