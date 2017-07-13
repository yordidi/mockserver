const express = require('express');
const bodyParser = require('body-parser');
// const passport = require("passport");
const fs = require("fs");
// const join = require("path").join;
const compression = require('compression');

const app = express();
//放在其它中间件前面，保证所有的返回都是被压缩的
app.use(compression());
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

// Initialize Passport and restore authentication state, if any, from the
// session.
app.use(require('express-session')({ secret: 'keyboard cat', resave: false, saveUninitialized: false }));
// app.use(passport.initialize());
// app.use(passport.session());

const port = 3022;
// const models = join(__dirname, 'models');

// fs.readdirSync(models)
// 	.filter(file => ~file.search(/^[^\.].*\.js$/))
// 	.forEach(file => require((join(models, file))));

// require("./passport")(passport);
require("./routes")(app);

module.exports = app;