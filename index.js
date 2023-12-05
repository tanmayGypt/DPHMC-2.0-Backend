const bodyParser = require("body-parser");
const express = require("express");

const cors = require("cors");
const path = require("path");
const mongoose = require("mongoose");
const AppointmentsSchema = require("./Schema/Appointments");
const ProductsSchema = require("./Schema/Products");
const UserSchema = require("./Schema/User");
const BlogSchema = require("./Schema/Blogs");
const CartItemSchema = require("./Schema/CartItems");
const FaqSchema = require("./Schema/Faq");
const OrdersSchema = require("./Schema/Orders");
const Product_Review_Schema = require("./Schema/ProductReviews");
const CouponCodeSchema = require("./Schema/CouponCode");
const AppointmentRoute = require("./Router/Appointment");
const BlogRoute = require("./Router/Blog");
const Cart_Items_Route = require("./Router/Cart_Items");
const CouponCodeRoute = require("./Router/CouponCode");
const FaqRoute = require("./Router/Faq");
const HomeRoute = require("./Router/Home");
const OrdersRoute = require("./Router/Orders");
const ProductReviewRoute = require("./Router/Product_Review");
const UserRoute = require("./Router/User");
const ProductRoute = require("./Router/product");

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

mongoose.connect(`${process.env.mongourl}`, {
  useNewUrlParser: true,
});

app.use("/", HomeRoute);
app.use("/Appointments", AppointmentRoute);
app.use("/AllBlogs", BlogRoute);
app.use("/cartItems", Cart_Items_Route);
app.use("/Faqs", FaqRoute);
app.use("/Orders", OrdersRoute);
app.use("/ProductReviews", ProductReviewRoute);
app.use("/Products", ProductRoute);
app.use("/Users", UserRoute);

const port = 8000 || process.env.PORT;

app.listen(port, () => {
  console.log(`Server Started On Port ${port}`);
});
