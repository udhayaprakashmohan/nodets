import cors from 'cors';
import express from 'express';
import { MongoConfig } from './config/mongoConfig'
import { ArticleRoute } from './routes/articleRoute';
import bodyParser from 'body-parser';
import { ArticleController } from './controller/articleController';
import { ArticleService } from './service/ArticleService';
import { ArticleDao } from './dao/articleDao';
import { logger } from './util/logger';
import { ArticleJwt } from './jwtToken/jwtTokens';
import { info } from './util/const';
import * as dotenv from 'dotenv';

dotenv.config({ path: __dirname + '/.env' });

export class Server {
    constructor(private article: ArticleRoute) {
        this.start();
    }
    start(): void {
        const app: express.Application = express();
        app.use(cors());
        app.use(bodyParser.json());
        new MongoConfig();
        this.article.articleRoutes(app);
        app.listen(process.env.PORT, () => {
            logger.info(info);
        });
    }
}

const articleDao = new ArticleDao();
const articleService = new ArticleService(articleDao);
const articleController = new ArticleController(articleService, new ArticleJwt());
const article = new ArticleRoute(articleController, new ArticleJwt());
new Server(article);




