import { fruteirasCard } from './dataset/preparacoes.js'; // importação do array de fruteiras da pasta dataset

let getCartao = (fruteira) => {
   
    const dataPlantio = new Date(fruteira.dataPlantio);  // Calcula a idade da planta em meses a partir da data do plantio
    const hoje = new Date();
    let meses = (hoje.getFullYear() - dataPlantio.getFullYear()) * 12;
    meses -= dataPlantio.getMonth();
    meses += hoje.getMonth();
    const idadeEmMeses = meses <= 0 ? 0 : meses;


    const dataFormatada = new Date(fruteira.dataPlantio + 'T00:00:00').toLocaleDateString('pt-BR'); // Formatar a data de plantio para o padrao br

    
    return ` 
    <div class="col">
        <div class="card h-100 shadow-sm">
            <img src="${fruteira.src}" class="card-img-top" alt="${fruteira.nomeEspecie}" style="object-fit: cover; height: 200px;">
            <div class="card-header bg-success text-white">
                <h5 class="card-title mb-0">${fruteira.nomeEspecie}</h5>
            </div>
            <div class="card-body">
                <p class="card-text"><strong>Nome Científico:</strong> <em>${fruteira.nomeCientifico}</em></p>
                <p class="card-text"><strong>Produção Média:</strong> ${fruteira.producaoMedia} Kg/safra</p>
                <p class="card-text"><strong>Data do Plantio:</strong> ${dataFormatada}</p>
            </div>
            <div class="card-footer text-muted">
                Idade: ${idadeEmMeses} meses
            </div>
        </div>
    </div>`; // Retorna o HTML do card
};


let setCartaoCol = (cartao) => {  //Insere o HTML de um cartão na div principal da página.
    let listaFruteirasDiv = document.getElementById('lista-fruteiras');
    listaFruteirasDiv.insertAdjacentHTML('beforeend', cartao);
};


let createCartoes = () => {   // função que cria os cartoes a partir dos dados do array fruteirasCard

    for (let item of fruteirasCard ) {  // Html completo referente a cada card com o conteúdo.
        
        let cartao = getCartao(item);

        
        setCartaoCol(cartao); // Inserir cartão dentro do código html na div com id lista-fruteiras.
    }
};

createCartoes();  // chamar a função para criar os cartões
