let ListElement = document.querySelector("#app ul");
let inputElement = document.querySelector("#app input");
let buttonElement = document.querySelector("#app button");

let tarefas = [];

function renderTarefas(){
    ListElement.innerHTML = '';

    tarefas.map((todo)=>{
        let liElement = document.createElement("li");
        let tarefaText = document.createTextNode(todo);

        liElement.appendChild(tarefaText);
        ListElement.appendChild(liElement);

    })
}

function adicionarTarefas(){
    if(inputElement.value === ''){
        alert("Nenhuma tarefa foi digitada");
        return false;
    }else{
        let novaTarefa = inputElement.value;

        tarefas.push(novaTarefa);
        inputElement.value = "";

        renderTarefas();

    }
}

buttonElement.onclick = adicionarTarefas;

