//console.log(saludar('Omar')) 

function saludar(nombre)
{
    return `Hola ${nombre}`;
}

const saludar2= function(parametro)
{
    return `Hola ${parametro}`;
 
}

//saludar2('Omar');

const saludar3 = (parametro)=>{
    return `Hola ${parametro}`;
}

function llamarSaludo(funcionx, parametro)
{
    return (funcionx(parametro)) ;
}

console.log(llamarSaludo(saludar, "Santiago"))  ;

