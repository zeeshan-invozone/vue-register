const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const expressSession = require('express-session');

const port = process.env.PORT || 5000;
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use(
  expressSession({
    secret: 'abcZ!@<]!123cz',
    saveUninitialized: false,
    resave: false,
  })
);
app.use('/user', require('./server/routes/user'));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
