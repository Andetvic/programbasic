var pokemonBD = [];
var esPrimero = true;

// Creando clase pokemon
function createPokemon(_codigo, _nombre, _descripcion, _vida, _ataque){
	var pokemon = {
		codigo: _codigo,
		nombre: _nombre,
		descripcion: _descripcion,
		vida: _vida,
		ataque: _ataque
	};
		return pokemon;
}

//creando BD de pokemones
pokemonBD.push(createPokemon('001', 'Bulbasaur', 'Una rara semilla le fue plantada en el lomo al nacer. La planta brota y crece con este Pokémon.', '+2', '+3'));
pokemonBD.push(createPokemon('002', 'Ivysaur', 'Este Pokémon tiene un bulbo en el lomo. Dicen que, al absorber nutrientes, el bulbo se transforma en una flor grande.', '+3', '+3'));
pokemonBD.push(createPokemon('003', 'Venusaur', 'Llena su cuerpo de energía con los rayos solares que captan los anchos pétalos de su flor.', '+3', '+4'));
pokemonBD.push(createPokemon('004', 'Charmander', 'La llama de su cola indica la fuerza vital de Charmander. Será brillante si está sano.', '+2', '+3'));
pokemonBD.push(createPokemon('005', 'Charmeleon', 'Suele usar la cola para derribar a su rival. Cuando lo tira, se vale de sus afiladas garras para acabar con él.', '+3', '+3'));
pokemonBD.push(createPokemon('006', 'Charizard', 'Cuando lanza una descarga de fuego supercaliente, la roja llama de su cola brilla más intensamente.', '+3', '+4'));
pokemonBD.push(createPokemon('007', 'Squirtle', 'Se protege con su caparazón y luego contraataca lanzando agua a presión cuando tiene oportunidad.', '+2', '+3'));
pokemonBD.push(createPokemon('008', 'Wartortle', 'Si es golpeado, esconderá su cabeza. Aun así, su cola puede seguir golpeando.', '+3', '+3'));
pokemonBD.push(createPokemon('009', 'Blastoise', 'Para acabar con su enemigo, lo aplasta con el peso de su cuerpo. En momentos de apuro, se esconde en el caparazón.', '+3', '+4'));
pokemonBD.push(createPokemon('010', 'Caterpie', 'Para protegerse despide un hedor horrible de sus antenas, con el que repele a sus enemigos.', '+2', '+2'));
pokemonBD.push(createPokemon('011', 'Metapod', 'Su frágil cuerpo está recubierto de una coraza dura como el acero. Permanece quieto en su desarrollo.', '+2', '+1'));
pokemonBD.push(createPokemon('012', 'Butterfree', 'Adora el néctar de las flores. Puede localizar hasta las más pequeñas cantidades de polen.', '+3', '+2'));
pokemonBD.push(createPokemon('013', 'Weedle', 'Suele habitar bosques y praderas. Tiene un afilado y venenoso aguijón de unos 5 cm encima de la cabeza.', '+2', '+2'));
pokemonBD.push(createPokemon('014', 'Kakuna', 'Casi incapaz de moverse, este Pokémon solo puede endurecer su caparazón para protegerse.', '+2', '+1'));
pokemonBD.push(createPokemon('015', 'Beedrill', 'Tiene 3 aguijones venenosos en sus patas y cola. Suelen pinchar a sus enemigos repetidas veces.', '+3', '+6'));
pokemonBD.push(createPokemon('016', 'Pidgey', 'Muy común en bosques y selvas. Aletea al nivel del suelo para levantar la gravilla.', '+2', '+2'));
pokemonBD.push(createPokemon('017', 'Pidgeotto ', 'Tiene unas garras desarrolladas. Puede atrapar un Exeggcute y transportarlo desde una distancia de casi 100 km.', '+3', '+3'));
pokemonBD.push(createPokemon('018', 'Pidgeot', 'Cuando caza, vuela muy deprisa a ras del agua y sorprende a inocentes presas como Magikarp.', '+3', '+4'));
pokemonBD.push(createPokemon('019', 'Rattata', 'Vive allí donde haya comida disponible. Busca todo el día, sin descanso, algo comestible.', '+2', '+4'));
pokemonBD.push(createPokemon('020', 'Raticate', 'Lima sus colmillos royendo objetos duros. Con ellos puede destruir incluso paredes de hormigón.', '+4', '+6'));
pokemonBD.push(createPokemon('021', 'Spearow', 'Muy protector de su territorio, mueve sus cortas alas sin descanso para lanzarse a toda velocidad.', '+2', '+3'));
pokemonBD.push(createPokemon('022', 'Fearow', 'Con sus enormes y magníficas alas, puede seguir volando sin tener que aterrizar para descansar.', '+3', '+6'));
pokemonBD.push(createPokemon('023', 'Ekans', 'Cuanto más viejo, más crece este Pokémon. Por la noche, descansa en las ramas de los árboles.', '+2', '+3'));
pokemonBD.push(createPokemon('024', 'Arbok', 'El dibujo que tiene en la panza aterroriza. Los rivales más débiles salen huyendo al verlo.', '+3', '+4'));
pokemonBD.push(createPokemon('025', 'Pikachu', 'Levanta su cola para vigilar los alrededores. A veces, puede ser alcanzado por un rayo en esa pose.', '+2', '+3'));
pokemonBD.push(createPokemon('026', 'Raichu', 'Cuando se carga de electricidad, sus músculos se tensan y se vuelve más agresivo de lo normal.', '+3', '+6'));
pokemonBD.push(createPokemon('027', 'Sandshrew', 'Este Pokémon permanece bajo tierra. Si se siente amenazado, se enrosca para defenderse.', '+2', '+4'));
pokemonBD.push(createPokemon('028', 'Sandslash', 'Si cava a gran velocidad, puede que se le caigan las garras y púas. Vuelven a crecerle en un día.', '+3', '+6'));
pokemonBD.push(createPokemon('029', 'Nidoran hembra', 'Aunque pequeñas, sus venenosas púas son muy peligrosas. Tienen un cuerno más pequeño que los machos.', '+2', '+3'));
pokemonBD.push(createPokemon('030', 'Nidorina', 'Tiene un carácter afable. Emite ondas ultrasónicas para confundir al enemigo.', '+3', '+3'));
pokemonBD.push(createPokemon('031', 'Nidoqueen', 'Usa su cuerpo duro y escamoso para sellar la entrada a su madriguera y protegerse de los depredadores.', '+4', '+6'));
pokemonBD.push(createPokemon('032', 'Nidoran macho', 'Saca las orejas por encima de la hierba para explorar el territorio. Le protege su cuerno venenoso.', '+2', '+3'));
pokemonBD.push(createPokemon('033', 'Nidorino', 'Levanta sus grandes orejas para vigilar. Si detecta algo, atacará de inmediato.', '+3', '+4'));
pokemonBD.push(createPokemon('034', 'Nidoking', 'Es fácil reconocerlo por tener una dura piel y un gran cuerno lleno de peligrosísimo veneno.', '+3', '+6'));
pokemonBD.push(createPokemon('035', 'Clefairy', 'Se dice que la felicidad llegará a quien vea a un grupo de Clefairy bailando a la luz de la luna llena.', '+6', '+4'));

//Esta funcion mostrara al pokemon
function showPokemon(i){

	var node = document.getElementById('div_image');
	var node_datos = document.getElementById('div_datos');
	pokemonSel = pokemonBD[i];
	var codigo = pokemonSel.codigo;
	var image = 'images/' + codigo + '.png'
			
	var texto = '<h2>' + pokemonSel.codigo +  ' ' + pokemonSel.nombre + '</h2>';
	texto += 'Descripción : <br />' + pokemonSel.descripcion;
	texto += '<br>Puntos de ataque : ' + pokemonSel.ataque;

	var imageObj = new Image();
	imageObj.src = image;
	imageObj.height = '300';
	imageObj.width = '300';

	if(!esPrimero){
		while (node.hasChildNodes()) {
			node.removeChild(node.lastChild);
		}
		}else{
			esPrimero = false;
		}
		node.appendChild(imageObj);

		try{
			node_datos.innerHTML = texto;
		}catch(e){
			node_datos.text = texto;
		}
	}