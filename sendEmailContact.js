
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
    