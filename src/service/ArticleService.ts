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
       async getArticle(id: String) {
        return await articleDao.getById(id);
    }
    
    async updateArticle(id: String, data:ArticleModel) {
        let data1 = await articleDao.updateArticle(id, data);
        return data1;
    }
    async deleteArticle(id: String) {
        return await articleDao.findByIdAndDelete(id);
}

}