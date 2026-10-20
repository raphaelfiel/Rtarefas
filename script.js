
const botaoAdicionar = document.getElementById("adicionarElemento")
botaoAdicionar.addEventListener('click', exibir_data);

var NumeradorTarefas = [];

var agenda = {
    input_date: document.getElementById("valor_data"),
    nomeTarefa: document.getElementById("nomeTarefa"),
}


function exibir_data()
{
    var tarefa = {
        checkTarefa: document.createElement("input"),
        apagarTarefa: document.createElement("input"),
        descricaoTarefa: document.createElement("label")
    }

    tarefa.checkTarefa.type = 'checkbox';
    tarefa.apagarTarefa.type = 'button';
    
    let nomeTarefa = agenda.nomeTarefa.value;
    let splitData = agenda.input_date.value.split('-'); //divide os elementos que estão entre '-' em um array
    let dataConvertida = `${splitData[2]}/${splitData[1]}/${splitData[0]}`;

    tarefa.descricaoTarefa.textContent = "Nome da tarefa: " + nomeTarefa + " | " +  dataConvertida;

    tarefa.apagarTarefa.style.marginLeft = "10px";
    
    listaTarefas(tarefa);
    document.body.appendChild(tarefa.checkTarefa); //'AppendChild' adiciona um elemento ao fim do nó HTML
    document.body.appendChild(tarefa.descricaoTarefa);
    document.body.appendChild(tarefa.apagarTarefa);
    document.body.appendChild(document.createElement("br"));
    console.log("Função ativada.");
}


function listaTarefas(tarefa)
{   
    NumeradorTarefas.push(tarefa);
    console.log(NumeradorTarefas)
}

