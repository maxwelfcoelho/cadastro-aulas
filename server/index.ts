import * as dotenv from 'dotenv'

import express from 'express'
import cors from 'cors'
import * as lecture from './controllers/lecture'
import * as user from './controllers/user'
dotenv.config()

const app = express()
app.use(express.json())
app.use(cors())
const PORT = 3000

app.use(express.static('www'))

app.post('/login', user.login)

app.get('/lectures', lecture.list)
app.post('/lecture', lecture.create)
app.delete('/lecture/:id', lecture.remove)

app.listen(PORT, () => {
  console.log(`⚡️[server]: API rodando em http://localhost:${PORT}`)
})
