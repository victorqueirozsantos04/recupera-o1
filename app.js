// Função que contém a mensagem
function mostrarMensagem() {
    const mensagem = "Olá, você é incrivel🎉";
   
    // Seleciona o parágrafo e insere o texto
    document.getElementById("mensagem").textContent = mensagem;
}

// Adiciona o evento de clique no botão
document.getElementById("btnMensagem").addEventListener("click", mostrarMensagem);
