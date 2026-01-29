const mongoose = require('mongoose')

const demoSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
        required: true
    }
}, {
    timestamps: true
})



module.exports = mongoose.model('Demo', demoSchema)