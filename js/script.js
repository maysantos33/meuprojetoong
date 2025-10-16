// --- Máscaras simples de input ---
function aplicarMascaraCPF(cpf) {
  cpf.value = cpf.value
    .replace(/\D/g, '')                 // remove tudo que não é número
    .replace(/(\d{3})(\d)/, '$1.$2')   // coloca ponto
    .replace(/(\d{3})(\d)/, '$1.$2')   // segundo ponto
    .replace(/(\d{3})(\d{1,2})$/, '$1-$2'); // traço
}

function aplicarMascaraTelefone(tel) {
  tel.value = tel.value
    .replace(/\D/g, '')
    .replace(/^(\d{2})(\d)/g, '($1) $2')
    .replace(/(\d{5})(\d{4})$/, '$1-$2');
}

function aplicarMascaraCEP(cep) {
  cep.value = cep.value
    .replace(/\D/g, '')
    .replace(/^(\d{5})(\d)/, '$1-$2');
}

// --- Validação do formulário ---
document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  
  form.addEventListener("submit", (event) => {
    event.preventDefault(); // impede envio automático

    const nome = form.nome.value.trim();
    const email = form.email.value.trim();
    const cpf = form.cpf.value.trim();
    const telefone = form.telefone.value.trim();
    const cep = form.cep.value.trim();

    if (!nome || !email || !cpf || !telefone || !cep) {
      alert("Por favor, preencha todos os campos obrigatórios.");
      return;
    }

    // Simula envio
    alert("Cadastro enviado com sucesso!");
    form.reset();
  });
});
