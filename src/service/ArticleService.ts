import { ArticleDao } from '../dao/ArticleDao';
import { ArticleModel } from '../model/ArticleModel';


export class ArticleService {
    constructor(private articleDao: ArticleDao) {
    }
    async createArticle(body: ArticleModel): Promise<ArticleModel> {

        return await this.articleDao.save(body);
    }
    async getArticle(id: String): Promise<ArticleModel> {
        return await this.articleDao.getById(id);
    }

    async getAllArticle(): Promise<ArticleModel> {
        return await this.articleDao.getAllArticle();
    }

    async updateArticle(id: String, data: ArticleModel): Promise<ArticleModel> {
        let dataArticle = await this.articleDao.updateArticle(id, data);
        return dataArticle;
    }
    async deleteArticle(id: String) {
        return await this.articleDao.findByIdAndDelete(id);
    }

}