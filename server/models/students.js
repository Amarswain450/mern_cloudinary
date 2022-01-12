const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    profile: {
        type: String,
        default: 'default.jpg'
    }
}, {timestamps: true});

const Students = mongoose.model('Student', studentSchema);

module.exports = Students;