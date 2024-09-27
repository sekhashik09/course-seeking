const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI); // Simply pass the URI without the deprecated options
        console.log('MongoDB connected');
    } catch (error) {
        console.error('Database connection error:', error.message);
        process.exit(1); // Exit process with failure
    }
};

module.exports = connectDB;
