var QuantidadeDeAlunos = 14;

for (var Contador = 0; Contador < QuantidadeDeAlunos; Contador++){
    if (Contador == 0){
        console.log("o numero é zero")
    }
    else if(Contador % 2 == 0){
        console.log(Contador + "O numero e par");
    }
    else{
        console.log(Contador + "O numero e impar")
    }
}