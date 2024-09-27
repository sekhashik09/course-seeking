// server.js
const express = require('express');
const http = require('http');
const dotenv = require('dotenv');
const cors = require('cors');
const bodyParser = require('body-parser');
const router = require('./routes/api-route');
require('./config/database')(); // Ensure DB connection is successful

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/api', router);

const server = http.createServer(app);

server.listen(PORT, (err) => {
    if (err) {
        console.error(`Error starting server: ${err.message}`);
    } else {
        console.log(`Server running on port ${PORT}`);
    }
});
