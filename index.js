const mongoose = require("mongoose");
const ejs = require("ejs");

const express = require("express");
const app = express();

// Task 1
// Copy in your SRV connection string
// Set the name of your database to CSHComments

const mongoDBConnectionString = "mongodb+srv://SE12:CSH2024@cluster0.hq3gcj3.mongodb.net/CSHComments?retryWrites=true&w=majority&appName=Cluster0";

mongoose
  .connect(mongoDBConnectionString)
  .then(() => console.log("MongoDB connection successful."))
  .catch((err) => console.error("MongoDB connection error:", err));

app.use(express.static(__dirname + "/public"));

// Task 2
// Define the middleware to parse incoming requests as JSON

app.use(express.json());

app.set("view engine", "ejs");

app.use((req, res, next) => {
  console.log(`${req.method}: ${req.path}`);
  next();
});

// Task 3
// Fill out the commentSchema below with the following:
// username (required)
// teacher (required)
// comment (required)
// rating

// Include the appropriate data types

const commentSchema = new mongoose.Schema(
  {
    // Write your Schema here, ignore timestamps
    username: {type: String,required: true},
    teacher:{type: String,required: true},
    comment:{type: String,required: true},
    rating:{type:Number},
  },
  { timestamps: true },
);

// Task 4
// Associate your commentSchema to the "Comment" model
const Comment = mongoose.model("Comment", commentSchema);
// CONTINUE in comments.ejs for Task 5

// GET route - READ all comments
app.get("/", (req, res) => {
  Comment.find({})
    .sort({ createdAt: -1 })
    .then((comments) => {
      res.render("comments", { comments: comments });
    });
});

// POST route - CREATE a new comment
app.post("/smth", (req, res) => {
  const comment = new Comment({
    username: req.body.username,
    teacher: req.body.teacher,
    rating: req.body.rating,
    comment: req.body.comment,
  });

  comment.save().then((newComment) => {
    res.json(newComment);
  });
});

app.listen(3000, () => {
  console.log(`Server running.`);
});
