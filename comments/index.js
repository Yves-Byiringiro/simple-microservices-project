const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const axios =  require("axios");
const { randomInt } = require('crypto');
const config= require('./config/mongodb.json');

const mongoose = require("mongoose");
const { Comment } = require("./models/comment");

const mongopwd = config.mongodb.password;
const uri = `mongodb+srv://ybyiring:${mongopwd}@cluster0.j4iybfs.mongodb.net/simpleblogdb?retryWrites=true&w=majority`

mongoose
  .connect(uri)
  .then(() => console.log("Connected to mongoDB......."))
  .catch((err) => console.error("Could not connect to mongoDB......", err));

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.get("/post/:id/comments", async (req, res) => {
  try {
    const comments = await Comment.find({ post_id: req.params.id });
    return res.status(200).json(comments);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: "internal server Error" });
  }
});

app.post("/post/:id/comments", async (req, res) => {
  try {
    let comment = new Comment({
      id:randomInt(5000),
      content: req.body.content,
      post_id: req.params.id,
      cmt_status: 'pending'
    });

    const isExist = await Comment.findOne({
      content: req.body.content,
      id: req.params.id,
    }).exec();

    if (isExist) {
      return res.status(409).json({ message: "comment already exists" });
    }

    comment = await comment.save();

    await axios.post('http://localhost:8002/events', {
      type: 'CommentCreated',
      data: {
          id: comment._id,
          content: comment.content,
          postId: req.params.id,
          cmt_status:'approved'
      }
    })
    res.status(201).send({ message: "comment created" });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: "internal server Error" });
  }
});


app.post('/events', async (req, res) => {
  console.log('Event received: ', req.body.type);

  const {type, data} =  req.body;

  // Update comment status code 
  res.send({});
});


app.listen(8001, () => {
  console.log("Listening on port 8001");
});