class Parquimetro {
  #dinheiro;
    constructor(){
        this.#dinheiro = 0
    }

    depositar(valor){
    this.#dinheiro += valor
    
}

    horas(){
    return Math.floor(this.#dinheiro / 3);
}

    troco(){
        return this.#dinheiro % 3
  }

  get dinheiro (){
        return this.#dinheiro;
    }
}

class ParquimetroMostrar {
    constructor(){
}

    depositar(){
        
        const deposito = parseFloat(document.getElementById("valorDeposito").value);
        parquimetro.depositar(deposito);

        if (isNaN(deposito) || deposito <= 0) {
        alert("Digite um valor maioor que zero!");
        return;
}
    
        this.horas();
        this.troco();
}

    horas(){
          
        const horas = parquimetro.horas()
        document.getElementById("horasNoParquimetro").textContent = `Você tem ${horas}h no parquimetro`;
    }

    troco(){
        const seuTroco = parquimetro.troco()
        document.getElementById("troco").textContent = `Seu troco é de: R$ ${seuTroco}`;
    }
}

const parquimetro = new Parquimetro()
const parquimetroMostrar = new ParquimetroMostrar()
