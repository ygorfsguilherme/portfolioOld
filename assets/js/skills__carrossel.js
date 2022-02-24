let quantidade_card_skills = 3;
let index_skills = 0;
let card_skills = document.querySelector(".skills");

function carrosselSkills(){
	index_skills++
	if(index_skills > quantidade_card_skills -1){
		index_skills = 0;
	}

	let posicao_skills = -index_skills * 300 + "px";
	card_skills.style.transform = 'translateX('+posicao_skills+')'
}

setInterval(carrosselSkills, 3500);

