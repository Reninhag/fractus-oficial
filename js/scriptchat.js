function adicionarRespostas() {
    var chatMessages = document.getElementById("chat-messages");
    var respostas = [
        "Friend: Olá!",
        "Friend: Como você está?",  
        // Adicione mais mensagens de resposta conforme desejado
    ];

    // Iterar pela matriz de respostas e adicionar divs de resposta ao chat
    for (var i = 0; i < respostas.length; i++) {
        var div = document.createElement("div");
        div.className = "message-resposta";
        div.textContent = respostas[i];
        chatMessages.appendChild(div);
    }
    
    var now = new Date(); 
    var div = document.createElement("div");
    div.className = "message-resposta";
    div.textContent = now.getDate() + "/" + (now.getMonth() + 1) + "/" + now.getFullYear(); // Note que os meses começam do zero em JavaScript
    chatMessages.appendChild(div);
    chatMessages.scrollTop = chatMessages.scrollHeight; // Rolar para a última mensagem


function sendMessage() {
    var messageInput = document.getElementById("message-input");
    var chatMessages = document.getElementById("chat-messages");
    var message = messageInput.value;
    if (message.trim() === "") {
        return;
    }

    var messageDiv = document.createElement("div");
    messageDiv.className = "message";
    messageDiv.textContent = "Você: " + message;
    chatMessages.appendChild(messageDiv);

    messageInput.value = ""; // Limpar o campo de entrada após enviar a mensagem
    setTimeout(adicionarRespostas, 1200);
}

document.addEventListener("DOMContentLoaded", function(){
    var messageInput = document.getElementById("message-input");
    messageInput.focus();
})};