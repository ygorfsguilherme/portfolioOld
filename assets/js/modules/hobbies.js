import {Card} from './card.js';
import {Carrossel} from './carrossel.js';

const infoHobbies = [
	{	

		'$image': 'assets/img/icon/hobbies/leitura.png',
		'$message': 'Ler é algo que me faz criativo, adoro ler bons manga.',
	},

	{	

		'$image': 'assets/img/icon/hobbies/cozinha.png',
		'$message': 'Gosto de mistura ingredientes e ver algo surgindo.',
	},

	{	

		'$image': 'assets/img/icon/hobbies/filme.png',
		'$message': 'Adoro assistir filmes e series. Principalmente de ficção cientifica.',
	},

]

const templateHobbies = `
							<div class="c-hobbies__card__icon icon">
								<img src="$image" alt="" height="64">
							</div>
							<p class="c-hobbies__card__text">$message</p>`;


const hobbies = {
	'target': document.querySelector('[data-hobbies]'),
	'countCard' : 3,
	'index' : 0,
	'position' : 300,
	'limite': 1,
};

const hobbiesCard = new Card(infoHobbies, templateHobbies, '[data-hobbies]', 'c-hobbies__card')
hobbiesCard.create()

const hobbieCarrossel = new Carrossel(hobbies);
setInterval(()=>{
	hobbieCarrossel.move()
}, 3500);