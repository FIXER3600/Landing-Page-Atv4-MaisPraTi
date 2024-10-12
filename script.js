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
    
    // Carregar serviços de uma API
    fetch('https://api.exemplo.com/servicos')
	.then(response => response.json())
	.then(data => {
	    const servicosCards = document.getElementById('servicos-cards');
	    data.forEach(servico => {
		const card = document.createElement('div');
		card.className = 'card';
		card.innerHTML = `<h3>${servico.titulo}</h3><p>${servico.descricao}</p>`;
		servicosCards.appendChild(card);
	    });
	})
	.catch(error => console.error('Erro ao carregar os serviços:', error));
    
    // Carregar testemunhos de uma API
    fetch('https://api.exemplo.com/testemunhos')
	.then(response => response.json())
	.then(data => {
	    const testemunhosList = document.getElementById('testemunhos-list');
	    data.forEach(testemunho => {
		const testemunhoDiv = document.createElement('div');
		testemunhoDiv.className = 'col-md-4';
		testemunhoDiv.innerHTML = `<p>${testemunho.texto}</p><p><strong>${testemunho.nome}</strong></p>`;
		testemunhosList.appendChild(testemunhoDiv);
	    });
	})
	.catch(error => console.error('Erro ao carregar os testemunhos:', error));
    
    // Validação de formulário
    document.getElementById('contact-form').addEventListener('submit', function (event) {
	event.preventDefault();
	const nome = document.getElementById('nome').value;
	const email = document.getElementById('email').value;
	const telefone = document.getElementById('telefone').value;
	const mensagem = document.getElementById('mensagem').value;
    
	if (nome && email && telefone && mensagem) {
	    // Enviar dados usando EmailJS
	    emailjs.send('service_id', 'template_id', {
		nome: nome,
		email: email,
		telefone: telefone,
		mensagem: mensagem
	    })
	    .then(() => {
		alert('Mensagem enviada com sucesso!');
	    }, (error) => {
		alert('Erro ao enviar mensagem: ' + JSON.stringify(error));
	    });
	} else {
	    alert('Por favor, preencha todos os campos obrigatórios.');
	}
    });
    
    // Inicializar AOS.js
    AOS.init();
    