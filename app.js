var express = require('express');
var multer = require('multer');
var upload = multer({ dest: 'uploads/' });

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('hello people');
});

app.post('/upload', upload.single('image'), (req, res) => {
    try {
        res.send(req.file);
    } catch (err) {
        res.send(400);
    }
});

app.listen(port, () => {
    console.log('listening to the port: ' + port);
});