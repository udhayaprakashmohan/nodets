import { Article } from '../models/article';
import express, { Request, Response } from 'express';


const articleController = {
  all(req: Request, res: Response) {
      const article = Article.find()
      if(article)
      res.status(200).send(article)
    },
  create(req: Request, res: Response) {
    const {name,id, title, description } = req.body;
   
    const article = Article.build({ name,id,title, description })
  
     article.save() 
    return res.json(article)
},
   update(req: Request, res: Response) {
    Article.findByIdAndUpdate({_id :req.body.id},{name : req.body.name}).then((result) =>{
        res.json({
            updated : result
        })
    }).catch(err => {
        console.log("Err--->",err)
    })
   },
   remove(req: Request, res: Response) {
      Article.findByIdAndDelete({_id: req.body.id}).then((result) =>{
          res.json({
              deleted : result
          })
      }).catch(err => {
          console.log("Err---->",err)
      })
   }
}



module.exports = articleController;