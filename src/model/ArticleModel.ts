
import mongoose from 'mongoose';

const { Schema } = mongoose;

export interface ArticleModel {
    
    firstName: String,
    lastName: String,
    createdAt: Date,
    updatedAt: Date,
}

export const articleSchema = new Schema({
    firstName: { type: String, required: true }, // String is shorthand for {type: String}
    lastName: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
});