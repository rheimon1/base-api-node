const express = require('express');
const dotEnv = require('dotenv');
const cors = require('cors')
const databaseConnection = require('./Database/MongoDatabaseConnection');
const routes = require('./Http/routes');

dotEnv.config();

const app = express();

// database connectivity
databaseConnection()

// cors
app.use(cors());

// // request payload middleware
app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// routes
app.use('/api', routes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
})

