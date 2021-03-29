import express from 'express';
import { ArticleController } from '../controller/ArticleController';
import { Request, Response } from 'express';
import {logger} from '../util/logger';

export class ArticleRoute {
    constructor(private articleController: ArticleController) {
    }
    articleRoutes(app: express.Application) {

        app.post('/post', (req: Request, res: Response) => {
           logger.info('post Route calling')
            this.articleController.createArticle(req, res)
        });

        app.get('/get/:id', (req: Request, res: Response) => {
            this.articleController.getArticle(req, res)
        });
        app.get('/getAll', (req: Request, res: Response) => {
            this.articleController.getAllArticle(req, res)
        });
        app.put('/update/:id', (req: Request, res: Response) => {
            this.articleController.updateArticle(req, res)
        });
        app.delete('/delete/:id', (req: Request, res: Response) => {
            this.articleController.deleteArticle(req, res)
        });
    }
}