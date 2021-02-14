import {getAchievementById, getAchievements, postAchievement} from "../controller/achievement.js";
import express from 'express'

const router = express.Router()
router.route('/').get(getAchievements)
router.route('/:id').get(getAchievementById)

router.route('/').post(postAchievement)

export default router
