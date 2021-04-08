const express = require('express');
let app = express();

app.use(express.static(__dirname + '/../dist/app'));

let port = process.env.PORT || 8080;

app.listen(port, function() {
    console.log('listening on port' + port);
  })
