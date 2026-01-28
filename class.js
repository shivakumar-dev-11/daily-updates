const btn = document.getElementById("prompt-btn");
const output = document.getElementById("output");
btn.addEventListener("mousemove", () => {
  const userName = prompt("What is your name?", "Guest");
  output.textContent = "Hello, " + userName + "!";
});
