const mongoose = require('mongoose');
require('dotenv').config();
const url = process.env.MONGO_URL;

const connect = async () => {
    try {
        await mongoose.connect(url);
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('MongoDB connection failed: ', error);
    }
}

module.exports = { connect };