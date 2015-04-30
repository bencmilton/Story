var express = require('express');
var app = express();

// CORS (Cross-Origin Resource Sharing) headers to support Cross-site HTTP requests
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
});

app.get('/create', function(req, res, next) {
    console.log('wassup, ben?');
    res.send('you wanna cron?');
});

app.set('port', process.env.PORT || 3001);

app.listen(app.get('port'), function () {
    console.log('Express server listening on port ' + app.get('port'));
});
