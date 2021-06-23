const  mongoose= require("mongoose");
const conexion="mongodb+srv://joancema:jacm1310@cluster0.x7met.mongodb.net/db_test?retryWrites=true&w=majority";
//conectarse a la bd
mongoose.connect(conexion, { useNewUrlParser:true,  useUnifiedTopology:true });

//definir el modelo
const Usuario = mongoose.model("Usuario", { nombre: String });
// crear el objeto a partir del modelo
const usuario1 = new Usuario({nombre:"Josselyn MacIas"});

(async ()=>{
    try {
        await usuario1.save();
        console.log(`El usuario fue creado sin problemas`)
        await Usuario.find().then(console.log);
        console.log(`se mostrO la informaciOn`)
    } catch (error) {
        console.log(error)        
    }
})();







