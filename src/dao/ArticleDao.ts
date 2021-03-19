import mongoose from 'mongoose';
import { articleSchema, ArticleModel } from '../model/ArticleModel';

const ArticleModel = mongoose.model('article', articleSchema);
export class ArticleDao {
    async save(body: ArticleModel) {
        const article = new ArticleModel(body);
        const articleData = article.save();
        console.log('STUDENT---->>>', article);
        return articleData;
        // return await article.save();

    }
    async getArticle(id: string) {
          const abb= await ArticleModel.findById(id);  
    }
}