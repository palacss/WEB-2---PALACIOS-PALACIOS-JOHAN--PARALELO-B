//jsonplaceholder
const libros =[
    {
        id:1,
        titulo:"JavaScript en el Cliente",
        idautor:3
    },
    {
        id:2,
        titulo:"JavaScript en el Servidor",
        idautor:1
    },
    {
        id:3,
        titulo:"PHP MySql y Apache",
        idautor:2
    },
]
const autores=[
    {
        id:1,
        nombre:'Victor LOpez'
    },
    {
        id:2,
        nombre:'Omar LimOn'
    },
    {
        id:3,
        nombre:'Jean Pierre'
    },
]
function  buscarLibroPorId(id, callback)
{
    const libro=  libros.find((libro)=>  libro.id===id);
    if (!libro)
    {
        const error= new Error();
        error.message="Libro no encontrado";
        return callback(error);
    }
    callback(null,libro);
}
function buscarAutorPorId(id, callback)
{
    const autor = autores.find((autor)=> autor.id=== id );
    if (!autor)
    {
        const error= new Error();
        error.message="Autor no encontrado"
        return callback(error)
    }
    callback(null, autor);
}
buscarLibroPorId(1,
    (err, libro )=>{
        if (err)
        {
            return console.log(err.message);
        }
        buscarAutorPorId(libro.idautor,
        (err, autor)=>{
            if (err)
            {
                return console.log(err.message);
            }
            libro.autor= autor;
            delete libro.idautor;
            console.log(libro);
            // buscarNacionalidadPorId(autor.idenacionalidad, (err,nacionalidad)=>{
            //     if (err)
            //     {
            //         return console.log(err.message)
            //     }
            //     libro.autor.nacionalidad= nacionalidad;
            //     console.log(libro)
            // })
        } 
        )
    }
)

