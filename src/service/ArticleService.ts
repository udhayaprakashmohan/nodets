import { ArticleDao } from '../dao/ArticleDao';
import { ArticleModel } from '../model/ArticleModel';

let articleDao: ArticleDao;
export class ArticleService {
    constructor() {
        articleDao = new ArticleDao();
    }
    async createArticle(body: ArticleModel) {
        return await articleDao.save(body);
    }
    async getArticle(id:string) {
        console.log("id:",id)
        return await articleDao.getArticle(id);
    }

}