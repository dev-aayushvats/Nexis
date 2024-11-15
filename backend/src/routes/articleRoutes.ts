import { Router } from "express";
import {
  getArticles,
  getRelatedArticles,
  postArticle,
} from "../controllers/articleController";
import { protect } from "../middleware/authMiddleware";

const router = Router();

// Protected route to get articles
router.get("/", protect, getArticles);
router.post("/", postArticle);
router.get("/related/:articleId", getRelatedArticles);

export default router;
