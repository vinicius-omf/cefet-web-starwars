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

	data.results.sort(function(a,b){ return a.episode_id - b.episode_id});
    for(let i=0; i< data.count; i++){

    	let urlep = '"'+data.results[i].url+'"';
    	let fucao = "'buscarIntro("+ urlep +")'";
    	let epid = "Episode " + data.results[i].episode_id;

    	conteudo = "<li onclick="+ fucao + ">" + epid + "</li>"
    	$("#movies ul").append(conteudo);
    }
}

function buscarIntro(url) {
	$.ajax({
		url: url,
		method: 'GET',
		success: function(resposta){
			atualizarIntro(resposta);
	}});
}

function atualizarIntro(data){
	$(".reading-animation").html(data.opening_crawl);
}

$(document).ready(
	 buscarFilmes()
);