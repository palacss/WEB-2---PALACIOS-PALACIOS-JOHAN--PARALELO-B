//3.	Definir un arreglo de comidas favoritas.
const comidasFavoritas = [
    'Arroz con atun',
    'Comida "Pedigree"',
    'Pescado',
    'Galletas'
]


//4.	Recorrer el arreglo definido en la opción anterior y mostrarlo aplicando un do-while.
const mostrarComidas=()=>{
    let contador=0
    do {
        console.log(comidasFavoritas[contador]);
        contador++;
    } while (contador < comidasFavoritas.length);
} 

const comidaMayuscula=(Idcomida)=>{
    return comidasFavoritas[Idcomida].toUpperCase();
}

//5.	Crear una función flecha que reciba un elemento del arreglo de comidas favoritas y lo devuelva en mayúscula
mostrarComidas();

console.log(comidaMayuscula(0));