const fiesta=[
    {
        id: 'p1',
        nombre: 'Pack 1',
        description: '15 chocolate, 15 deditos, 20 canguil, 15 sandwiches',
    },
    {
        id:'p2',
        nombre: 'Pack 2',
        description: '20 chocolate, 20 deditos, 25 canguil, 20 sandwiches',
    },
    {
        id:'p3',
        nombre: 'Pack 3',
        description: '30 chocolate, 30 deditos, 35 canguil, 30 sandwiches',
    },
    {
        id:'p4',
        nombre: 'Pack 4',
        description: '40 chocolate, 40 deditos, 45 canguil, 40 sandwiches',
    },


]
const  clientes=[
    {
        id:'c1',
        nombre: 'nombre',
    },
    {
        id:'c2',
        nombre: 'apellido',
    },
    {
        id:'c3',
        nombre: 'cedula',
    }
]
const pedidos=[
    {
        id:'pp1',
        idcliente: 'c1',
        idfiest: 'p1',
        fecha: '30 de Mayo del 2021',
    },
    {
        id:'pp2',
        idcliente: 'c2',
        idfiest: 'p2',
        fecha: '29 de Mayo del 2021',
    },
    {
        id:'pp3',
        idcliente: 'c1',
        idfiest: 'p3',
        fecha: '31 de Mayo del 2021',
    }
]

function buscarPedidoPorId(id){
    return new Promise((resolve, reject)=>{
        const pedido=pedidos.find((pedido)=> pedido.id===id);
        if(!pedido){
            const error=new Error();
            error.message='Pedido no existente';
            reject(error);
        }
        resolve (pedido)
    })

}
function buscarClientePorId(id){
    return new Promise((resolve, reject)=>{
        const cliente=clientes.find((cliente)=>cliente.id===id)
        if(!cliente){
            const error = new Error();
            error.message='Cliente no encontrado';
            reject(error);
        }
        resolve (cliente)
    })
}

async function buscarPedidoPorId2(id){
    const pedido = pedidos.find((pedido)=>pedido.id===id);
    if(!pedido){
        const error=new Error();
        error.message="El pedido no se encontro";
        throw error;

    }
    return pedido;

}
async function buscarfiestPorId(id){
    const fiest = fiesta.find((fiest)=>fiest.id===id);
    if(!fiest){
        const error=new Error();
        error.message="Pack de fiest no encontrado";
        throw error;

    }
    return fiest;
}

async function main(){
    try{
        const pedido = await buscarPedidoPorId2('pp1');
        const fiest = await buscarfiestPorId(pedido.idfiest);
        console.log(`El pack seleccionado es: ${fiest.nombre}, el contenido de este pack es: ${fiest.description}`);

    }catch(err){
        console.log(err.message);
    }
}

main();



let pedidoAuxiliar={};


buscarPedidoPorId('pp1').then((pedido)=>{
    pedidoAuxiliar=pedido;
    return buscarClientePorId(pedido.idcliente);

}).then((cliente)=>{
    pedidoAuxiliar.cliente=cliente;
    delete pedidoAuxiliar.idcliente;
    console.log(pedidoAuxiliar);

}).catch((error)=>{
    console.log(error.message)
})