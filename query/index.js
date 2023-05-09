const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const axios = require("axios");

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
      id: id,
      title: title,
      content: content,
      date: date,
      comments: [] 
    });

    post = await post.save();
  }

  if (type === 'CommentCreated') {
    const { id, content, postId, cmt_status } = data;
    const findPost = await Post.findOne({
      id: postId,
    }).exec();

    if (findPost) {
      findPost.comments.push({
        id,
        content,
        cmt_status
      })
      findPost.save()
    }
  }

  if (type === 'CommentUpdated') {
    const { id, postId, cmt_status, content} = data;

    const post = await Post.findOne({ id:postId });
    const comment = post.comments.find(cmt => cmt.id === id);

    if (comment) {
      comment.cmt_status = cmt_status;
      comment.content = content;
    }

    await post.save(); 
  }
}

app.get("/posts", async(req, res) => {
  const posts = await Post.find();

  res.send(posts).status(200);
})


app.post("/events", async(req, res) => {
  const { type, data } = req.body;
  handleEvent(type, data);

  res.send({});
});


app.listen(8003, async () => {
  console.log("Listening on port 8003");
  try {
    const res = await axios.get("http://localhost:8002/events");

    for (let event of res.data) {
      console.log("Processing event:", event.type);

      handleEvent(event.type, event.data);
    }
  } catch (error) {
    console.log(error.message);
  }
})