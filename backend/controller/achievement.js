import Achievement from '../model/achievement.js';
import asyncHandler from 'express-async-handler'

export const getAchievements = asyncHandler(async (req, res) => {
    const achievements = await Achievement.find({})
    res.json(achievements)
})

export const getAchievementById = asyncHandler(async (req, res) => {
    const achievement = await Achievement.findById(req.params.id)

    if (achievement) {
        res.json(achievement)
    } else {
        res.status(404).json({message: "achievement not found"})
        res.status(404)
        throw new Error('achievement not found')
    }
})

export const postAchievement = asyncHandler(async (req, res) => {
    const achievement = new Achievement({
        name: req.body.name,
        description: req.body.description,
        type: req.body.type,
        requirement: req.body.requirement,
        buildingId: req.body.buildingId,
        awarded: req.body.awarded,
    })
    await achievement.save()
    res.json(achievement)
})
