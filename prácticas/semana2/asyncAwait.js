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


async function buscarLibroPorId(id)
{
        const libro= libros.find((libro)=> libro.id===id );
        if (!libro)
        {
            const error=new Error();
            error.message="Libro no encontrado";
            throw error;
        }
        return libro;
}
async function buscarAutorPorId(id)
{
        const autor= autores.find((autor=> autor.id===id));
        if (!autor)
        {
            const error= new Error();
            error.message="No hemos encontrado el autor";
            throw error;
        }
        return autor;
}


async function main()
{

    try 
    {
        const libro= await buscarLibroPorId(2); // devuelve 10 millones de registros y demora 1 minuto
        const autor= await  buscarAutorPorId(libro.idautor); // devuelve 5 millones de registros y demora 30
        console.log(` El libro es ${libro.titulo} y su autor: ${autor.nombre } `);       

    } catch (error) {
        console.log(error.message)
    }

}

main();