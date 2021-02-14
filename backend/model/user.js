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
    buildings: {
        type: Array,
        required: false,
        default: []
    },
    upgrades: {
        type: Array,
        required: false,
        default: []
    },
    achievements: {
        type: Array,
        required: false,
        default: []
    }
}, {
    timestamps: true
})

const User = mongoose.model('User', userSchema)

export default User
