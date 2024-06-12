const mongoose = require('mongoose');

async function connectDb() {
    try{
        await mongoose.connect("mongodb://localhost/Chat");
        console.log("Database True")
    } catch(e) {
        console.log("Database False")
    }
}

module.exports = {
    connectDb
}