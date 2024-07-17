const express = require('express');
const router = express.Router();
const {createArticle, getAllArticle, getArticleById, updateArticle, deleteArticle, approveArticle} = require('../controllers/ArticleController')

// http://localhost:4000/article/create-article
router.post("/create-article", createArticle)

// http://localhost:4000/article/get-all-article
router.get("/get-all-article", getAllArticle)

// http://localhost:4000/article/get-article
router.get("/get-article/:id", getArticleById)

// http://localhost:4000/article/update-article
router.put("/update-article/:id", updateArticle)

// http://localhost:4000/article/delete-article
router.delete("/delete-article/:id", deleteArticle)

// http://localhost:4000/article/approve-article
router.put("/approve-article/:id", approveArticle)



module.exports = router