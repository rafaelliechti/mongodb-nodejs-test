import mongoose from 'mongoose'

const buildingSchema = new mongoose.Schema({
    buildings: [
        {
            name: String,
            description: String,
            count: {
                type: Number,
                default: 0
            },
            income: Number,
            cost: Number
        }
    ]
})

const Building = mongoose.model('Building', buildingSchema)

export default Building
