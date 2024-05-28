var app = require('./app/config/server');

//app.get('/', function(req,res){
    //res.render("home/index");
//});

//var rotaHome = require('./app/routes/home');
//rotaHome(app);

var rotaAdicionar = require('./app/routes/adicionar_usuario');
rotaAdicionar(app);

var rotaCursos = require('./app/routes/cursos');
rotaCursos(app);

var rotaHistoria = require('./app/routes/historia');
rotaHistoria(app);

var rotaProfessores = require('./app/routes/professores')(app);

app.listen(3000,function(){
    console.log("servidor inciado");
});