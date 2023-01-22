const express = require('express');
const fs = require('fs');
const app = express();
const port = 8000;
var MobileDetect = require('mobile-detect')

app.get('/', (req, res) => {

    md = new MobileDetect(req.headers['user-agent']);
    if(md.os() == null){
        app.use(express.static('web'));
        fs.readFile("./web/web.html", "utf8", (err, data) => {
            res.send(data);
        });
    }
    else{
        app.use(express.static('mobile'));
        fs.readFile("./mobile/page.html", "utf8", (err, data) => {
            res.send(data);
        });
    }
});

app.listen(port);