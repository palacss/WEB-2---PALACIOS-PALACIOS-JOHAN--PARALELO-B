const express = require("express");

const app = express();

const PORT=3000;

//persistencia de datos
let arreglo = [];

//exponer carpeta con recursos EstAticos
app.use('/public',  express.static( __dirname+'/public'));
app.use( express.json() )

///http://localhost:3000



////estudiantes
///   /
app.get('/', (req,res)=>{
    res.send(arreglo);
})
////get
///   /individual/:nombre

app.get('/:nombre' ,(req,res)=>{
    const { nombre  }  = req.params;
    const respuesta =  arreglo.filter(p=>{
        return p.nombre===nombre
    })
    if (respuesta.length>0)
    {
        res.status(200).send({
            respuesta:respuesta[0]
        })
    }
    else
    {
        res.status(404).send({
            respuesta:"No se pudo encontrar el elemento"
        })

    }
    

} )


////post
///   /
//body {  nombre:'Kevin Lucas', curso:'Sexto A' }

app.post('/', (req,res)=>{
    const {body} = req;
    arreglo.push(body);
    res.status(201).send(
        {
            mensaje:"Se almacenO correctamente",
            respuesta: body
        }
        );
})

/////put y patch
///   /
//body {  nombre:'Kevin Lucas', curso:'Sexto B'  }

app.put('/', (req, res)=>{
    const { nombre, curso  } =  req.body;
    let elemento = arreglo.filter(p=> p.nombre=== nombre )[0];
    elemento.curso= curso;
    res.status(200).send({
        respuesta: elemento
    })
})

/////delete
///   /:nombre

app.delete('/:nombre', (req,res)=>{
    const {nombre} = req.params;
    arreglo  = arreglo.filter(p=> p.nombre !== nombre );
    res.status(200).send({
        respuesta:"Se eliminO correctamente"
    })
})


app.listen(PORT, ()=>{
    console.log(`El servidor esta escuchando por el puerto ${PORT}`)
})