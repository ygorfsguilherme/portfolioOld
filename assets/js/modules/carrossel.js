let quantidade_card_skills = 5;
let index_skills = 0;
let card_skills = document.querySelector(".skills");
let posicao_skills = 74

let quantidade_card_hobbies = 3;
let index_hobbies = 0;
let card_hobbies = document.querySelector(".hobbies");
let posicao_hobbies = 300

function carrosselHobbies(){
	index_hobbies++
	if(index_hobbies > quantidade_card_hobbies -1){
		index_hobbies = 0;
	}

	let posicao_x = -index_hobbies * posicao_hobbies + "px";
	card_hobbies.style.transform = 'translateX('+posicao_x+')'
}

function carrosselSkills(){
	index_skills++
	if(index_skills > quantidade_card_skills -1){
		index_skills = 0;
	}

	let posicao_x = -index_skills * posicao_skills + "px";
	card_skills.style.transform = 'translateX('+posicao_x+')'
}

setInterval(carrosselSkills, 3500);
setInterval(carrosselHobbies, 3500);

