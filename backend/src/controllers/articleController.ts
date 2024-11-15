import { Request, Response } from "express";
import Article from "../models/Article";

// @desc   Get all articles (only accessible to logged-in users)
// @route  GET /api/articles
// @access Private
export const getArticles = async (req: Request, res: Response) => {
  try {
    const currentEpochTime = Math.floor(Date.now() / 1000);
    const articles = await Article.find({
      postDate: { $lte: currentEpochTime },
    })
      .sort({ postDate: -1 }) // Sort by postDate descending
      .limit(5); // Limit to 5 articles

    res.status(200).json({
      user: (req as any).user,
      success: true,
      count: articles.length,
      data: articles,
    });
  } catch (err) {
    res.status(500).json({ message: "Server Error" });
  }
};

// @desc Create a new article
// @route POST /api/articles
export const postArticle = async (req: Request, res: Response) => {
  try {
    const { title, body, author, postDate, topics } = req.body;
    const articleRespose = await Article.create({
      title: title,
      body: body,
      author: author,
      postDate: postDate,
      topics: topics,
    });

    res.status(201).json({ articleRespose });
  } catch (err) {
    res.status(500).json({ message: "Server Error" });
  }
};

// @desc Get related articles
// @route GET /api/articles/related/:articleId
export const getRelatedArticles = async (req: Request, res: Response) => {
  const { articleId } = req.params;
  try {
    // Find the article by its ID
    const article = await Article.findById(articleId);

    if (!article) {
      return res.status(404).json({ message: "Article not found" });
    }

    // Get the topics of the current article
    const { topics } = article;

    // Find other articles that share at least one topic with the current article
    const relatedArticles = await Article.find({
      _id: { $ne: articleId }, // Exclude the current article
      topics: { $in: topics }, // Match articles that have at least one topic in the topics array
    });

    res.status(200).json({ relatedArticles });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};
