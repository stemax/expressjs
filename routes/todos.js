import {Router} from "express"
import {getAll, create, remove} from '../controllers/todos.js'
const  router = Router()

router.get('/api/todos', getAll)

router.post('/api/todo', create)

router.delete('/api/todo/:id', remove)

export default router
