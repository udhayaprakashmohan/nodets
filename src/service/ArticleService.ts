import { ArticleDao } from '../dao/ArticleDao';
import { ArticleModel } from '../model/ArticleModel';

let articleDao: ArticleDao;
export class ArticleService {
    constructor() {
        articleDao = new ArticleDao();
    }
    async createArticle(body: ArticleModel): Promise<ArticleModel> {

        return await articleDao.save(body);
    }
    async getArticle(id: String): Promise<ArticleModel> {
        return await articleDao.getById(id);
    }

    async updateArticle(id: String, data: ArticleModel): Promise<ArticleModel> {
        let dataArticle = await articleDao.updateArticle(id, data);
        return dataArticle;
    }
    async deleteArticle(id: String) {
        return await articleDao.findByIdAndDelete(id);
    }

}