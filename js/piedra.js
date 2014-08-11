//Esta funcion genera un numero aleatorio enntre un rango de enteros
function aleatorio(minimo, maximo){
	var numero = Math.floor(Math.random() * (maximo - minimo + 1) + minimo);
	return numero;
}

//esta funcion permite validad si se presiono Enter
function validateEnter(e) {
	var key=e.keyCode || e.which;
	if (key==13){ return true; } else { return false; }
}

//Esta función se activa la hacer click en el boton "jueguemos!!"function valor(){
function valor(){
	//Se crea la variable que llevara como valor el numero aleatorio obtenido de la función aleatorio
	var opcionMaquina = aleatorio(0,2);
	//Aqui muestro la variable en la consola para ve que esta dando como resultado
	console.log("Maquina : " + opcionMaquina);
	//Se obtiene el valor del usuario
	var opcionUsuario = (document.getElementById("opcionUsuario").value)-1;
	console.log("Usuario : " + opcionUsuario);
	//Se condiciona para que el numero intruducido este entre el rango de numeros esperados
	if(opcionUsuario > 3 || opcionUsuario < 0){
		//En caso de que no sea un numero entre el 0-4 se pide otra ve ingresa un numero
		var res2 = "<h4>Ingresa un numero entre el 1 y el 3</h4>";
		document.getElementById("desafio").innerHTML = res2;
	}
	else{
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
		var ganaste = "<h4>Ganaste!</h4>"
		var perdiste = "<h4>Perdiste!</h4>"
		var empate = "<h4>Empate!</h4>"
		
		//Se crea la condicion "if" en caso que sea un empate
		if (usuario === maquina){
			document.getElementById("resultado").innerHTML = empate;
		}
		//Se crean las condiciones en las que el usuario gane y se muestran
		/*else if( usuario == "Piedra" && (opcionMaquina == "Tijeras" || opcionMaquina == "Lagarto")){
			document.getElementById("resultado").innerHTML = ganaste;
		}
		else if( usuario == "Papel" && (opcionMaquina == "Piedra" || opcionMaquina == "Spock")){
			document.getElementById("resultado").innerHTML = ganaste;
		}
		else if( usuario == "Tijeras" && (opcionMaquina == "Papel" || opcionMaquina == "Lagarto")){
			document.getElementById("resultado").innerHTML = ganaste;
		}
		else if( usuario == "Lagarto" && (opcionMaquina == "Spock" || opcionMaquina == "Papel")){
			document.getElementById("resultado").innerHTML = ganaste;
		}
		else if( usuario == "Spock" && (opcionMaquina == "Tijeras" || opcionMaquina == "Piedra")){
			document.getElementById("resultado").innerHTML = ganaste;
		}*/
		else if( usuario < maquina ){
			document.getElementById("resultado").innerHTML = ganaste;
		}
		//Se crean las condiciones en las que el usuario pueda perder y se muestran
		/*else if( usuario == "Spock" && (opcionMaquina == "Lagarto" || opcionMaquina == "Papel")){
			document.getElementById("resultado").innerHTML = perdiste;
		}
		else if( usuario == "Lagarto" && (opcionMaquina == "Tijeras" || opcionMaquina == "Piedra")){
			document.getElementById("resultado").innerHTML = perdiste;
		}
		else if( usuario == "Tijeras" && (opcionMaquina == "Piedra" || opcionMaquina == "Spock")){
			document.getElementById("resultado").innerHTML = perdiste;
		}
		else if( usuario == "Papel" && (opcionMaquina == "Tijeras" || opcionMaquina == "Lagarto")){
			document.getElementById("resultado").innerHTML = perdiste;
		}
		else if( usuario == "Piedra" && (opcionMaquina == "Papel" || opcionMaquina == "Spock")){
			document.getElementById("resultado").innerHTML = perdiste;
		}*/
		else if( usuario > maquina ){
			document.getElementById("resultado").innerHTML = perdiste;
		}
	}
}