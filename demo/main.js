const express = require('express');
const app = express();

const port = process.env.PORT || 3000;

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send("hello world");
})
app.post('/post', (req, res) => {
   res.send("Hello this post method");
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
