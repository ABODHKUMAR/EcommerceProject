const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const fileUpload = require("express-fileupload");
const path = require("path");

const errorMiddleware = require("./middleware/error");

// Config
if (process.env.NODE_ENV !== "PRODUCTION") {
  require("dotenv").config({ path: "backend/config/config.env" });
}

app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(fileUpload());

// Route Imports
const product = require("./routes/productRoute");
const user = require("./routes/userRoute");
const order = require("./routes/orderRoute");
const payment = require("./routes/paymentRoute");

app.use("/api/v1", product);
app.use("/api/v1", user);
app.use("/api/v1", order);
app.use("/api/v1", payment);


  // Serve static files (JS, CSS, images, etc.)
  app.use(express.static(path.join(__dirname, "../appview/build")));

  // Catch-all route to serve the React app's index.html for frontend routes
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../appview/build/index.html"));
  });


// Middleware for Errors
app.use(errorMiddleware);

module.exports = app;
