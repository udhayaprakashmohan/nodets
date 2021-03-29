import express from 'express';
import { ArticleController } from '../controller/ArticleController';
import { Request, Response } from 'express';
import { logger } from '../util/logger';
import { ArticleJwt } from '../jwtToken/jwtTokens';

export class ArticleRoute {
    jwt = new ArticleJwt
    constructor(private articleController: ArticleController) {
    }
    articleRoutes(app: express.Application) {

        app.post('/post', (req: Request, res: Response) => {
            logger.info('post Route calling')
            this.articleController.createArticle(req, res)
        });

        app.get('/get/:id', this.jwt.authenticateToken, (req: Request, res: Response) => {
            this.articleController.getArticle(req, res)
        });
        app.get('/getAll', this.jwt.authenticateToken, (req: Request, res: Response) => {
            this.articleController.getAllArticle(req, res)
        });
        app.put('/update/:id', this.jwt.authenticateToken, (req: Request, res: Response) => {
            this.articleController.updateArticle(req, res)
        });
        app.delete('/delete/:id', this.jwt.authenticateToken, (req: Request, res: Response) => {
            this.articleController.deleteArticle(req, res)
        });
    }
}