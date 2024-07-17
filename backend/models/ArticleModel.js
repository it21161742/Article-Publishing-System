const mongoose = require('mongoose');

const ArticleSchema = mongoose.Schema(
    {
        author_name: {
            type: String,
            require: true
        },

        article_topic: {
            type: String,
            require: true
        },

        status: {
            type: String,
            default: "Under Review",
            require: true
        },

        content: {
            type: String,
            require: true
        },

    },
    {timestamp: true}

);

module.exports = mongoose.model(" Article",  ArticleSchema);