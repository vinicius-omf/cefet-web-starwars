// Seu javascript aqui :)
// Use a Star Wars API: https://swapi.co/
// para carregar:
//  - A lista de filmes
//  - A introdução de cada filme, quando ele for clicado
function buscarFilmes() {
   

  	$.ajax({
		url: 'https://swapi.co/api/films/',
		method: 'GET',
		success: function(resposta){
			atualizaLista(resposta);
	}});

}

function atualizaLista(data) {
    for(let i=0; i< data.count; i++){

    	let urlep = data.results[i].url;
    	let epid = "Episode " + data.results[i].episode_id;

    	conteudo = "<li onclick='buscarIntro(" + urlep+ ")'>" + epid + "</li>"
    	$("#movies ul").append(conteudo);
    }
}

function buscarIntro(data) {
	alert(data);
}

$(document).ready(
	 buscarFilmes()

);