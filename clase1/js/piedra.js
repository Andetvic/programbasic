//Esta funcion genera un numero aleatorio enntre un rango de enteros
function aleatorio(minimo, maximo){
	var numero = Math.floor(Math.random() * (maximo - minimo + 1) + minimo);
	return numero;
}
var puntajeUsuario = 0;
var puntajeMaquina = 0;
//Esta función se activa la hacer click en el boton "jueguemos!!"function valor(){
function valor(ctrl){
	//Se crea la variable que llevara como valor el numero aleatorio obtenido de la función aleatorio
	var opcionMaquina = aleatorio(0,2);
	//Aqui muestro la variable en la consola para ve que esta dando como resultado
	//console.log("Maquina : " + opcionMaquina);
	//Se obtiene el valor del usuario
	var opcionUsuario = -1;
	try{
		opcionUsuario = ctrl.dataset.opcionUsuario;
	}catch(e){
		opcionUsuario = ctrl.getAttribute("data-opcion-usuario");
	}
	//console.log("Usuario : " + opcionUsuario);
	//Se condiciona para que el numero intruducido este entre el rango de numeros esperados

		//En casi de que si sea un numero esperado, se guardan en otra variable con el un valor del array "opciones"
		//var opciones = ["Piedra","Papel","Tijeras","Lagarto","Spock"];
		var opciones = ["<img src='images/Piedra.png' alt='Piedra'><figcaption>Piedra</figcaption>","<img src='images/Tijera.png' alt='Tijera'><figcaption>Tijera</figcaption>","<img src='images/Papel.png' alt='Papel'><figcaption>Papel</figcaption>"];
		var usuario = opciones[opcionUsuario];
		var maquina = opciones[opcionMaquina];
		
		//Se crean las avariabls a mostrar en caso de ganar, perder o empatar
		var ganaste = "<h2 class='ScoreResult'>Ganaste!</h2>"
		var perdiste = "<h2 class='ScoreResult'>Perdiste!</h2>"
		var empate = "<h2 class='ScoreResult'>Empate!</h2>"
		
		//Se crea la condicion "if" en caso que sea un empate
		if (usuario === maquina){
			resultado = empate;
		}
		//Se crean las condiciones en las que el usuario gane y se muestran
		else if( (opcionUsuario==0 && opcionMaquina==1) || (opcionUsuario==1 && opcionMaquina==2) || (opcionUsuario==2 && opcionMaquina==0)){
			resultado = ganaste;
			puntajeUsuario = puntajeUsuario+1;
			try{
			console.log ("U:"+puntajeUsuario);
			}catch(e){}
		}
		//ahora solo nos queda mostrar el resultado de perder
		else {
			resultado = perdiste;
			puntajeMaquina = puntajeMaquina+1;
			try{
			console.log ("M:"+puntajeMaquina);
			}catch(e){}
		}
		
		var ctrlResultado = document.getElementById("resultado");
		try{
			ctrlResultado.innerHTML = resultado;
		}catch(e){
			ctrlResultado.text = resultado;
		}

		//aqui vemos que recibimos despues del arreglo opciones
		//console.log("Usuario y Maquina: " + usuario + " " +maquina);
		//Se muestra al usuario el valor escogido y el valor que opcionMaquina escogio
		var res = "<figure class='ScoreOption'>Jugador " + puntajeUsuario + " <br />" + usuario + "</figure><figure class='ScoreOption'>Maquina " + puntajeMaquina + " <br />" + maquina +"<figure>";

		var ctrlDesafio = document.getElementById("desafio");
		try{
			ctrlDesafio.innerHTML = res;
		}catch(e){
			ctrlDesafio.text = res;
		}
}