import express, { Request, Response } from 'express'
import { Todo } from '../../models/todo'

const router = express.Router()

router.get('/api/get', async (req: Request, res: Response) => {
  const todo = await Todo.find()
  if(todo)
    res.status(200).send(todo)
})

router.put('/api/put', async (req:Request, res: Response) =>{
    //const id = req.body.id
    await Todo.findOneAndUpdate({_id :req.body.id},{name : req.body.name}).then((result) =>{
        res.json({
            updated : result
        })
    }).catch(err=>{
        console.log("Err--->",err)
    })


})
router.delete('/api/delete', async (req:Request, res: Response) =>{
    //const id = req.body.id
    await Todo.findByIdAndDelete({_id: req.body.id}).then((result) =>{
        res.json({
            updated : result
        })
    }).catch(err=>{
        console.log("Err--->",err)
    })


})






router.post('/api/post', async (req: Request, res: Response) => {
  const {name,id, title, description } = req.body;

  const todo = Todo.build({ name,id,title, description })

  await todo.save()

  return res.json(todo)
})

export { router as todoRouter }