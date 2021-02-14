import {getAchievementById, getAchievements} from "../controller/achievement.js";
import express from 'express'

const router = express.Router()
router.route('/').get(getAchievements)
router.route('/:id').get(getAchievementById)
export default router
