import cors from 'cors';
import express from 'express';
import { MongoConfig } from './config/MongoConfig'
import { ArticleRoute } from './routes/ArticleRoute';
import bodyParser from 'body-parser';

const app: express.Application = express();
const article = new ArticleRoute();
app.use(cors());
app.use(bodyParser.json());
new MongoConfig();
app.get('/', (req, res) => {
    res.send({ status: "Success" });
});
article.articleRoutes(app);
app.listen(3000, () => {
    console.log('App is listening on port 3000!');
});