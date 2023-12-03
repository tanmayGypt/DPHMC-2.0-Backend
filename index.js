const bodyParser = require("body-parser");
const express = require("express");
const cors = require("cors");
const path = require("path");
const mongoose = require("mongoose");
const Appointment = require("./Schema/Appointments");
const Products = require("./Schema/Products");
const UserSchema = require("./Schema/User");
const blogs = require("./Schema/Blogs");
const app = express();
require("dotenv").config();
app.use(express.json());

app.use(cors());
app.use(express.json());

app.use(
  cors({
    origin: "*",
  })
);

const AppointmentsSchema = mongoose.model("Appointment", Appointment);
const ProductsSchema = mongoose.model("Products", Products);
const UserSchemaSchema = mongoose.model("Users", UserSchema);
const BlogSchema = mongoose.model("Blogs", blogs);

const port = 8000;

mongoose.connect(`${process.env.mongourl}`, {
  useNewUrlParser: true,
});

app.get("/", (req, res) => {
  res.json({
    Message: "App is Working",
  });
});

app.get("/AllBlogs", (req, res) => {
  BlogSchema.find().then((Blogs) => {
    res.json(blogs);
  });
});

app.get("/Products", (req, res) => {
  ProductsSchema.find().then((Products) => {
    res.json(Products);
  });
});

app.get("/Users", (req, res) => {
  UserSchema.find().then((AllUsers) => {
    res.json(AllUsers);
  });
});

app.listen(port, () => {
  console.log("Server Started");
});
