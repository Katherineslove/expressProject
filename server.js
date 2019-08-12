const express =  require('express');
const app = express();
const port = 3000;

app.use(function(req, res, next) {
  console.log(`${req.method} request for ${req.url}`);
  next();
});

app.get('/', (req, res) => res.send('This is the home page'));
app.get('/about', (req, res) => res.send('This is the about page'));
app.get('/contact', (req, res) => res.send('This is the contact page'));
app.get('/about/me', (req, res) => res.send('This is the me page'));
app.get('/school', (req, res) => res.send('This is the school page'));
app.get('/children', (req, res) => res.send('This is the children page'));
// app.post();






app.listen(port, () => console.log(`application is running on port ${port}`));
