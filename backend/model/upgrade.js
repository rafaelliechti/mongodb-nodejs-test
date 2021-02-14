import mongoose from 'mongoose'

const upgradeSchema = mongoose.Schema({
    name: String,
    description: String,
    type: String,
    cost: Number,
    buildingId: String,
    requirement: Number,
    bonus: Number,
    purchased: {
        type: Boolean,
        default: false
    }
})

const Upgrade = mongoose.model('Upgrade', upgradeSchema)

export default Upgrade
