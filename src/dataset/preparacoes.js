//  uma variavel lista em formato de Json com as frutas que serao exibidas em cards na pagina inicial.
let fruteirasCard = [
    {
        
        src: "/assets/image/uva.jfif",
        nomeEspecie: "Uva",
        nomeCientifico: "Vitis vinifera",
        producaoMedia: "150",
        dataPlantio: "2020-01-25"
    },
    {
        
        src: "/assets/image/melancia.jfif",
        nomeEspecie: "Melancia",
        nomeCientifico: "Citrullus lanatus",
        producaoMedia: "50",
        dataPlantio: "2019-08-18"
    },
    {
        
        src: "/assets/image/laranja.jfif",
        nomeEspecie: "Laranja",
        nomeCientifico: "Citrus sinensis",
        producaoMedia: "100",
        dataPlantio: "2019-09-20"
    },
    {
        
        src: "/assets/image/goiaba.jfif",
        nomeEspecie: "Goiaba",
        nomeCientifico: "Psidium guajava",
        producaoMedia: "210",
        dataPlantio: "2023-09-15"
    }
];

// lista vazia que ira receber os dados do formulario do cadastro de frutas.
let preparacoesfrutas = [];

let inserirfrutas = () => { };
// Exporta as variáveis para que possam ser usadas em outros arquivos .
export { fruteirasCard, preparacoesfrutas, inserirfrutas };
