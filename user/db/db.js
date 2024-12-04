const mongoose = require('mongoose');

const dotenv = require('dotenv');
dotenv.config();
function connect() {
    mongoose.connect(process.env.MONGO_URL).then(() => {
        console.log('User service connected to MongoDB');
    }).catch(err => {
        console.log(err);
    });
}


module.exports = connect;