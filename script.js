const array = [
  {
    codigo: "001001",
    nome: "Jose da Silva",
    email: "jose@email.com",
    telefone: "(11) 99901-1234",
  },
  {
    codigo: "001002",
    nome: "Marcio de Souza",
    email: "marcio@email.com",
    telefone: "(11) 99902-1234",
  },
  {
    codigo: "001003",
    nome: "Mauricio Cruz",
    email: "mauricio@email.com",
    telefone: "(11) 99903-1234",
  },
  {
    codigo: "001004",
    nome: "Fabiana Dias",
    email: "fabiana@email.com",
    telefone: "(11) 99904-1234",
  },
];

function generateCardsContacts() {
  for (let i = 0; i < array.length; i++) {
    const box2 = document.getElementById("box2");

    const span = document.createElement("span");
    const span2 = document.createElement("span");
    const span3 = document.createElement("span");
    const span4 = document.createElement("span");

    span.classList.add("span1");
    span2.classList.add("span1");
    span3.classList.add("span1");
    span4.classList.add("span1");

    span.innerText = array[i].nome;
    span2.innerText = array[i].codigo;
    span3.innerText = array[i].email;
    span4.innerText = array[i].telefone;

    box2.appendChild(span);
    box2.appendChild(span2);
    box2.appendChild(span3);
    box2.appendChild(span4);
  }
}

generateCardsContacts();

const btnSalvar = document.getElementById("btnSalvar");
btnSalvar.addEventListener("click", addContacts);

function addContacts(event) {
  event.preventDefault();
  esconderModal()

  const nome = document.getElementById("nome");
  const codigo = document.getElementById("codigo");
  const email = document.getElementById("email");
  const telefone = document.getElementById("telefone");

  const data = {
    codigo: codigo.value,
    nome: nome.value,
    email: email.value,
    telefone: telefone.value,
  };

  if(data.codigo === "" || data.nome === "" || data.email === "" || data.telefone === "" ){
    GenerateModal("preencha todos os campos vazios")
    return 0
  }

  if (codigo.value.length !== 6) {
    GenerateModal("o codigo deve ter 6 digitos")
    return 0
  }

  array.push(data);

  const box2 = document.getElementById("box2");

  const span = document.createElement("span");
  const span2 = document.createElement("span");
  const span3 = document.createElement("span");
  const span4 = document.createElement("span");

  span.classList.add("span1");
  span2.classList.add("span1");
  span3.classList.add("span1");
  span4.classList.add("span1");

  span.innerText = data.nome;
  span2.innerText = data.codigo;
  span3.innerText = data.email;
  span4.innerText = data.telefone;

  box2.appendChild(span);
  box2.appendChild(span2);
  box2.appendChild(span3);
  box2.appendChild(span4);
}


const modal = document.getElementById("divConteinerModal");

function GenerateModal(mensagem){
  const pModal = document.getElementById("pModal");
  pModal.innerHTML = ""
  pModal.innerText = mensagem
  exibirModal()
}

function exibirModal() {
  modal.classList.remove("esconder");
  modal.classList.add("exibir");
  modal.addEventListener("click", esconderModal)
}

function esconderModal (){
  modal.classList.remove("exibir");
  modal.classList.add("esconder");
}