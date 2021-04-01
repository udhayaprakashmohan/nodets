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
const articleDao = new ArticleDao();
const articleService = new ArticleService(articleDao);
const articleController = new ArticleController(articleService, new ArticleJwt());
const article = new ArticleRoute(articleController, new ArticleJwt());
        const app: express.Application = express();
        app.use(cors());
        app.use(bodyParser.json());
        new MongoConfig();
        article.articleRoutes(app);
        app.listen(process.env.PORT, () => {
            logger.info(info);
        });



export default app;




