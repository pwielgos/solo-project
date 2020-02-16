
const express = require('express');
require('dotenv').config();

const app = express();
const bodyParser = require('body-parser');
const sessionMiddleware = require('./modules/session-middleware');

const passport = require('./strategies/user.strategy');

// Route includes
const accountRouter = require('./routes/account.router');
const detailRouter = require('./routes/detail.router');
const galleryRouter = require('./routes/gallery.router');
const randomRouter = require('./routes/random.router');
const searchRouter = require('./routes/search.router');
const userRouter = require('./routes/user.router');

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Passport Session Configuration //
app.use(sessionMiddleware);

// start up passport sessions
app.use(passport.initialize());
app.use(passport.session());

/* Routes */
app.use('/api/account', accountRouter);
app.use('/api/search/details', detailRouter);
app.use('/api/gallery', galleryRouter);
app.use('/api/random', randomRouter);
app.use('/api/search', searchRouter);
app.use('/api/user', userRouter);

// Serve static files
app.use(express.static('build'));

// App Set //
const PORT = process.env.PORT || 5000;

/** Listen * */
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
