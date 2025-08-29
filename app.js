var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
require("dotenv").config();


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var productRoutes = require('./routes/productRoutes');
var cartRoutes = require('./routes/cartRoutes');
var orderRoutes = require('./routes/orderRoutes');
var categoryRoutes = require('./routes/categoryRoutes');
var adminRoutes = require('./routes/adminRoutes');


const cors = require('cors');
var app = express();


app.use(cors({
    origin: 'https://ecommrcesitee.netlify.app/', // Netlify deployed frontend
    methods: 'GET,POST,PUT,DELETE',
    credentials: true
}));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Static folder serve karna
app.use("/img", express.static(path.join(__dirname, "img")));

// Serve the uploads folder so frontend can access images
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use("/product", productRoutes);
app.use("/cart",cartRoutes);
app.use("/order",orderRoutes);
app.use("/category",categoryRoutes)
app.use("/admin", adminRoutes);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
