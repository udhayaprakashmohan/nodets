import express from 'express';
import { ArticleController } from '../controller/ArticleController';

let articleController: ArticleController;

export class ArticleRoute {
    constructor() {
        articleController = new ArticleController();
    }
    articleRoutes(app: express.Application) {
        app.post('/post', articleController.createArticle);
        app.get('/get/:id', articleController.getArticle);
    }
}