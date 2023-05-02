const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
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


app.get("/posts", async(req, res) => {
  const posts = await Post.find();

  res.send(posts).status(200);
})


app.post("/events", async(req, res) => {
  const { type, data } = req.body;

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
    const { id, content, username, postId } = data;
    const findPost = await Post.findOne({
      id: postId,
    }).exec();

    findPost.comments.push({
      id,
      content,
      username
    })
    findPost.save()
  }
  res.send({});
});


app.listen(8003, () => {
  console.log("Listening on port 8003");
});
