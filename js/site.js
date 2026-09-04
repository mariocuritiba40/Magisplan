// Landing do Magisplan -- só o essencial: abrir/fechar o menu no celular.
(function () {
  "use strict";
  var botao = document.getElementById("btn-menu-mobile");
  var menu = document.getElementById("menu-mobile");
  if (!botao || !menu) return;

  botao.addEventListener("click", function () {
    var aberto = !menu.classList.contains("oculto");
    menu.classList.toggle("oculto", aberto);
    botao.setAttribute("aria-expanded", String(!aberto));
  });

  // fecha o menu ao clicar em qualquer link dele
  menu.querySelectorAll("a").forEach(function (a) {
    a.addEventListener("click", function () {
      menu.classList.add("oculto");
      botao.setAttribute("aria-expanded", "false");
    });
  });
})();

// Banner do topo: alterna as duas fotos com um fade suave.
(function () {
  "use strict";
  var banner = document.getElementById("banner-topo");
  if (!banner) return;
  var imgs = banner.querySelectorAll("img");
  if (imgs.length < 2) return;
  var indice = 0;
  setInterval(function () {
    imgs[indice].classList.remove("ativo");
    indice = (indice + 1) % imgs.length;
    imgs[indice].classList.add("ativo");
  }, 4500);
})();

// Tutoriais em vídeo: a miniatura vem sozinha do link do YouTube -- só
// precisa trocar o href de cada .card-video (ver site/index.html #tutoriais).
// Nada pra exportar ou salvar em site/img/.
(function () {
  "use strict";
  document.querySelectorAll(".card-video").forEach(function (card) {
    var m = card.href.match(/(?:v=|youtu\.be\/|embed\/|shorts\/)([\w-]{11})/);
    if (!m) return; // href ainda é o placeholder "[cole aqui...]" -- ignora
    var img = card.querySelector("[data-thumb]");
    if (!img) return;
    img.src = "https://img.youtube.com/vi/" + m[1] + "/hqdefault.jpg";
    img.alt = card.querySelector("h3") ? card.querySelector("h3").textContent : "";
  });
})();
