// let alunos = [
//     {
//         nome: "gleidson",
//         email: "gleidson@gmail.com",
//         telefone: "(00) 12345-6789",
//         cidade: "Fortaleza" 
//     },
//     {
//         nome: "Bruno caucaia",
//         email: "brunão@gmail.com",
//         telefone: "(00) 12345-6789",
//         cidade: "Caucaia"
//     },
//     {
//         nome: "Kevin",
//         email: "kevin@gmail.com",
//         telefone: "(00) 12345-6789",
//         cidade: "Fortaleza"
//     },
//     {
//         nome: "Sarah",
//         email: "sarah@gmail.com",
//         telefone: "(00) 12345-6789",
//         cidade: "Fortaleza"
//     }
// ];

function listarAluno(){
    let tabela = document.querySelector("#tabela");
    tabela.innerHTML = "";
    
    let lista = JSON.parse(localStorage.getItem("lista")) || [];

    for(let i = 0; i < lista.length; i++){
        tabela.innerHTML += `<tr>
                                <td>${lista[i].nome}</td>
                                <td>${lista[i].email}</td>
                                <td>${lista[i].telefone}</td>
                                <td>${lista[i].cidade}</td>
                                <td>
                                    <button 
                                        class="btn btn-warning"
                                        type="button" 
                                        data-bs-toggle="offcanvas" 
                                        data-bs-target="#offcanvasRightEditar" 
                                        aria-controls="offcanvasRightEditar"
                                        onclick="preencherForm(${i})">Editar</button>
                                    <button class="btn btn-danger" onclick="deletarAluno(${i})">Deletar</button>
                                </td>
                            </tr>`
    }
} listarAluno();


function adicionarAluno(){
    event.preventDefault();
    //PEGAR A LISTA DE ALUNOS
    let lista = JSON.parse(localStorage.getItem("lista")) || [];

    //MONTA O OBJETO ALUNO
    let aluno = {
        nome: nome.value,
        email: email.value,
        telefone: telefone.value,
        cidade: cidade.value
    }
    //INSERE O ALUNO NA LISTA
    lista.push(aluno);
    
    //SALVANDO NO LOCALSTORAGE
    localStorage.setItem("lista", JSON.stringify(lista));
    
    //LIMPANDO OS CAMPOS DO FORMULARIO
    cadastro.reset();

    //FECHAR O MODAL
    let fechar = document.querySelector("#cadastro-fechar");
    fechar.dispatchEvent(new Event("click"));

    //LISTANDO ALUNOS NOVAMENTE
    listarAluno();
}

function preencherForm(posicao)
{
    let lista = JSON.parse(localStorage.getItem("lista")) || [];
    e_nome.value = lista[posicao].nome;
    e_email.value = lista[posicao].email;
    e_telefone.value = lista[posicao].telefone;
    e_cidade.value = lista[posicao].cidade;
}

function editarAluno()
{

    
}

function deletarAluno(posicao)
{
    let lista = JSON.parse(localStorage.getItem("lista")) || [];
    let novaLista = [];
    for(let i = 0; i < lista.length; i++){
        if(i != posicao){
            novaLista.push(lista[i]);
        }
    }
    localStorage.setItem("lista", JSON.stringify(novaLista))
    listarAluno();
}
