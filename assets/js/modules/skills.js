
import {Card} from './card.js'
import {Carrossel} from './carrossel.js'

const infoSkills = [
	{
		'$image' : './assets/img/icon/skills/html5.svg',
	},

	{
		'$image' : './assets/img/icon/skills/python.svg',
	},

	{
		'$image' : './assets/img/icon/skills/javascript.svg',
	},

	{
		'$image' : './assets/img/icon/skills/css3.svg',
	},

	{
		'$image' : './assets/img/icon/skills/mysql.svg',
	},

	{
		'$image' : './assets/img/icon/skills/flask.svg',
	},

]

const templateSkills = `
				<div class="c-skills__card__icon icon">
					<img src="$image" alt="" height="64">
				</div>`;

const skills = {
	'target': document.querySelector('[data-skills]'),
	'countCard' : infoSkills.length,
	'index' : 0,
	'position' : 90,
	'limite': 3,
};

const skillCard = new Card(infoSkills, templateSkills, '[data-skills]', 'c-skills__card');
skillCard.create();

const skillCarrossel = new Carrossel(skills);
setInterval(()=>{
	skillCarrossel.move()
}, 3500);
