
const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://Swapnil:Swapnil@1212@cluster0.eriywms.mongodb.net/', {
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
    // useFindAndModify: false,
    // useCreateIndex: true
})

const db = mongoose.connection
db.once('open',()=>{
    console.log("db connected")
})
module.exports = db;


