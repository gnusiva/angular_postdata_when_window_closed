const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');
const upload = multer();
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(bodyParser.urlencoded({ extended: false }));
app.post('/captureClose', upload.none(),  function(req, res) {
    var data = req.body;
    console.log('====================');
    console.log(data);
    console.log('====================');
    res.send("Success");
});

app.listen(3000, () => console.log('App is running on port 3000'));
