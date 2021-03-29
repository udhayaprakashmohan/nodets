import mongoose from 'mongoose';

const { Schema } = mongoose;

export interface ArticleModel {

    firstName: String,
    lastName: String,
    id: Number,
    title: String,
    description: String,
    createdAt: Date,
    updatedAt: Date,
}

export const articleSchema = new Schema({

    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    id: { type: Number, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
});