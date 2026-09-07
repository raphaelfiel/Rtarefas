
var agenda = {
    input_date: document.getElementById("valor_data"),
    nomeTarefa: document.getElementById("nomeTarefa"),
}

var NumeradorTarefas = []


function exibir_data()
{

    const descricaoTarefa = document.createElement("label")
    const criacaoTarefa = document.createElement("input")
    const apagarTarefa = document.createElement("input")

    let nomeT = agenda.nomeTarefa.value
    let data_dividida = agenda.input_date.value.split('-') //divide os elementos que estão entre '-' em um array
    let _dataBR = `${data_dividida[2]}/${data_dividida[1]}/${data_dividida[0]}`

    descricaoTarefa.textContent = _dataBR + " | Nome da tarefa: " + nomeT
    criacaoTarefa.type = 'checkbox'
    apagarTarefa.type = 'button'
    apagarTarefa.style.marginLeft = "10px"
    
    document.body.appendChild(criacaoTarefa) //'AppendChild' adiciona um elemento ao fim do nó HTML
    document.body.appendChild(descricaoTarefa)
    document.body.appendChild(apagarTarefa)
    document.body.appendChild(document.createElement("br"))
    console.log("Função ativada.")
}
