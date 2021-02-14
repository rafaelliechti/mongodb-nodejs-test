import User from '../model/user.js';
import asyncHandler from 'express-async-handler'

export const getUsers = asyncHandler(async (req, res) => {
    const users = await User.find({})
    res.json(users)
})

export const getUserById = asyncHandler(async (req, res) => {
    const user = await User.findById(req.params.id)

    if (user) {
        res.json(user)
    } else {
        res.status(404).json({message: "user not found"})
        res.status(404)
        throw new Error('user not found')
    }
})

export const postUser = asyncHandler(async (req, res) => {
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        isAdmin: req.body.isAdmin,
        saveGame: req.body.saveGame,
    })
    await user.save()
    res.json(user)
})
