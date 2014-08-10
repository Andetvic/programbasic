var piedra = 0;
var papel = 1;
var tijera = 2;

var opcionUsuario;
var opcionMaquina;

opcionUsuario = prompt("¿Que elijes?\nPiedra: 0\nPapel: 1\nTijera: 2", 0);
opcionMaquina = Math.floor((Math.random() * 2));

if(opcionUsuario == 0)
{
	alert("Elejiste piedra!");
}
else if(opcionUsuario == 1)
{
	alert("Elejiste papel!");
}
else if(opcionUsuario == 2)
{
	alert("Elejiste tijera!");
}
else 
{
	alert("Numero no valido");
}