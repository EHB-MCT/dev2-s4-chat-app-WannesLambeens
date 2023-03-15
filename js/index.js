"use strict";

const chat = {
    author: "yourName",
    init() {
        this.fetchMessages();
    },
    sendMessage() {
    },
    fetchMessages() {
        fetch('https://dev2chat.onrender.com/messages')
        .then(function (response) {
        return response.json();
        }) 
        .then(function(messages) {
        console.log(messages);



      messages.forEach(messageAmount => {

        const date = new Date(messageAmount.created_at);
        const hours = date.getHours();
        const minutes = String(date.getMinutes()).padStart(2, "0");
        document.querySelector('#messageContainer').insertAdjacentHTML("beforeend", `        
        <div class="messageItem">
            <div class="header">
                <span class="author">${messageAmount.author}</span>
                <span class="time">${hours}:${minutes}</span>
            </div>
            <p class="message">
            ${messageAmount.message}
            </p>
        </div>
        `
        );
      });
        
    }
    

   )},
    renderMessage(message) {
    }

}

chat.init();