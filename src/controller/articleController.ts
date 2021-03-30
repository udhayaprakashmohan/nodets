import { Request, Response } from 'express';
import { ArticleService } from '../service/ArticleService';
import { ArticleModel } from '../model/ArticleModel';
import { ArticleJwt } from '../jwtToken/jwtTokens';
import { logger } from '../util/logger';
import { CONTROLLER_METHOD } from '../util/const';
import { CONTROLLER_MESSAGE } from '../util/const';


export class ArticleController {

    constructor(private articleService: ArticleService, private jwt: ArticleJwt) {
    }
    async createArticle(req: Request, res: Response): Promise<void> {
        try {
            logger.info(CONTROLLER_METHOD.CONTROLLER_CREATE + CONTROLLER_MESSAGE.INFO_CREATE)
            const article: ArticleModel = await this.articleService.createArticle(req.body);
            const model = { article, token: await this.jwt.jwts() }
            res.status(200).json(model);
        } catch (err) {
            logger.error(CONTROLLER_METHOD.CONTROLLER_CREATE + CONTROLLER_MESSAGE.ERROR_CREATE + err)
            if (err && err._message && err._message === 'validation failed') {
                res.status(400).send(err);
            } else {
                res.status(500).send(err);
            }
        }

    }

    async getArticle(req: Request, res: Response): Promise<void> {
        try {
            logger.info(CONTROLLER_METHOD.CONTROLLER_GET + CONTROLLER_MESSAGE.INFO_GET)
            const article: ArticleModel = await this.articleService.getArticle(req.params.id);
            res.status(200).send(article);
        } catch (err) {
            logger.error(CONTROLLER_METHOD.CONTROLLER_GET + CONTROLLER_MESSAGE.ERROR_GET + err)
            if (err && err._message && err._message === 'validation failed') {
                res.status(400).send(err);
            } else {
                res.status(500).send(err);
            }
        }
    }

    async getAllArticle(req: Request, res: Response): Promise<void> {
        try {
            logger.info(CONTROLLER_METHOD.CONTROLLER_GET_ALL + CONTROLLER_MESSAGE.INFO_GET_ALL)
            const articles: ArticleModel = await this.articleService.getAllArticle();
            res.status(200).send(articles);

        } catch (err) {
            logger.error(CONTROLLER_METHOD.CONTROLLER_GET_ALL + CONTROLLER_MESSAGE.ERROR_GET_ALL + err)
            if (err && err._message && err._message === 'validation failed') {
                res.status(400).send(err);
            } else {
                res.status(500).send(err);
            }
        }
    }

    async updateArticle(req: Request, res: Response): Promise<void> {
        try {
            logger.info(CONTROLLER_METHOD.CONTROLLER_UPDATE + CONTROLLER_MESSAGE.INFO_UPDATE)
            const article: ArticleModel = await this.articleService.updateArticle(req.params.id, req.body);
            res.status(200).send(article);
        } catch (err) {
            logger.error(CONTROLLER_METHOD.CONTROLLER_UPDATE + CONTROLLER_MESSAGE.ERROR_UPDATE + err)
            if (err && err._message && err._message === 'validation failed') {
                res.status(400).send(err);
            } else {
                res.status(500).send(err);
            }
        }
    }


    async deleteArticle(req: Request, res: Response): Promise<void> {
        try {
            logger.info(CONTROLLER_METHOD.CONTROLLER_DELETE + CONTROLLER_MESSAGE.INFO_DELETE)
            const article: ArticleModel = await this.articleService.deleteArticle(req.params.id);
            res.status(204).send({ data: "Deleted" });
        } catch (err) {
            logger.error(CONTROLLER_METHOD.CONTROLLER_DELETE + CONTROLLER_MESSAGE.ERROR_DELETE + err)
            if (err && err._message && err._message === 'validation failed') {
                res.status(400).send(err);
            } else {
                res.status(500).send(err);
            }
        }
    }

}





