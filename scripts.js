let alunos = [
    {
        nome: "gleidson",
        email: "gleidson@gmail.com",
        telefone: "(00) 12345-6789",
        cidade: "Fortaleza" 
    },
    {
        nome: "Bruno caucaia",
        email: "brunão@gmail.com",
        telefone: "(00) 12345-6789",
        cidade: "Caucaia"
    },
    {
        nome: "Kevin",
        email: "kevin@gmail.com",
        telefone: "(00) 12345-6789",
        cidade: "Fortaleza"
    },
    {
        nome: "Sarah",
        email: "sarah@gmail.com",
        telefone: "(00) 12345-6789",
        cidade: "Fortaleza"
    }
];

function listarAluno(){
    let tabela = document.querySelector("#tabela");
    tabela.innerHTML = "";
    
    for(let i = 0; i < alunos.length; i++){
        tabela.innerHTML += `<tr>
                                <td>${alunos[i].nome}</td>
                                <td>${alunos[i].email}</td>
                                <td>${alunos[i].telefone}</td>
                                <td>${alunos[i].cidade}</td>
                                <td>
                                    <button class="btn btn-warning">Editar</button>
                                    <button class="btn btn-danger">Deletar</button>
                                </td>
                            </tr>`
    }
} listarAluno();


function adicionarAluno(){
    event.preventDefault();
    let aluno = {
        nome: nome.value,
        email: email.value,
        telefone: telefone.value,
        cidade: cidade.value
    }
    alunos.push(aluno);
    listarAluno();
}
