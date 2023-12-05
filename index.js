const bodyParser = require("body-parser");
const express = require("express");
const cors = require("cors");
const path = require("path");
const mongoose = require("mongoose");
const Appointment = require("./Schema/Appointments");
const Products = require("./Schema/Products");
const User = require("./Schema/User");
const blogs = require("./Schema/Blogs");
const CartItems = require("./Schema/CartItems");
const Faq = require("./Schema/Faq");
const Orders = require("./Schema/Orders");
const Reviews = require("./Schema/ProductReviews");
const CouponCode = require("./Schema/CouponCode");
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
const AppointmentsSchema = mongoose.model("Appointment", Appointment);
const ProductsSchema = mongoose.model("Products", Products);
const UserSchema = mongoose.model("Users", User);
const BlogSchema = mongoose.model("Blogs", blogs);
const CartItemSchema = mongoose.model("CartItems", CartItems);
const FaqSchema = mongoose.model("Faq", Faq);
const OrdersSchema = mongoose.model("Orders", Orders);
const Product_Review_Schema = mongoose.model("Product Reviews", Reviews);
const CouponCodeSchema = mongoose.model("Coupon Code", CouponCode);

mongoose.connect(`${process.env.mongourl}`, {
  useNewUrlParser: true,
});

app.use("/", HomeRoute);
app.use("/Appointments/:Userid", AppointmentRoute);
app.use("/Appointments", AppointmentRoute);
app.use("/AllBlogs", BlogRoute);
app.use("/cartItems/:Userid", Cart_Items_Route);
app.use("/Faqs/:Productid", FaqRoute);
app.use("/Faqs/:Id", FaqRoute);
app.use("/Orders/:Userid", OrdersRoute);
app.use("/ProductReview/:Productid", ProductReviewRoute);
app.use("/ProductReviews", ProductReviewRoute);
app.use("/ProductReview/:UserId/:ProductId", ProductReviewRoute);
app.use("/Products", ProductRoute);
app.use("/Users", UserRoute);
app.use("/Users/:id", UserRoute);
app.use("/Products/:productid", ProductRoute);
app.use("/Orders", OrdersRoute);
app.use("/Orders/:OrderId", OrdersRoute);

const port = 8000 || process.env.PORT;

app.listen(port, () => {
  console.log(`Server Started On Port ${port}`);
});
