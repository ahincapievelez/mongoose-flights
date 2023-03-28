const mongoose = require('mongoose')

const Schema = mongoose.Schema

const currentDate = new Date()
currentDate.setFullYear(currentDate.getFullYear() + 1)

const flightSchema = new Schema({
   airline: { 
        type: String,
        enum: ['American', 'Southwest', 'United'], 
        required: true 
    },
   flightNo: { 
        type: Number, 
        min: 10,
        max: 9999
    },
   departs: { 
        type: Date,
        default: currentDate
    },
    airport: {
        type: String,
        enum: ['AUS', 'DAL', 'LAX', 'SAN', 'SEA'],
        default: 'SAN'
    },
    destinations: [{
        type: mongoose.Types.ObjectId,
        ref: 'Destination'
    }]
}, { timestamps: true })

const Flight = mongoose.model('flights', flightSchema)

module.exports = Flight