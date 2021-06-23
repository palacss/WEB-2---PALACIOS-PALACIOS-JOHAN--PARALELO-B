const mongoose = require("mongoose");
const { Schema } = mongoose;

const UsuarioSchema =   
new Schema(
{
    nombre: { type:String },
    nick: { type:String },  
},
{
     timestamps:{ craetedAt: true, updatedAt:true } 
}
);

module.exports  =  mongoose.model("Usuario", UsuarioSchema );


