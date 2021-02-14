import React, {useEffect, useState} from 'react'
import axios from 'axios'

const App = () => {
  const [users, setUsers] = useState([])
  const getData = async() => {
    const res = await axios.get('/api/users')
    setUsers(res.data)
  }

  useEffect(() => {
    getData()
  }, [])

  return (
      <div>
        {users.map(user =>
            <div>
              <h1 key={user._id}>Name : {user.name}</h1>
              <h2 key={user._id}>E-Mail : {user.email}</h2>
              <h2 key={user._id}>Score : {user.saveGame.score}</h2>
              <h2 key={user._id}>Total score : {user.saveGame.totalScore}</h2>
              <h2 key={user._id}>Total clicks : {user.saveGame.totalClicks}</h2>
              <h2 key={user._id}>Click value : {user.saveGame.clickValue}</h2>
              <h2 key={user._id}>Version : {user.saveGame.version}</h2>
              {user.saveGame.buildings.map(building =>
                  <div>
                    <h3 key={building._id}>Name : {building.name}</h3>
                  </div>
              )}
              {user.saveGame.upgrades.map(upgrade =>
                  <div>
                    <h3 key={upgrade._id}>Name : {upgrade.name}</h3>
                  </div>
              )}
              {user.saveGame.achievements.map(achievement =>
                  <div>
                    <h3 key={achievement._id}>Name : {achievement.name}</h3>
                  </div>
              )}
            </div>
        )}
      </div>
  )
}

export default App
