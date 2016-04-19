var express         = require("express"),
    app             = express(),
    bodyParser      = require("body-parser"),
    methodOverride  = require("method-override"),
    mongoose        = require('mongoose');

mongoose.connect('mongodb://localhost/mi_propuesta', function(err,res){
	if(err) console.log('ERROR:Conectando a la BD'+ err);
	else console.log('Conexión a la BD realizada');
});



/*app.configure(function(){
	app.use(express.bodyParser());
	app.use(express.methodOverride());
	app.user(app.router);
});*/
/*
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride());*/

app.get('/', function(req,res){
	res.send('hola mundo');
});

require('./routes')(app);

app.listen(5000,function(){
 console.log('Servidor Express escuchando en el puerto 500');
});
