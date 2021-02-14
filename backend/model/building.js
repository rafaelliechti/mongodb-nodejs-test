import mongoose from 'mongoose'

const buildingSchema = mongoose.Schema({
    name: String,
    description: String,
    count: {
        type: Number,
        default: 0
    },
    income: Number,
    cost: Number
})

const Building = mongoose.model('Building', buildingSchema)

export default Building
