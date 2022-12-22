// ========
const path = require('path');
const express = require('express');
const app = express(); 
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
dotenv.config();
const port = 8081
const axios = require('axios')

// ========
app.use(cors());
app.use(bodyParser().json());
app.use(express.static('dist'))

// ========
const apiKey = process.env.apiKey
const apiURL = process.env.apiURL
const mockAPIResponse = require('./mockAPI.js')

// ========
app.get('/', function (req, res) {
    // res.sendFile('dist/index.html')
    // res.sendFile(path.resolve('dist/index.html'))
    res.sendFile(path.resolve('src/client/views/index.html'))
})

// ========
app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})

// ========
// a route that handling post request for new URL that coming from the frontend
app.post('/analyse', async(req, res) =>{
    const url = req.body.url;
    const baseUrl = `${apiURL}?key=${apiKey}&url=${url}&lang=en`
    const response = await axios.post(baseUrl);
    const result = response.data;
    res.send(result);
})

// ========
// designates what port the app will listen to for incoming requests
app.listen(PORT, (error) => {
    if (error) throw new Error(error)
    console.log(`Server listening on port ${port}!`)
})

// ========
// Export app to be used in unit testing
module.exports = {
    app
}