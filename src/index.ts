//Hacer un programa que dado 
//un arreglo ordenado creciente de 
//enteros
//de tamaño 10 que se encuentra 
//precargado, solicite al usuario
// un numero
//entero y lo inserte en
// el arreglo manteniendo su orden.


let arreglocargado:number[]=new Array(10);

arreglocargado[0]=1;
arreglocargado[1]=2;
arreglocargado[2]=3;
arreglocargado[3]=4;
arreglocargado[4]=5;
arreglocargado[5]=6;
arreglocargado[6]=7;
arreglocargado[7]=8;
arreglocargado[8]=9;
arreglocargado[9]=10;

let numerodeusuario:number[]=new Array(2);
for (let index = 0; index < numerodeusuario.length; index++) {
  numerodeusuario[index]=Number(prompt("Ingrese un nùmero"))
  arreglocargado[index]=arreglocargado.push(numerodeusuario[index]);

}
console.log(arreglocargado);