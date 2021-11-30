const mongoose = require('mongoose');

const ConnectDB = () => {
    try {
        mongoose
        .connect(process.env.MONGO_URI)
        .then(() => console.log('DB connection successfully'))
    } catch (err) {
        console.log(err);
    }
}

module.exports = ConnectDB;