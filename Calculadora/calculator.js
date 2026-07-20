function calcularDesconto(){

    let valorOriginal = Number(document.getElementById("valor").value);
    let desconto = Number(document.getElementById("desconto").value);
    console.log("Valor original:" + valorOriginal);

    let valorDesconto = (valorOriginal * desconto) / 100;
    let valorFinal = valorOriginal - desconto;

    document.getElementById("resultado").textContent = "Valor desconto:" + valorDesconto;

}

