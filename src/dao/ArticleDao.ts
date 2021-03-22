import mongoose from 'mongoose';
import { articleSchema, ArticleModel } from '../model/ArticleModel';

const ArticleModel = mongoose.model('article', articleSchema);
export class ArticleDao {
    async save(body: ArticleModel) {
        const article = new ArticleModel(body);
        const articleData = article.save();
        return articleData;
    }
    async getById(id: String) {
        const article = ArticleModel.findById({ _id: id });
        return await article.findById();
    }
    async updateArticle(id: String, data: any) {
        await ArticleModel.findOneAndUpdate(id, data);
        const article = ArticleModel.findById({ _id: id });
        return await article;
    }

    async findByIdAndDelete(id: String) {
        const article = ArticleModel.findOneAndDelete({ _id: id });
        return await article;
    }

}