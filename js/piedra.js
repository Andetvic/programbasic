//Esta funcion genera un numero aleatorio enntre un rango de enteros
function aleatorio(minimo, maximo){
	var numero = Math.floor(Math.random() * (maximo - minimo + 1) + minimo);
	return numero;
}

//Esta función se activa la hacer click en el boton "jueguemos!!"function valor(){
function valor(ctrl){
	//Se crea la variable que llevara como valor el numero aleatorio obtenido de la función aleatorio
	var opcionMaquina = aleatorio(0,2);
	//Aqui muestro la variable en la consola para ve que esta dando como resultado
	console.log("Maquina : " + opcionMaquina);
	//Se obtiene el valor del usuario
	var opcionUsuario = ctrl.dataset.opcionUsuario;
	console.log("Usuario : " + opcionUsuario);
	//Se condiciona para que el numero intruducido este entre el rango de numeros esperados

		//En casi de que si sea un numero esperado, se guardan en otra variable con el un valor del array "opciones"
		//var opciones = ["Piedra","Papel","Tijeras","Lagarto","Spock"];
		var opciones = ["Piedra <img src='images/Piedra.png' alt='Piedra'>","Tijera <img src='images/Tijera.png' alt='Tijera'>","Papel <img src='images/Papel.png' alt='Papel'>"];
		var usuario = opciones[opcionUsuario];
		var maquina = opciones[opcionMaquina];
		//aqui vemos que recibimos despues del arreglo opciones
		console.log("Usuario y Maquina: " + usuario + " " +maquina);
		//Se muestra al usuario el valor escogido y el valor que opcionMaquina escogio
		var res = "<h4>Jugador: " + usuario + "<br> Maquina: " + maquina +"</h4>";
		document.getElementById("desafio").innerHTML = res;
		//Se crean las avariabls a mostrar en caso de ganar, perder o empatar
		var ganaste = "<h2>Ganaste!</h2>"
		var perdiste = "<h2>Perdiste!</h2>"
		var empate = "<h2>Empate!</h2>"
		
		//Se crea la condicion "if" en caso que sea un empate
		if (usuario === maquina){
			document.getElementById("resultado").innerHTML = empate;
		}
		//Se crean las condiciones en las que el usuario gane y se muestran
		else if( (opcionUsuario==0 && opcionMaquina==1) || (opcionUsuario==1 && opcionMaquina==2) || (opcionUsuario==2 && opcionMaquina==0)){
			document.getElementById("resultado").innerHTML = ganaste;
		}
		//ahora solo nos queda mostrar el resultado de perder
		else {
			document.getElementById("resultado").innerHTML = perdiste;
		}
	
}