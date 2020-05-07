const  x = require('express');

// const Router = x.Router();
const PORT = 4321;
// const hu = { 'Content-Type': 'text/html; charset=utf-8' };
const app = x();

app.get('/', (req, res) => {
    res.send('hello world');
}).listen(PORT)
