import mongoose from 'mongoose';

interface ArticleModel {
  name: string;
  id: number;
  title: string;
  description: string;
}

interface articleModelInterface extends mongoose.Model<ArticleDoc> {
  build(attr: ArticleModel ): ArticleDoc
}

interface ArticleDoc extends mongoose.Document {
    name: string;
    id: number;
    title: string;
    description: string;
}

const articleSchema = new mongoose.Schema({ 
   name: {
        type: String,
        required: true
      },
    id: {
        type: Number,
        required: true
      },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String, 
    required: true
  },
  createdTime:
  {
      type:Date,
      default:Date.now
  }
})

articleSchema.statics.build = (attr: ArticleModel ) => {
  return new Article(attr)
}

const Article = mongoose.model<ArticleDoc, articleModelInterface>('Article', articleSchema)

Article.build({
  name:'jhon',
  id: 2,
  title: 'some title',
  description: 'some description'
})

export { Article }




