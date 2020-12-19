const mongoose = require('mongoose');

module.exports = mongoose.Schema({
        name: String,
        price: Number,
        brand: String
    }, {
        timestamps: true        
    }
);
