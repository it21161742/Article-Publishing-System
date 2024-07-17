const asyncHandler = require("express-async-handler");
const articleModel = require("../models/ArticleModel");
const { response } = require("express");
const { model } = require("mongoose");

//creare new article
const createArticle = asyncHandler(async (req, res) => {
  const { author_name, article_topic, content } = req.body;

  const createArticleResponse = await articleModel.create({
    author_name: author_name,
    article_topic: article_topic,
    
    content: content,
  });

  if (createArticleResponse) {
    return res.status(200).json({ message: "Article created successfully" });
  } else {
    res.status(403).json({ message: "RArticle creation unsuccessfull" });
  }
});


// ger all article
const getAllArticle = asyncHandler(async (req, res) => {
  const responseAllarticle = await articleModel.find();

  if (responseAllarticle) {
    res.status(201).json(responseAllarticle);
  } else {
    res.status(401).json("something went wrong in getting all rooms");
  }
});

// get room by id
const getArticleById = asyncHandler(async (req, res) => {
  const id = req.params.id;
  const response = await articleModel.findById(id);

  if (response) {
    res.status(200).json(response);
  } else {
    res.status(404).json("something wrong in getting room by roomID");
  }
});

// update room by id
const updateArticle = asyncHandler(async (req, res) => {
  const id = req.params.id;
  const response = await articleModel.findById(id);

  if (response) {
    const update_article_response = await articleModel.findByIdAndUpdate(id, {...req.body});

    if (update_article_response) {
      res.status(200).json(update_article_response);
    } else {
      res.status(400).json("can not update");
    }
  } else {
    res.status(401).json("room can not found");
  }
});

//delete article by id
const deleteArticle = asyncHandler(async (req, res) => {
    const id = req.params.id;
  
    const response_delete = await articleModel.findByIdAndDelete(id);
  
    if (!response_delete) {
      res.status(203).json("not found");
    } else {
      res.status(403).json("delete success");
    }
  });

// approve article
const approveArticle = asyncHandler(async (req, res) => {
    const id = req.params.id;
  
    // find the article by id
    const article = await articleModel.findById(id);

    if(!article){
        res.status(404).json({message: "Article not found"});
    }
    else{
        if (article.status !== 'Under Review') {
            // check if there article is in under reeview
            res.status(200).json("Article is not in under review");
          } else {
            // update the article status to Approved
            article.status = 'Approved';
            await article.save();
        
            // retuer success message
            res.status(200).json({ message: "Article Approved successfully" });
          }
    }
  
    
  });

module.exports = {
  createArticle,
  getAllArticle,
  getArticleById,
  updateArticle,
  deleteArticle,
  approveArticle
};
