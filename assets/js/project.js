let projectSection = document.querySelector('[data-project]')

const info = [
	{
		'image': 'assets/img/projeto/projeto-criptdex.png',
		'title': 'Criptdex - Decodificador',
		'description': 'Codificado de texto utilizando simples.',
		'github_link': 'https://github.com/ygorfsguilherme/criptdex',
		'view_app': 'https://ygorfsguilherme.github.io/criptdex/',
	},

	{
		'image': 'assets/img/projeto/projeto-jogo-da-forca.png',
		'title': 'Jogo da forca',
		'description': 'Para jogar sozinho ou com amigo.',
		'github_link': 'https://github.com/ygorfsguilherme/jogo-da-forca',
		'view_app': 'https://ygorfsguilherme.github.io/jogo-da-forca/',
	},

	{
		'image': 'assets/img/projeto/projeto-pyformail.png',
		'title': 'Pyformail',
		'description': 'Envia formulario de contato para o email',
		'github_link': 'https://github.com/ygorfsguilherme/api-pyformail',
		'view_app': 'https://github.com/ygorfsguilherme/api-pyformail#o-que-pyformail',
	},

	{
		'image': 'assets/img/projeto/projeto-pyformail.png',
		'title': 'Pyformail',
		'description': 'Envia formulario de contato para o email',
		'github_link': 'https://github.com/ygorfsguilherme/api-pyformail',
		'view_app': 'https://github.com/ygorfsguilherme/api-pyformail#o-que-pyformail',
	},
]

function creatorCard(image, title, description, github_link, view_app){
	const newCard = document.createElement('div');
	newCard.classList.add('project__card');

	const content = `
					<img class="project__card__image" src="${image}" alt="" >

					<div class="project__card__footer">

						<div class="project__card__description">
							<div class="project__card__title" >
								${title}
							</div>

							<p class="project__card__subtitle">
								${description}
							</p>
						</div>
						
						<div class="project__card__links">
							<a class="project__card__link" target="_blank" href="${view_app}">
								<img class="project__card__link__icon" src="assets/img/icon/view-app.svg" alt="">
							</a>

							<a class="project__card__link" target="_blank" href="${github_link}">
								<img class="project__card__link__icon" src="assets/img/icon/coding.svg" alt="">
							</a>
						</div>

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