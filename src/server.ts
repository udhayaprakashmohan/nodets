import cors from 'cors';
import express from 'express';
import { MongoConfig } from './config/MongoConfig'
import { ArticleRoute } from './routes/ArticleRoute';
import bodyParser from 'body-parser';
import { ArticleController } from './controller/ArticleController';
import { ArticleService } from './service/ArticleService';
import { ArticleDao } from './dao/ArticleDao';
//import { startSession } from 'mongoose';


export class Server {
    constructor(private article: ArticleRoute) {
        this.start();
    }
    start(): void {

        const app: express.Application = express();
        app.use(cors());
        app.use(bodyParser.json());
        new MongoConfig();
        app.get('/', (req, res) => {
            res.send({ status: "Success" });
        });
        this.article.articleRoutes(app);
        app.listen(3000, () => {
            console.log('App is listening on port 3000!');
        });
    }
}

new Server(new ArticleRoute(new ArticleController(new ArticleService(new ArticleDao()))));