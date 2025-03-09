
function mostrarOcultarMenu(){
	if(menuVisible){
		document.getElementById("nav").classList ="";
		menuVisible = false;
	}
	else{
		document.getElementById("nav").classList ="responsive";
		menuVisible = true;
	}
}

function seleccionar(){
	document.getElementById("nav").classList = "";
	menuVisible=false;
}

let habilidadActivada = false;

function efectoHabilidades() {
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if (distancia_skills >= 300 && !habilidadActivada) {
        habilidadActivada = true; // Asegúrate de que solo se ejecute una vez
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("html"); // Agrega esto
        habilidades[2].classList.add("css"); // Agrega esto
        habilidades[3].classList.add("software"); // Y así sucesivamente
        habilidades[4].classList.add("sql");
        habilidades[5].classList.add("c");
        habilidades[6].classList.add("net");
        habilidades[7].classList.add("comunicacion");
        habilidades[8].classList.add("trabajoenequipo");
        habilidades[9].classList.add("dedicacion");
        habilidades[10].classList.add("autodidacta");
        habilidades[11].classList.add("creatividad");
        habilidades[12].classList.add("resolutivo");
        habilidades[13].classList.add("responsabilidad");
    }
}

window.onscroll = function(){
    efectoHabilidades();
}
