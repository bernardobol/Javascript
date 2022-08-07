var botaoAdicionar = document.querySelector("#adicionar-paciente");

botaoAdicionar.addEventListener("click", function(event){
    event.preventDefault(); // tira os padrões da ação do html

    var form = document.querySelector("#form-adiciona");

    var paciente = obtemPacienteDoFormulario(form); 

     
    var pacienteTr = montaTr(paciente);

    var tabela = document.querySelector("#tabela-pacientes");

    tabela.appendChild(pacienteTr);

    form.reset();

});

//cria um objeto paciente
function obtemPacienteDoFormulario(form){

    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaIMC(form.peso.value, form.altura.value)        

    }
    return paciente;
}

function montaTr(paciente){

    var pacienteTr = document.createElement("tr");//cria uma tag html
    pacienteTr.classList.add("paciente");

     pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
     //coloca o elemento que está dentro dos parenteses dentro de outro elemento, chama a função montaTd, com os params paciente.nome e a classe.
     pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
     pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
     pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
     pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

     return pacienteTr;

}

//função para montaras tds montaTd

function montaTd(dado, classe){
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);
    return td;
}