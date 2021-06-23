class Persona
{
    constructor(nombre)
    {
        this.nombre= nombre;
    }
    getNombre()
    {
        return this.nombre;
    }
}

const persona = new Persona("Omar Limon");
nombre = persona.getNombre();
console.log(nombre);