import express from 'express';
import { ArticleController } from '../controller/articleController';
import { Request, Response } from 'express';
import { logger } from '../util/logger';
import { ArticleJwt } from '../jwtToken/jwtTokens';
import { route_info} from '../util/const';

export class ArticleRoute {

    constructor(private articleController: ArticleController, private jwt: ArticleJwt) {
    }
    articleRoutes(app: express.Application) {
           console.log('route calling')
        app.post('/article', (req: Request, res: Response) => {
            logger.info(route_info)
            this.articleController.createArticle(req, res)
        });
        app.get('/article/:id', this.jwt.authenticateToken, (req: Request, res: Response) => {
            this.articleController.getArticle(req, res)
        });
        app.get('/article', this.jwt.authenticateToken, (req: Request, res: Response) => {
            this.articleController.getAllArticle(req, res)
        });
        app.put('/article/:id', this.jwt.authenticateToken, (req: Request, res: Response) => {
            this.articleController.updateArticle(req, res)
        });
        app.delete('/article/:id', this.jwt.authenticateToken, (req: Request, res: Response) => {
            this.articleController.deleteArticle(req, res)
        });
    }
}