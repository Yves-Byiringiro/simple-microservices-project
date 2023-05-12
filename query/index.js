const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const axios = require("axios");
const ObjectId = mongoose.Types.ObjectId;

const config = require('./config/mongodb.json');
const { Post } = require("./models/post");

const app = express();
app.use(bodyParser.json());
app.use(cors());



const mongopwd = config.mongodb.password;
const uri = `mongodb+srv://ybyiring:${mongopwd}@cluster0.j4iybfs.mongodb.net/querydb?retryWrites=true&w=majority`

mongoose
  .connect(uri)
  .then(() => console.log("Connected to mongoDB......."))
  .catch((err) => console.error("Could not connect to mongoDB......", err));


const handleEvent = async (type, data) => {
  if (type === 'PostCreated') {
    const { id, title, content, date } = data;

    let post = new Post({
      p_id: id,
      title: title,
      content: content,
      date: date,
      comments: [] 
    });

    post = await post.save();
  }

  // if (type === 'PostCreated') {
  //   const { id, title, content, date } = data;
  
  //   await Post.create({ p_id: id, title, content, date, comments: [] });
  // }


  if (type === 'CommentCreated') {
    const { id, content, postId, cmt_status } = data;

    const findPost = await Post.findOne({
      p_id: postId,
    }).exec();

    // console.log('------------------- status in query (checking in CommentCreated)', cmt_status)

    if (findPost) {
      findPost.comments.push({
        id,
        content,
        cmt_status
      })
      findPost.save()
    }
  }

  // if (type === 'CommentCreated') {
  //   const { id, content, postId, cmt_status } = data;
  
  //   await Post.findByIdAndUpdate(
  //     postId,
  //     { $push: { comments: { id, content, cmt_status } } }
  //   );
  // }

  // if (type === 'CommentCreated') {
  //   const { id, content, postId, cmt_status } = data;
    
  //   const post = await Post.findOneAndUpdate(
  //     { _id: postId },
  //     { $push: { comments: { id, content, status: cmt_status } } },
  //     { new: true }
  //   ).exec();
  // }

  // if (type === 'CommentUpdated') {
  //   const { id, postId, cmt_status, content} = data;

  //   console.log('------------------- status in query (before updating the database, checking in CommentUpdated Section)', cmt_status)

  //   let post = await Post.findOne({ p_id: postId });
  //   if (post) {

  //     let comment = await post.comments.find(cmt => cmt.id === id);

  //     if (comment) {
  //       console.log('------------------- status in query (after updating the database, checking in CommentUpdated Section - 1)', comment.cmt_status)
  //       comment.cmt_status = cmt_status;
  //       comment.content = content;
  //       console.log('------------------- status in query (after updating the database, checking in CommentUpdated Section)', cmt_status, comment.cmt_status)
  //       post.save(); 
  //     }
  //     console.log('------------------- status in query (after updating the database, checking in CommentUpdated Section -3)', cmt_status, post)
      
  //   }
  // }

  // if (type === 'CommentUpdated') {
  //   const { id, postId, content, cmt_status } = data;
  
  //   await Post.updateOne(
  //     { id: postId, 'comments._id': id },
  //     { $set: { 'comments.$.cmt_status': cmt_status, 'comments.$.content': content } }
  //   );
  // }



}

app.get("/posts", async(req, res) => {
  const posts = await Post.find();


  posts.map((pst)=> {
    console.log(pst.comments)

  })
  res.send(posts).status(200);
})


app.post("/events", async(req, res) => {
  const { type, data } = req.body;
  handleEvent(type, data);

  res.send({});
});


app.listen(8003, async () => {
  console.log("Listening on port 8003");
  // try {
  //   const res = await axios.get("http://localhost:8002/events");

  //   for (let event of res.data) {
  //     console.log("Processing event:", event.type);

  //     handleEvent(event.type, event.data);
  //   }
  // } catch (error) {
  //   console.log(error.message);
  // }
})