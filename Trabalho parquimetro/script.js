class Parquimetro {
  #dinheiro;
    constructor(){
        this.#dinheiro = 0
    }

    depositar(valor){
    this.#dinheiro = valor
    
}

    horas(){

    if(this.#dinheiro >= 3){
    return 120;}
    if(this.#dinheiro >= 1.75){
    return 60;}
    if(this.#dinheiro >= 1){
    return 30;}
    return 0;
}

    troco(){

    if(this.#dinheiro >= 3){
        return this.#dinheiro - 3;
}
    if(this.#dinheiro >= 1.75){
        return this.#dinheiro - 1.75;
}
    if(this.#dinheiro >= 1){
        return this.#dinheiro - 1;
}
    return 0;
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
        if (isNaN(deposito) || deposito < 1) {
        alert("Valor insuficiente");
        return;
    }
        parquimetro.depositar(deposito);

        this.horas();
        this.troco();
}

    horas(){
          
        const horas = parquimetro.horas()
        document.getElementById("horasNoParquimetro").textContent = `Você tem ${horas} minutos no parquimetro`;
    }

    troco(){
        const seuTroco = parquimetro.troco()
        document.getElementById("troco").textContent = `Seu troco é de: R$ ${seuTroco}`;
    }
}

const parquimetro = new Parquimetro()
const parquimetroMostrar = new ParquimetroMostrar()
