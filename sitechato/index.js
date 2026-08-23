const matrizGastos = [

    ["alimentacao", 0],
    ["lazer", 0],
    ["transporte", 0],
    ["outros", 0],
    ["total", 0],
];

const obterElemento = (id) => document.getElementById(id);
const obterValor = () => Number(obterElemento("valor").value);
const valorNegativo = (valor) => valor < 0; 
const obterCategoriaInformada = () => obterElemento(`categoria`).value;
const obterCategoria = (matriz, nomeCategoria) => matriz.find((item) => item[0] === nomeCategoria);
const formataMoeda = (valor) => valor.toFixed(2).replace('.', ',');
const atualizarValorCategoria = (categoria, valor) => categoria[1] += valor;

const atualizarInterface = () => {

    matrizGastos.forEach(([nome, valor]) => {
        const elemento = obterElemento(nome);
        elemento.textContent = `${nome}: R$ ${formataMoeda(valor)}`;
    });

}

    const limparCategoria = () => obterElemento('valor').value = ''; 

function calcular() {

    const categoriaInformada = obterCategoriaInformada ();
    const valorInformado = obterValor ();

    if(valorNegativo (valorInformado)){
        alert("Valor negativo n pode n");
        return;
    };

    const categoria = obterCategoria(matrizGastos, categoriaInformada);
    const total = obterCategoria(matrizGastos, "total");

    atualizarValorCategoria(categoria, valorInformado);
    atualizarValorCategoria(total, valorInformado);
    atualizarInterface();
    limparCategoria();
}