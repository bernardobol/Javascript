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
        var imc = (peso / (altura*altura));
        imcquery.textContent = imc.toFixed(2);//tofixed usa duas casas decimais no valor 
    }

}

// titulo.addEventListener("click", mostraMensagem);

// function mostraMensagem(){
//     console.log("Olá eu fui clicado!");
// }

var botaoAdicionar = document.querySelector("#adicionar-paciente");

botaoAdicionar.addEventListener("click", function(event){
    event.preventDefault(); // tira os padrões da ação do html

    var form = document.querySelector("#form-adiciona");

    var nome = form.nome.value;// variavel recebe o valor do campo do formulário
    var peso = form.peso.value;
    var altura = form.altura.value;
    var gordura = form.gordura.value;
     
    var pacienteTr = document.createElement("tr");//cria uma tag html
    
    var nomeTd = document.createElement("td");
    var pesoTd = document.createElement("td");
    var alturaTd = document.createElement("td");
    var gorduraTd = document.createElement("td");
    var imcTd = document.createElement("td");

    nomeTd.textContent = nome;//elemento recebe em seu conteúdo o valor da variavel nome.
    pesoTd.textContent = peso;
    alturaTd.textContent = altura;
    gorduraTd.textContent = gordura;
    imcTd.textContent = (peso/(altura*altura));

     pacienteTr.appendChild(nomeTd);//coloca o elemento que está dentro dos parenteses dentro de outro elemento
     pacienteTr.appendChild(pesoTd);
     pacienteTr.appendChild(alturaTd);
     pacienteTr.appendChild(gorduraTd);
     pacienteTr.appendChild(imcTd);

    var tabela = document.querySelector("#tabela-pacientes");

    tabela.appendChild(pacienteTr);
});