if (document.querySelector('.games-grid')) {
  const grid = document.querySelector('.games-grid');
  games.forEach(game => {
    grid.innerHTML += `<div class="game-card"><a href="${game.link}"><img src="${game.image}" alt="${game.title}"><div class="content"><h3>${game.title}</h3><p>${game.description}</p></div></a></div>`;
  });
}
if (document.querySelector('.carousel')) {
  let slideIndex = 0;
  const slides = document.querySelectorAll('.slides img');
  function showSlides() {
    slides.forEach(img => img.style.display = "none");
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex-1].style.display = "block";
    setTimeout(showSlides, 4000);
  }
  showSlides();
}
if (document.getElementById('gameDetail')) {
  const params = new URLSearchParams(window.location.search);
  const gameName = params.get('game');
  const game = games.find(g => g.link.includes(gameName));
  if (game) {
    document.getElementById('gameDetail').innerHTML = `<h2>${game.title}</h2><img src="${game.image}" alt="${game.title}" style="width:100%; border-radius:10px;"><p>${game.description}</p><button onclick="buyGame()" class="button">Comprar por R$49,90</button>`;
  }
}
function buyGame() {
  alert("Compra realizada com sucesso! 🎉");
}
if (document.getElementById('loginForm')) {
  document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    localStorage.setItem('user', username);
    alert(`Bem-vindo, ${username}!`);
    window.location.href = "index.html";
  });
}
if (document.getElementById('gameForm')) {
  document.getElementById('gameForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Novo game adicionado! (mas precisa adicionar manualmente no JS)');
  });
}