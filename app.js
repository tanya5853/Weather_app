var express    = require('express');
var bodyParser = require('body-parser');
var weather    = require('openweather-apis');


//init app
var app = express();

//set the template engine
app.set('view engine','ejs');

//fetch the data from request
app.use(bodyParser.urlencoded({extended:false}));

//default pageload
app.get('/',function(req,res){
    res.render('home',{temp:null});
});

app.post('/',function(req,res){
    weather.setCity(req.body.city);
    weather.setAPPID('2916fa1a761b8ce8fcc9cae524d8dc04');
    weather.getAllWeather(function(err,temp){
        console.log(temp);
        res.render('home',{temp:temp});
    });
});

var port  = process.env.PORT || 3000;
app.listen(port,function(){
    console.log('server running at '+port);
});