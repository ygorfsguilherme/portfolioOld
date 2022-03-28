import {Carrossel} from './carrossel.js'

const hobbies = {
	'target': document.querySelector('.hobbies'),
	'countCard' : 3,
	'index' : 0,
	'position' : 300,
	'limite': 1,
};

const hobbieCarrossel = new Carrossel(hobbies);
setInterval(()=>{
	hobbieCarrossel.move()
}, 3500);