const otrasFrutas=[
    "guayaba",
    "chirimoya",
]

const frutas= [
    "manzana",
    "pera",
    "guineo",
    function(){
        return "gracias!!";
    }
]


if (["manzana","pera","guineo"].includes("pera"))
{
    console.log('esta disponible');
}

/*
if (
    fruta==="manzana" 
|| fruta=== "pera" 
|| fruta==="guineo"

)
{

}
*/






//console.log( { ...frutas } );

//console.log( [...frutas, ...otrasFrutas] )






/*
const [,,f1, agradecer] = frutas;


console.log(agradecer());

*/
//console.log(frutas[3]());