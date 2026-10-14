class veiculo {

    constructor (marca, modelo, ano){
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;

        this._ligado = false;
    }

    ligar(){
        this._ligado = true
        console.log("o veiculo foi ligado")
    }
    desligar(){
        this._ligado = false
        console.log("o veiculo foi deesligado")
    }

    get ligado(){
        return this._ligado;
    }
}

class moto extends veiculo {
    constructor(marca, modelo, ano){
        super(marca, modelo, ano);
        }
}


class carro extends veiculo {
    constructor(marca, modelo, ano, numeroPortas){
        super(marca, modelo, ano);
        this.numeroPortas = numeroPortas;
    }

    abrirPortas(){
        console.log("as portas foram abertas");
    }
}

const Carro = new carro("chevrollet", "vectra", 1999, 4);
const Moto = new moto("yamaha", "mt010", 2027);

Carro.ligar();
Carro.desligar();
Carro.abrirPortas();

console.log("o carro esta ligado?", Carro.ligado);




// const veiculoNovo = new veiculo('honda', 'civic', 2008);

// console.log(veiculoNovo);
// veiculoNovo.ligar();
// veiculoNovo.desligar();
// console.log("o veiculo esta ligado?" , veiculoNovo.ligado)