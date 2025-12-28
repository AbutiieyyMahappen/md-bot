const texts = [
  "Fast • Secure • 24/7 WhatsApp Bot",
  "Built with Node.js & Baileys",
  "Mahappen Bot MD"
];

let i = 0;
const typing = document.querySelector(".typing");

setInterval(() => {
  typing.textContent = texts[i];
  i = (i + 1) % texts.length;
}, 2500);

// Fake live stats
let users = 120;
let uptime = 0;

setInterval(() => {
  users += Math.floor(Math.random() * 2);
  uptime++;
  document.getElementById("users").textContent = users;
  document.getElementById("uptime").textContent = uptime + "h";
}, 4000);

// Dark / Light toggle (UI only)
document.getElementById("modeToggle").onclick = () => {
  document.body.classList.toggle("light");
};
