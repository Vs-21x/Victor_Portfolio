class parquimetro {
     #dinheiro;
    constructor(){
        this.#dinheiro = 0;

    }

    depositar(){
        const valorDeposito = parseFloat(document.getElementById("valorDeposito").value);
        if (valorDeposito <= 0)
        alert ("digite um valor valido");
        return
    }

    this.#dinheiro += valorDeposito;

    this.horas();   
    this.troco();

    horas(valorHoras){
        this.#dinheiro (depositar / 3) = valorHoras;
        document.getElementById("horasNoParquimetro").textContent = `você tem ${valorHoras} no parquimetro`;
    }

    troco(valorTroco){
    this.#dinheiro (depositar - 3*3) = valorTroco;
    
    document.getElementById("troco").textContent = `seu troco é de: R$ ${valorTroco}`;
}

}


const parquimetros = new parquimetro();

