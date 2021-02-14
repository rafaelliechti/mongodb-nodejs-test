import mongoose from 'mongoose'

const achievementSchema = new mongoose.Schema({
    achievements: [
        {
            name: String,
            description: String,
            type: String,
            requirement: Number,
            buildingId: String,
            awarded: {
                type: Boolean,
                default: false
            }
        }
    ]
})

const Achievement = mongoose.model('Achievement', achievementSchema)

export default Achievement
