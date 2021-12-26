const express = require("express");
const path = require("path");
const blogs = require("../data/blogs");

const router = express.Router();

router.get("/", (req, res) => {
  // res.sendFile(path.join(__dirname, "../templates/index.html"));
  res.render("home");
});

router.get("/blogs", (req, res) => {
  blogs.forEach((e) => {
    console.log(e.title);
  });
  // res.sendFile(path.join(__dirname, "../views/blogsHome.html"));\
  res.render("blogsHome", {
    blogs: blogs
  });
});

router.get("/blogpost/:slug", (req, res) => {
  myBlogs = blogs.filter((e) => {
    return e.slug == req.params.slug;
  });
  console.log(myBlogs);
  // res.sendFile(path.join(__dirname, "../views/blogPage.html"));
  res.render("blog",{
    title: myBlogs[0].title,
    description: myBlogs[0].description
  })
});

module.exports = router;
