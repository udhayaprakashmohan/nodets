import mongoose from 'mongoose';

export class MongoConfig {
    constructor() {
        mongoose.connect('mongodb://localhost:27017/article', { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
            console.log('DB Connnected');
        }).catch(() => {
            console.log('Err on DB connection');
        });
    }
}