/*var menu = ["productos","ventas","contacto"];
document.write(menu);*/

/*var dofa = [["Fortalezas","Oportunidades"],["Debilidades","Amenazas"]];
document.write(dofa[1][1]);*/

function explosion()
{
	alert("Boom!");
	document.write("<h1>Boom!</h1> <p>Elegiste un area minada</p>");
}
function ganaste()
{
	document.write("<h1>Ganaste!</h1>");
}
//1 = bomba, 0 = No ahi bomba
var campo = [ [ 1 , 0 , 0 ] , [ 0 , 1 , 0 ] , [ 1 , 1 , 1 ] ];
/*if (campo[1][0] == 1)
{
	explosion();
}
else
{
	ganaste()
}*/
var textos = ["Cesped","Bomba"];
var x,y;
alert("Elije 2 posicion entre 0 y 2");
x = prompt("Posicion x");
y = prompt("Posicion y");

if ( x<3 && y<3 )
{
	var posicion = campo[x][y];
	document.write( "elegiste " + textos[posicion]);
	if( posicion == 1 )
	{
		explosion();
	}
	else
	{
		ganaste();
	}
}
else
{
	document.write("Saliste del campo");
	explosion();
}


