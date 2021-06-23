let edad=25;
const persona=
{
    nombre:'Anderson',
    apellido:'Plua',
    edad,
    esEstudiante:true,
    geolocalizacion:{
        lat:214.123  ,
        lng:123.234 ,
    },
    getNombreCompleto(){
        return this.nombre+" "+this.apellido;
    }
}
function mostrarPersona({ geolocalizacion:{ lat, lng } })
{
    console.log(lat, lng);
}
mostrarPersona(persona);



/*
const estudiante= { ...persona, geo:'ejemplo'  } ;

estudiante.nombre="Juan";

console.log(persona)
console.log(estudiante);

*/


/*
function mostrarPersona({ nombre, apellido })
{
    console.log(nombre);
    console.log(apellido);
}
mostrarPersona(persona);
/*

/*
console.log(persona.nombre);
console.log(persona.apellido);
console.log(persona.edad);
console.log(persona.getNombreCompleto());
*/