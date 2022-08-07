var titulo = document.querySelector(".titulo");//para puxar tudo que está na classe "titulo" e atribuir a variavel titulo
titulo.textContent = "Banana";// altera a classe titulo para a palavra banana

var pacientes = document.querySelectorAll(".paciente");

    console.log(pacientes);

for(var i = 0; i < pacientes.length; i++){    

    var paciente = pacientes[i];

    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent; // variavel peso recebe o conteudo da tdPeso

    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;// variavel altura recebe o conteudo da tdAltura


    var imcquery = paciente.querySelector(".info-imc");

    var pesoValido = true;
    var alturaValida = true;


    if(peso<0 || peso > 400){
        console.log("Peso invalido")
        pesoValido = false;
        imcquery.textContent = ("Peso inválido!");
        // paciente.style.color = "red";// modifica cor de texto da classe paciente caso peso inválido
        paciente.classList.add("paciente-invalido")//adiciona uma classe ao paciente

    }

    if(altura<0 || altura>2.70){
        console.log("Altura invalido")
        alturaValida = false;
        imcquery.textContent = ("Altura inválida");
        paciente.classList.add("paciente-invalido")

    }

    if (alturaValida && pesoValido){
        var imc = calculaIMC(peso,altura);
        imcquery.textContent = imc;
    }

}

    function calculaIMC(peso,altura){
        imc = 0;
        var imc = imc = (peso / (altura*altura));
        return imc.toFixed(2);//tofixed usa duas casas decimais no valor 
    }

// titulo.addEventListener("click", mostraMensagem);

// function mostraMensagem(){
//     console.log("Olá eu fui clicado!");
// }

