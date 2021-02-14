import connectDB from './config/db.js'
import userRoutes from './route/user.js'
import buildingRoutes from './route/building.js'
import upgradeRoutes from './route/upgrade.js'
import achievementRoutes from './route/achievement.js'
import express from 'express'
import dotenv from 'dotenv'
import User from './model/user.js';

dotenv.config()
connectDB(process.env.DATABASE)

const app = express()

//Creating APIs
app.use('/api/users', userRoutes)
app.use('/api/buildings', buildingRoutes)
app.use('/api/upgrades', upgradeRoutes)
app.use('/api/achievements', achievementRoutes)

app.post('/api/users', function (req, res, next) {
    console.log(req)
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        isAdmin: req.body.isAdmin
    })
    user.save(function (err, user) {
        if (err) {
            return next(err)
        }
        res.json(201, user)
    })
})

const PORT = process.env.PORT || 5000

//Express js listen method to run project on http://localhost:5000
app.listen(PORT, console.log(`App is running in ${process.env.NODE_ENV} mode on port ${PORT}`))
