import express from 'express';
import mongoose from 'mongoose'
import { json } from 'body-parser';
import { articleRouter } from './routes/article.routes';

const app = express()
app.use(json())
app.use(articleRouter)

mongoose.connect('mongodb+srv://udhayaprakash:udhayaprakash@devconnector.dxbj6.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
 {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
}, () => {
  console.log('connected to database')
})

app.listen(7000, () => {
  console.log('server is listening on port 7000')
})