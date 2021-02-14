import mongoose from 'mongoose'

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique:true
    },
    password: {
        type: String,
        required: true
    },
    isAdmin: {
        type: Boolean,
        required: true,
        default: false
    },
    saveGame: {
        score: Number,
        totalScore: Number,
        totalClicks: Number,
        clickValue: Number,
        version: String,
        buildings: Array,
        upgrades: Array,
        achievements: Array,
    }
}, {
    timestamps: true
})

const User = mongoose.model('User', userSchema)

export default User
