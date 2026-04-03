const express = require('express');
const app = express();
const port = 3000;

app.get('/trang-chu', (req, res) => {
    res.send('Welcome to the blog!');
});

app.listen(port, () => console.log(`Blog app listening at http://localhost:${port}`));
