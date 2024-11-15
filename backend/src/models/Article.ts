import mongoose, { Document, Schema } from "mongoose";

export interface IArticle extends Document {
  title: string;
  body: string;
  author: number;
  postDate: number;
  topics: string[];
}

const articleSchema = new Schema<IArticle>({
  title: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
  author: {
    type: Number,
    required: true,
  },
  postDate: {
    type: Number,
    required: true,
  },
  topics: {
    type: [String],
    required: true,
  },
});

const Article = mongoose.model<IArticle>("Article", articleSchema);
export default Article;
