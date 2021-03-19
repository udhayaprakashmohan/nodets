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
            const article = await articleService.getArticle(req.params.id);
            console.log("ArticleModel",article)
            res.status(200).send(article)
           
           
          }
    }





