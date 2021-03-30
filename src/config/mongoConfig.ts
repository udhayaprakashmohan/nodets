import mongoose from 'mongoose';
import { logger } from '../util/logger';
import { db_info, db_error } from '../util/const';


export class MongoConfig {
    constructor() {

        mongoose.connect(`${process.env.MONGO_URI?.toString()}`, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
            logger.info(db_info);
        }).catch((err) => {
            logger.info(db_error, err);
        });
    }
}
