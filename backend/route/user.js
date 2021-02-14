import {getUserById, getUsers, postUser} from "../controller/user.js";
import express from 'express'

const router = express.Router()
router.route('/').get(getUsers)
router.route('/:id').get(getUserById)

router.route('/').post(postUser)

export default router
