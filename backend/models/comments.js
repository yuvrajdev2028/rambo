const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema(
    {
        commentText:{
            type: String,
            required: true
        },
        commentBy:{
            type: mongoose.Schema.Types.ObjectId,
            required: true
        },
        commentAt:{
            type: Date,
            required: true
        },
        likes: {
            type: Number,
            required: true
        },
        comments:[
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Comment"
            }
        ]
    }
)

const Comment = mongoose.model("Comment",commentSchema)