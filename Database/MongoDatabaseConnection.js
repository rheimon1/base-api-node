const mongoose = require('mongoose');

module.exports = async () => {
    const {
        MONGO_USERNAME,
        MONGO_PASSWORD,
        MONGO_HOSTNAME,
        MONGO_PORT,
        MONGO_DB
    } = process.env;

    const urlString = `mongodb://${MONGO_HOSTNAME}/${MONGO_DB}`;
    const options = {
        useNewUrlParser: true,
        useUnifiedTopology: true
    };

    try {
        await mongoose.connect(urlString, options);
        console.log("Connected to database!");
    } catch (error) {
        console.log(`Database Connectivity Error: ${error}`);
        throw new Error(error);
    }
}