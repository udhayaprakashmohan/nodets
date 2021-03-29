import { Request, Response } from 'express';
import { ArticleService } from '../service/ArticleService';
import { ArticleModel } from '../model/ArticleModel';
//import * as jwt from "jsonwebtoken"
import { ArticleJwt } from '../jwtToken/jwtTokens';
import { logger } from '../util/logger';


export class ArticleController {
    jwt = new ArticleJwt();
    constructor(private articleService: ArticleService) {
    }
    async createArticle(req: Request, res: Response): Promise<void> {

        const article: ArticleModel = await this.articleService.createArticle(req.body);
        logger.info('post controller', article)
        const model = { article, token: await this.jwt.jwts() }
        res.status(200).json(model);
    }

    async getArticle(req: Request, res: Response): Promise<void> {
        try {
            const article: ArticleModel = await this.articleService.getArticle(req.params.id);
            res.status(200).send(article);
        } catch (err) {
            if (err && err._message && err._message === 'validation failed') {
                res.status(400).send(err);
            } else {
                res.status(500).send(err);
            }
        }
    }

    async getAllArticle(req: Request, res: Response): Promise<void> {
        try {

            const article: ArticleModel = await this.articleService.getAllArticle();
            console.log("controller", article)
            res.status(200).send(article);

        } catch (err) {

            if (err && err._message && err._message === 'validation failed') {
                res.status(400).send(err);
            } else {
                res.status(500).send(err);
            }
        }
    }

    async updateArticle(req: Request, res: Response): Promise<void> {
        try {
            const article: ArticleModel = await this.articleService.updateArticle(req.params.id, req.body);
            res.status(200).send(article);
        } catch (err) {

            if (err && err._message && err._message === 'validation failed') {
                res.status(400).send(err);
            } else {
                res.status(500).send(err);
            }
        }
    }


    async deleteArticle(req: Request, res: Response): Promise<void> {
        try {
            const article: ArticleModel = await this.articleService.deleteArticle(req.params.id);
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





