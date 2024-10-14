// Inicialização do Swiper
const swiper = new Swiper('.swiper-container', {
	navigation: {
	    nextEl: '.swiper-button-next',
	    prevEl: '.swiper-button-prev',
	},
	pagination: {
	    el: '.swiper-pagination',
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
	// {
	// 	image: './assets/sao-card.webp',
	// 	title: 'Sword Art Online: Fractured Daydream',
	// 	description: 'Worlds Collide. Blades Unite.',
	// 	button1Text: 'Available Now',
	// 	button2Text: 'Learn More',
	// 	button1Link: '#',
	// 	button2Link: '#'
	//     },
	//     {
	// 	image: './assets/sao-card.webp',
	// 	title: 'Sword Art Online: Fractured Daydream',
	// 	description: 'Worlds Collide. Blades Unite.',
	// 	button1Text: 'Available Now',
	// 	button2Text: 'Learn More',
	// 	button1Link: '#',
	// 	button2Link: '#'
	//     },
	//     {
	// 	image: './assets/sao-card.webp',
	// 	title: 'Sword Art Online: Fractured Daydream',
	// 	description: 'Worlds Collide. Blades Unite.',
	// 	button1Text: 'Available Now',
	// 	button2Text: 'Learn More',
	// 	button1Link: '#',
	// 	button2Link: '#'
	//     },
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
      fetch('https://dummyjson.com/c/859f-cedf-451e-89ef')
      .then(response => response.json())
      .then(data => {
	console.log(data);
	
	  const testemunhosList = document.getElementById('testemunhos-list');
	  data.comments.forEach(testemunho => {
	      const testemunhoDiv = document.createElement('div');
	      testemunhoDiv.className = 'col-md-4';
	      testemunhoDiv.innerHTML = `<p>${testemunho.body}</p><p><strong>${testemunho.user.
		fullName}</strong></p>`;
	      testemunhosList.appendChild(testemunhoDiv);
	  });
      })
      .catch(error => console.error('Erro ao carregar os testemunhos:', error));

/*********ENVIO DE EMAIL NO CONTATO */


document.getElementById('contact-form').addEventListener('submit', function(event) {
	event.preventDefault();
	
	// Pegando os valores dos campos de entrada
	const nome = document.getElementById('nome').value;
	const email = document.getElementById('email').value;
	const telefone = document.getElementById('telefone').value;
	const mensagem = document.getElementById('mensagem').value;
    
	// Montando os dados que serão enviados na requisição
	var data = {
	    service_id: 'service_trst8a8',        // Substitua pelos seus dados de serviço
	    template_id: 'template_pv576cc',      // Substitua pelo seu template
	    user_id: 'YH1Ac_HK8yRLYWnRR',        // Substitua pelo seu ID de usuário
	    template_params: {                    // Variáveis passadas ao template
		'nome': nome,
		'email': email,
		'telefone': telefone,
		'mensagem': mensagem
	    }
	};
    
	// Fazendo a requisição fetch
	fetch('https://api.emailjs.com/api/v1.0/email/send', {
	    method: 'POST',
	    headers: {
		'Content-Type': 'application/json'
	    },
	    body: JSON.stringify(data)  // Convertendo o objeto data para JSON
	})
	.then(response => {
	    if (response.ok) {
		alert('Your mail is sent!');
	    } else {
		return response.json().then(error => {
		    throw new Error(JSON.stringify(error));
		});
	    }
	})
	.catch(error => {
		console.log(data);
		
	    console.error('Erro:', error);
	    alert('Oops... ' + error.message);
	});
    });
    