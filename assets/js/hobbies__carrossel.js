let quantidade_card_hobbies = 3;
let index_hobbies = 0;
let card_hobbies = document.querySelector(".hobbies");

function carrosselHobbies(){
	index_hobbies ++
	if(index_hobbies > quantidade_card_hobbies -1){
		index_hobbies = 0;
	}

	let posicao_hobbies = -index_hobbies * 300 + "px";
	card_hobbies.style.transform = 'translateX('+posicao_hobbies+')'
}

setInterval(carrosselHobbies, 4000);