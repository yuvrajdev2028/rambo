const mongoose=require('mongoose');

const postSchema = new mongoose.Schema(
    {
        content: {
            type: String,
            required: true
        },
        imgUrl:{
            type: String,
        },
        createdBy:{
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true
        },
        likes:{
            type: Number,
            required: true,
            default: 0
        },
        comments:[
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Comment"
            }
        ]
    },
    {
        timestamps: true
    }
)

const Post = mongoose.model("Post",postSchema)