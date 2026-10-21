
const botaoAdicionar = document.getElementById("adicionarTarefa")
botaoAdicionar.addEventListener('click', add);

var NumeradorTarefas = [];

var agenda = {
    input_date: document.getElementById("valor_data"),
    nomeTarefa: document.getElementById("nomeTarefa"),
}


function add()
{
    var tarefa = {
        checkTarefa: document.createElement("input"),
        apagarTarefa: document.createElement("input"),
        descricaoTarefa: document.createElement("label"),
        lineNext: document.createElement("br")
    }

    tarefa.checkTarefa.type = 'checkbox';
    tarefa.apagarTarefa.type = 'button';
    tarefa.apagarTarefa.value = "Excluir"
    
    let nomeTarefa = agenda.nomeTarefa.value;
    let splitData = agenda.input_date.value.split('-'); //divide os elementos que estão entre '-' em um array
    let dataConvertida = `${splitData[2]}/${splitData[1]}/${splitData[0]}`;

    tarefa.descricaoTarefa.textContent = "Tarefa: " + nomeTarefa + " [" +  dataConvertida + "]";

    tarefa.apagarTarefa.style.marginLeft = "10px";
    
    listaTarefas(tarefa);
    document.body.appendChild(tarefa.checkTarefa); //'AppendChild' adiciona um elemento ao fim do nó HTML
    document.body.appendChild(tarefa.descricaoTarefa);
    document.body.appendChild(tarefa.apagarTarefa);
    document.body.appendChild(tarefa.lineNext);
    console.log("Função ativada.");
}

function removerTarefa(tarefa)
{
    tarefa.checkTarefa.remove()
    tarefa.descricaoTarefa.remove()
    tarefa.apagarTarefa.remove()
    tarefa.lineNext.remove()
    
    let indice = NumeradorTarefas.indexOf(tarefa)
    NumeradorTarefas.splice(indice, 1)
   
}


function listaTarefas(tarefa)
{   
    tarefa.apagarTarefa.addEventListener('click', () => removerTarefa(tarefa))
    NumeradorTarefas.push(tarefa);
    console.log(NumeradorTarefas)
}

