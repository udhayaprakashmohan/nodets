import { Request, Response } from 'express';
import { ArticleService } from '../service/ArticleService';
import { ArticleModel } from '../model/ArticleModel';

let articleService: ArticleService;

export class ArticleController {
    constructor() {
        articleService = new ArticleService();
    }
    async createArticle(req: Request, res: Response) {

        const article: ArticleModel = await articleService.createArticle(req.body);
        res.status(200).send(article);
    }

    async getArticle(req: Request, res: Response) {
        try {
            const article: ArticleModel = await articleService.getArticle(req.params.id);
            res.status(200).send(article);
        } catch (err) {

            if (err && err._message && err._message === 'validation failed') {
                res.status(400).send(err);
            } else {
                res.status(500).send(err);
            }
        }
    }

    async updateArticle(req: Request, res: Response) {
        try {
            const article: ArticleModel = await articleService.updateArticle(req.params.id, req.body);
            res.status(200).send(article);
        } catch (err) {

            if (err && err._message && err._message === 'validation failed') {
                res.status(400).send(err);
            } else {
                res.status(500).send(err);
            }
        }
    }


    async deleteArticle(req: Request, res: Response) {
        try {
            const article: ArticleModel = await articleService.deleteArticle(req.params.id);
            res.status(204).send({ data: "Deleted" });
        } catch (err) {

            if (err && err._message && err._message === 'validation failed') {
                res.status(400).send(err);
            } else {
                res.status(500).send(err);
            }
        }
    }
}





