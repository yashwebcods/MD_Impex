const mongoose = require('mongoose')

const MONGODB_URI = process.env.MONGODB_URI 

if (!MONGODB_URI) {
    throw new Error('Missing MONGODB_URI. Create a .env file with MONGODB_URI=... or set it in the environment.')
}

mongoose.connect(MONGODB_URI, {
    serverSelectionTimeoutMS: 10000,
})

const db = mongoose.connection
db.on('error', (err) => {
    console.log('Error connecting to db:', err)
})
db.once('open', () => {
    console.log('Connected to db')
})

module.exports = db