
const addFruteiraTabela = (fruteira) => {  // Cria o HTML para uma nova linha da tabela com os dados da fruteira.
   
    const fruteirasTBody = document.getElementById('fruteiras-tbody');   // Seleciona o corpo da tabela onde as linhas serão inseridas.

 
    const dataPlantio = new Date(fruteira.dataPlantio);  // Calcula a idade da planta em meses
    const hoje = new Date();
    let meses = (hoje.getFullYear() - dataPlantio.getFullYear()) * 12;
    meses -= dataPlantio.getMonth();
    meses += hoje.getMonth();
    
    const idadeEmMeses = meses <= 0 ? 0 : meses;  // Garante que a idade não seja negativa se a data for no futuro.

    const dataFormatada = new Date(fruteira.dataPlantio + 'T00:00:00').toLocaleDateString('pt-BR');  // Formata a data de plantio para o padrão brasileiro (dd/mm/aaaa), Adiciona 'T00:00:00' evitar problemas com fuso horário.
    
    
    const fruteiraTr = `<tr>
        <th scope="row">${fruteira.id}</th>
        <td>${fruteira.nomeEspecie}</td>
        <td>${fruteira.nomeCientifico}</td>
        <td>${fruteira.producaoMedia}</td>
        <td>${dataFormatada}</td>
        <td>${idadeEmMeses}</td>
    </tr>`; // sao valores do objeto fruteira que serao exibidos na tabela.

    
    fruteirasTBody.insertAdjacentHTML('beforeend', fruteiraTr); // adiciona a nova linha no final da tabela sem apagar o conteúdo existente.
};



 
const carregarTabela = () => {  // Carrega as fruteiras salvas no localStorage e as exibe na tabela.
    const fruteiras = JSON.parse(localStorage.getItem('fruteiras')) ?? [];
    for (const fruteira of fruteiras) {
        addFruteiraTabela(fruteira);
    }
};


const setPreparacaoFormValues = (nomeEspecie = '', nomeCientifico = '', producaoMedia = '', dataPlantio = '') => {
    const nomeEspecieInput = document.querySelector('#nomeEspecie');  // A função preenche os inputs do  formulário com os valores específicos.
    const nomeCientificoInput = document.querySelector('#nomeCientifico');
    const producaoMediaInput = document.querySelector('#producaoMedia');
    const dataPlantioInput = document.querySelector('#dataPlantio');

    nomeEspecieInput.value = nomeEspecie;
    nomeCientificoInput.value = nomeCientifico;
    producaoMediaInput.value = producaoMedia;
    dataPlantioInput.value = dataPlantio;
};


const handleSubmit = (event) => {  

    event.preventDefault(); // Manipula o evento de envio do formulário de cadastro de fruteira.

    const form = document.getElementById('form-fruteira');  // Dados do formulário -> criação do objeto. 
    
    const formData = new FormData(form);
    const fruteira = Object.fromEntries(formData);

    
    fruteira.id = Date.now();  // Adiciona o ID único gerado automaticamente

   
    const fruteirasAtuais = JSON.parse(localStorage.getItem('fruteiras')) ?? []; // Pega os itens que JÁ EXISTEM no localStorage. Se não houver nenhum, cria um array vazio.

   
    fruteirasAtuais.push(fruteira);  // Adiciona a nova fruteira ao array que acabamos de carregar.

    
    localStorage.setItem('fruteiras', JSON.stringify(fruteirasAtuais)); // Salva o array COMPLETO E ATUALIZADO de volta no localStorage.

    
    addFruteiraTabela(fruteira); // Adicionar na tabela.

    
    form.reset();  // Limpar os valores do formulário.
    
    
    $('#cardapioModal').modal('toggle'); // Fechar o modal.

    
    Toastify({ // Exibe uma notificação de sucesso.
        text: 'Item do cardápio adicionado com sucesso!',
        duration: 3000,
    }).showToast();
};



const form = document.getElementById('form-fruteira'); // Adiciona os listeners (ouvintes de eventos)
form.addEventListener('submit', handleSubmit);

let body = document.body; // faz com o que o navegador espere carregar a pagina para então chamar a função.
body.onload = carregarTabela;
