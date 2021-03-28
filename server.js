var express = require('express');
var path = require('path');
var router = express.Router();


var app = express();
app.set('port', (process.env.PORT || 5000));


//Set static folder for angular stuff
app.use(express.static(path.join(__dirname, 'dist/apa-tech-aufgabe')));


router.get('*', (req, res) => {
  
    res.sendFile(path.resolve(__dirname , 'dist/apa-tech-aufgabe/index.html'));
});

app.use('/', router);

app.listen(app.get('port'), function () {
  console.log('Node app is running on port', app.get('port'));
});

