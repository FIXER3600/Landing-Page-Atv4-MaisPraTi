
const swiperBanner = new Swiper('.swiper-banner:not(#testemunhos)', {
	navigation: {
	    nextEl: '.swiper-button-next',  // IDs exclusivos para os botões do banner
	    prevEl: '.swiper-button-prev',
	},
	pagination: {
	    el: '.swiper-pagination',  // ID exclusivo para a paginação do banner
	    clickable: true,
	},
    });

    // Inicializar AOS.js
    AOS.init();
    

    // Array de objetos com os dados dos cards
const cardData = [
	{
	    image: './assets/sao-card.webp',
	    title: 'https://media.graphassets.com/FfqY7jo7SW6GPKqEaf4a',
	    description: 'Worlds Collide. Blades Unite.',
	    button1Text: 'Available Now',
	    button2Text: 'Learn More',
	    button1Link: 'https://www.bandainamcoent.com/games/sword-art-online-fractured-daydream#editions',
	    button2Link: 'https://www.bandainamcoent.com/games/sword-art-online-fractured-daydream'
	},
	{
	    image: './assets/tekken8-card.webp',
	    title: 'https://media.graphassets.com/fE87bCPuSPiwO1oMBY2i',
	    description: 'Fist Meets Fate',
	    button1Text: 'Buy Now',
	    button2Text: 'Learn More',
	    button1Link: 'https://tekken.com/pt_br/purchase',
	    button2Link: 'https://tekken.com/pt_br/'
	},
	{
		image: './assets/home-featured-game-bleach-rebirth-of-souls-card.webp',
		title: 'https://media.graphassets.com/g7Bb2rQbe3YNddwwItuA',
		description: 'Accept Your Soul and Reverse Fate',
		button1Text: 'Wishlist Now',
		button2Text: 'Learn More',
		button1Link: 'https://www.bandainamcoent.com/games/bleachros#purchase',
		button2Link: 'https://www.bandainamcoent.com/games/bleachros'
	    },
	    {
		image: './assets/home-featured-games-dragon-ball-sparking-zero-desktop-center.webp',
		title: './assets/dbsz-logo.webp',
		description: 'BREAK THE HEAVENS.',
		button1Text: 'Available Now',
		button2Text: 'Learn More',
		button1Link: 'https://dragonballsparkingzero.com/pt_br/purchase?',
		button2Link: 'https://dragonballsparkingzero.com/pt_br/?'
	    },
	    {
		image: './assets/Home-Featured-Games-Little-Nightmares-3-card.webp',
		title: 'https://media.graphassets.com/nsSE2eO0TE6ZFrDYPuVj',
		description: 'Follow the Journey of Low & Alone',
		button1Text: 'Wishlist Now',
		button2Text: 'Learn More',
		button1Link: 'https://www.bandainamcoent.com/games/little-nightmares-3#editions',
		button2Link: 'https://www.bandainamcoent.com/games/little-nightmares-3'
	    },
	    {
		image: './assets/homepage-featured-synduality-echo-of-ada-card.webp',
		title: 'https://media.graphassets.com/5hs9qehMRMefdx3YZQeg',
		description: 'Embark On a Dystopian Futuristic Adventure',
		button1Text: 'Pre-Order Now',
		button2Text: 'Learn More',
		button1Link: 'https://www.bandainamcoent.com/games/synduality-echo-of-ada#editions',
		button2Link: 'https://www.bandainamcoent.com/games/synduality-echo-of-ada'
	    },
	// Adicione mais objetos aqui para novos cards
    ];
    
    // Função para criar os cards dinamicamente
    function createCards() {
	const container = document.getElementById('servicos-cards');
	
	cardData.forEach(card => {
	    // Criando o HTML do card
	    const cardHTML = `
		<div class="card">
		    <img src="${card.image}" alt="${card.title}">
		    <div class="card-content">
		    	<img src="${card.title}" alt="" class="card-image">
			<div class="card-buttons">
			<div>
			<p style="font-weight:bold;">${card.description}</p>
			</div>
			<div style="display:flex; flex-direction: column;">
			    <a href="${card.button1Link}" class="btn">${card.button1Text}</a>
			    <a href="${card.button2Link}" class="btn learn-more">${card.button2Text}</a>
			</div>
			    </div>
		    </div>
		</div>
	    `;
	    // Inserindo o card no contêiner
	    container.innerHTML += cardHTML;
	});
    }
    
    // Chamando a função para criar os cards ao carregar a página
    window.onload = createCards;

    //	TESTEMUNHOS

      // Carregar testemunhos de uma API
      fetch('https://dummyjson.com/c/202c-62fb-4355-9760')
      .then(response => response.json())
      .then(data => {
	console.log(data);
	
	const testemunhosList = document.getElementById('testemunhos-list');
	data.comments.forEach(testemunho => {
	  // Criando o HTML do testemunho
	  const testemunhoHTML = `
	    <div style="width:300px;height:350px;">
	      <div style="text-align: center; padding: 5px; box-shadow: 0 4px 8px rgba(0,0,0,0.1);">
		<img src="${testemunho.user.image}" style="max-width:150px;max-height:150px; border-radius:50%;" />
		<p style="color:red;"><strong>${testemunho.user.fullName}</strong></p>
		<p style="font-weight:bold;">${testemunho.body}</p>
	      </div>
	    </div>
	  `;
	  // Inicializando o Swiper para os testemunhos
	
	  // Inserindo o testemunho no contêiner
	  testemunhosList.innerHTML += testemunhoHTML;
	});
    

      })
      .catch(error => console.error('Erro ao carregar os testemunhos:', error));


