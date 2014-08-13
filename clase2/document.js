//Document Object Model

/*alert("funciona")
navigator, window, document
Variables van dentro de document
Funciones van dentro de document
Math es un objeto que controla las matematicas del navegador
floor es una funcion que me devuelve solo la parte entera
var maxima;
maxima = Math.max(5,23,4,5,12,24,23,100);
document.write(maxima);

var pos =navigator.getCurrentPosition( mostrar );
function mostrar(pos)
{
	document.write(pos.coords.latitude + "," + pos.coords.latitude)
}
buscar Asignacion por valor asignacion por referencia
*/

/*function Pokemon(nombrePoke,vidaPoke,ataPoke)
{
	var estructuraPokemon =
	{
		nombre: nombrePoke,
		vida:  vidaPoke,
		ataque: ataPoke
	};
	return estructuraPokemon;
}

var pikachu = Pokemon("Pikachu",100,55);
var bulbasaur = Pokemon("Bulbasaur",90,50);

console.log(bulbasaur);

*/
//llenar datos de prueba vida ataque y agrege la imagen
//llenar las bombas de manera aleatoria

//forma correcta de crear pokemones
function Pokemon(n,v,a)
{
	this.grito = "Pika!"
	this.nombre = n;
	this.vida = v;
	this.ataque = a;
	this.gritar = function()
	{
		alert("Pika")
	}
}

function inicio()
{
	var pikachu = new Pokemon("Pikachu",100,55);
	nombrePokemon.innerText = pikachu.nombre;
}