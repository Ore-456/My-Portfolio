 document.getElementById('year').textContent = new Date().getFullYear();

const quotes = [
  "Hire me and Hire well ;)",
  "You’re capable of amazing things 💪🏽",
  "Small steps lead to big change.",
  "You got this, seriously!"
];

function showQuote() {
  const random = Math.floor(Math.random() * quotes.length);
  document.getElementById("quote").innerText = quotes[random];
}
