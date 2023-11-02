const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

const userProfile = {
  name: 'John Doe',
  email: 'johndoe@example.com',
  bio: 'Saya adalah seorang pengembang web.',
};

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/web.html');
});

app.post('/profile', (req, res) => {
  userProfile.name = req.body.name;
  userProfile.email = req.body.email;
  userProfile.bio = req.body.bio;
  res.json(userProfile);
});

const port = 8080;
app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});
