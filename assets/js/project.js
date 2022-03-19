let projectSection = document.querySelector('[data-project]')

const info = [
	{
		'image': 'assets/img/projeto/projeto-criptdex.png',
		'title': 'Criptdex - Decodificador',
		'description': 'Codificado de texto utilizando um algoritimo proposto pela Alura.',
		'github_link': 'https://github.com/ygorfsguilherme/criptdex',
		'view_app': 'https://ygorfsguilherme.github.io/criptdex/',
	},

	{
		'image': 'assets/img/projeto/projeto-jogo-da-forca.png',
		'title': 'Jogo da forca',
		'description': 'Jogo desenvolvido no projeto ONE - Oracle Next Education e Alura.',
		'github_link': 'https://github.com/ygorfsguilherme/jogo-da-forca',
		'view_app': 'https://ygorfsguilherme.github.io/jogo-da-forca/',
	},

	{
		'image': 'assets/img/projeto/projeto-pyformail.png',
		'title': 'Pyformail',
		'description': 'Api de envio de formulario para o email utilizando python e flask.',
		'github_link': 'https://github.com/ygorfsguilherme/api-pyformail',
		'view_app': 'https://github.com/ygorfsguilherme/api-pyformail#o-que-pyformail',
	},

]

function creatorCard(image, title, description, github_link, view_app){
	const newCard = document.createElement('div');
	newCard.classList.add('project__cards');

	const content = `<div class="project__card">
						<img class="project__card__image" src="${image}" alt="" >

						<div class="project__card__body">
							<h4 class="project__card__title">
								${title}
							</h4>
							<p class="project__card__description">
								${description}
							</p>
						</div>
					</div>

					<div class="project__card__coding">

						<a class="project__card__more" target="_blank" href="${view_app}">
							<img src="assets/img/icon/view-app.svg" alt="">
						</a>

						<a class="project__card__more" target="_blank" href="${github_link}">
							<img src="assets/img/icon/coding.svg" alt="">
						</a>	

					</div>`;

	newCard.innerHTML = content;
	return newCard
}

for(let i = 0; i < info.length; i++ ){
	projectSection.appendChild(creatorCard(
		info[i].image,
		info[i].title,
		info[i].description,
		info[i].github_link,
		info[i].view_app,
		))
};