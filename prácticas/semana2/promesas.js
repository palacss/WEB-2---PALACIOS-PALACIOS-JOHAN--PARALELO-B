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

function buscarLibroPorId(id)
{
    return new Promise((resolve, reject)=>{
        const libro= libros.find((libro)=> libro.id===id );
        if (!libro)
        {
            const error=new Error();
            error.message="Libro no encontrado";
            reject(error);
        }
        resolve(libro);
    })
}
function buscarAutorPorId(id)
{
    return new Promise((resolve,reject)=>{
        const autor= autores.find((autor=> autor.id===id));
        if (!autor)
        {
            const error= new Error();
            error.message="No hemos encontrado el autor";
            reject(error);
        }
        resolve(autor);
    })
}

//let libroAuxiliar={};

buscarLibroPorId(2)
.then((libro)=>{
    libroAuxiliar= libro;
    return buscarAutorPorId(libro.idautor);
})
.then((autor)=>{

    libroAuxiliar.autor= autor;
    delete libroAuxiliar.idautor;
    console.log(libroAuxiliar)
})
.catch((err)=>{
    console.log(err.message)
})



