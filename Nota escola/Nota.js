function calcular(){

    let nome = document.getElementById("nomeFilme").value;
    let tempo = document.getElementById("tempoFilme").value;
    console.log("tempo:" + tempo);

    const horasFilme = Math.floor(tempo / 60);
    const minutos = tempo - horasFilme * 60;

    document.getElementById("resultado1").textContent = nome;
    document.getElementById("resultado2").textContent = minutos;
}
