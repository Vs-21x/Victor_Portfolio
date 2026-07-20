function calcular(){

let peso = Number(document.getElementById ("peso").value);
let altura = Number(document.getElementById ("altura").value);


const imc = Number(peso) / (altura * altura);
const valor = imc;
const valorImc = imc;



document.getElementById("valorImc").textContent = "Seu imc é: " + valorImc;

if (valor <= 18.5){
    
    document.getElementById("resultado").innerText="Você esta na linha da magreza! Recomendamos procurar um profissional.";
}

else if (valor > 18.5 && valor <= 24.9){

    document.getElementById("resultado").innerText="Seu peso é ideal para a sua altura!";
}

else{

    document.getElementById("resultado").innerText="Você esta na linha da obesidade! Recomendamos procurar um profissional.";
}

}