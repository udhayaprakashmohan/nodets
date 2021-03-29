import cors from 'cors';
import express from 'express';
import { MongoConfig } from './config/MongoConfig'
import { ArticleRoute } from './routes/ArticleRoute';
import bodyParser from 'body-parser';
import { ArticleController } from './controller/ArticleController';
import { ArticleService } from './service/ArticleService';
import { ArticleDao } from './dao/ArticleDao';
import { logger } from './util/logger';

import * as dotenv from 'dotenv';



export class Server {
    constructor(private article: ArticleRoute) {
        this.start();
    }
    start(): void {

        const app: express.Application = express();
        dotenv.config();
        app.use(cors());
        app.use(bodyParser.json());
        new MongoConfig();
        app.get('/', (req, res) => {
            res.send({ status: "Success" });
        });
        this.article.articleRoutes(app);
        app.listen(3000, () => {
            logger.info('App is listening on port 3000!');
        });
    }
}


// const articleDao = new ArticleDao();
// const articleService = new ArticleService(articleDao,new Response());
// const articleController = new ArticleController(articleService);
// const server = new Server(article)


new Server(new ArticleRoute(new ArticleController(new ArticleService(new ArticleDao()))));


