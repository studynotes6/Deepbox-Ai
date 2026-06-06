function send() {
  let input = document.getElementById("text");
  let chat = document.getElementById("chat");

  let msg = input.value;
  if (!msg) return;

  // user message
  chat.innerHTML += `<div class='msg user'>${msg}</div>`;

  input.value = "";

  // fake AI reply (abhi ke liye)
  setTimeout(() => {
    chat.innerHTML += `
      <div class='msg bot'>
        Hello 👋 Main abhi demo AI hoon. 
        Tumne bola: ${msg}
      </div>
    `;

    chat.scrollTop = chat.scrollHeight;
  }, 700);
}
