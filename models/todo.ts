import mongoose from 'mongoose';

interface ITodo {
  name: string;
  id: number;
  title: string;
  description: string;
}

interface todoModelInterface extends mongoose.Model<TodoDoc> {
  build(attr: ITodo): TodoDoc
}

interface TodoDoc extends mongoose.Document {
  title: string;
  description: string;
}

const todoSchema = new mongoose.Schema({ 
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

todoSchema.statics.build = (attr: ITodo) => {
  return new Todo(attr)
}

const Todo = mongoose.model<TodoDoc, todoModelInterface>('Todo', todoSchema)

Todo.build({
  name:'jhon',
  id: 2,
  title: 'some title',
  description: 'some description'
})

export { Todo }




