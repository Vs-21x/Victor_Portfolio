
let tentativas = 0;

const obterNumero = (id) => document.getElementById(id);
const numero = () => Number(obterNumero("valor").value);
let gerarNumero = Math.floor(Math.random() * 100) + 1;
const atualizaValorTentativa = (tentativa, valor) => tentativa[1] += valor;




function chute() {


const valorInformado = numero ();
let tentativasRestantes = 9 - tentativas

if (valorInformado === gerarNumero) {
    document.getElementById("geral").innerText= `Acertou! O número era ${gerarNumero}. Você usou ${tentativas} tentativas.`
    resetar();
} else if (valorInformado > gerarNumero) { 
    document.getElementById("geral").innerText= `O número secreto é menor. Você ainda tem ${tentativasRestantes} tentativas.`;
    
} else { document.getElementById("geral").innerText= `O número secreto é maior. Você ainda tem ${tentativasRestantes} tentativas.`;
    
}

tentativas++;
document.getElementById("tentativa").innerText = `Tentativa numero: ${tentativas}`;
if (tentativas >= 10 && valorInformado !== gerarNumero) {
    document.getElementById("geral").innerText = `Você perdeu! O numero secreto era ${gerarNumero}`
     resetar();
};
document.getElementById("valor").value = "";
}
 
function resetar() {
        tentativas = 0;
        gerarNumero = Math.floor(Math.random() * 100) + 1;
}