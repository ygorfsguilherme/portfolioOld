let educationSection = document.querySelector('[data-education]')

const infoEducation = [
	{
		'title': 'Manutenção de Micro Computadores',
		'titleImage' : './assets/img/icon/education/computer.svg',
		'school': 'CECAPI - Centro de Capacitação Profissional',
		'date': '19/08/2015',
		'description': 'Codificado de texto utilizando simples.',
	},

	{
		'title': 'Python do Basico ao Avançado',
		'titleImage' : './assets/img/icon/education/python.svg',
		'school': 'Udemy',
		'date': '19/08/2021',
		'description': 'Foi apresendado Django, PyQT5, Selenium, Regexp, Mysql e SQL.',
	},
	
	{
		'title': 'Django para web',
		'titleImage' : './assets/img/icon/education/django.svg',
		'school': 'Udemy',
		'date': '20/09/2021',
		'description': 'Teve como objetivo aprende tecnologia para web como HTML5, CSS3, Bootstrap, Javascript, ES6, JQuery, Python, Django.',
	},
	
	{
		'title': 'Desenvolvimento web e java',
		'titleImage' : './assets/img/icon/education/java.svg',
		'school': 'Alura',
		'date': 'Cursando',
		'description': 'prendendo tecnologia para web como HTML5, CSS3, Javascript e metodologia agil e java.',
	},
]

function creatorCard(title, titleImage, school, date, description,){
	const newCard = document.createElement('div');
	newCard.classList.add('c-education__card');

	const content = `
					  <div class="c-education__card__header">
					    <span class="c-education__card__title">${title}</span>
					    <img src="${titleImage}" class="c-education__card__image">
					  </div>
					   
					  <div class="c-education__card__body">
					    <p>${school}</p>
					    <p>${date}</p>
					    <p>${description}</p>
					    <a class="c-education__card__button">Certificado</a>
					  </div>`;

	newCard.innerHTML = content;
	return newCard
}

for(let i = 0; i < infoEducation.length; i++ ){
	educationSection.appendChild(creatorCard(
		infoEducation[i].title,
		infoEducation[i].titleImage,
		infoEducation[i].school,
		infoEducation[i].date,
		infoEducation[i].description,
		))
};