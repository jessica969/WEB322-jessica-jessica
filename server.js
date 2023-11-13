const express = require('express');
const app = express();
const port = 3000;
const apiRouter = require('./routes/apiRouter');
const bodyParser = require('body-parser'); // Add this for JSON parsing
const users = require('./fakeUsers.json'); // Import users data

// SET THE VIEW ENGINE
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

// Use body-parser for JSON parsing
app.use(bodyParser.json());

// ROUTE HANDLING
app.get('/', (req, res) => {
  res.render('login');
});

app.post('/', (req, res) => {
  res.redirect(`/list`);
});

app.get('/list', (req, res) => {
  const itemsToDisplay = 15;
  const page = parseInt(req.query?.page) || 1;
  const start = page == 1 ? 0 : (page - 1) * itemsToDisplay - 1;
  const end = start + itemsToDisplay;
  const filteredUsers = users.filter((user, idx) => idx > start && idx <= end);

  res.render('list', {
    title: 'list',
    users: filteredUsers,
    itemsToDisplay,
    page,
    start,
    end,
  });
});

app.get('/detail/:id', (req, res) => {
  const user = users.find((user) => {
    return user.id === parseInt(req.params.id);
  });
  res.render('detail', { user });
});

// Use the apiRouter for handling API requests
app.use('/api', apiRouter);

// LISTEN FOR REQUESTS!!!!
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});