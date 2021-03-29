import mongoose from 'mongoose';

export class MongoConfig {
    constructor() {
        if(process.env.MONGO_URL){
        mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
            console.log('DB Connnected');
        }).catch(() => {
            console.log('Err on DB connection');
        });
    }
    }
}