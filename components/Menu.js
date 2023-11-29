// components/menu/Menu.js
import React from "react";
import "./menu-style.css"; // Importe o estilo do menu

const Menu = () => {
  // Conteúdo HTML do seu arquivo index.html
  const htmlContent = `
  <!DOCTYPE html>
  <html lang="pt-BR">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Menu</title>
  
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/font/bootstrap-icons.css">
      <link rel="stylesheet" href="menu-style.css">
  </head>
  <body>
  
      <nav class="menu-lateral">
          <div class="btn-expandir" id="btn-exp">
              <i class="bi bi-list"></i>
          </div>
  
          <ul>
              <li class="item-menu">
                  <a href="#">
                      <span class="icon"><i class="bi bi-house-fill"></i></span>
                      <span class="txt-link">Dashboard</span>
                  </a>
              </li>
              <li class="item-menu">
                  <a href="http://10.22.48.47:3000/unidadecrud">
                      <span class="icon"><i class="bi bi-person-fill-gear"></i></span>
                      <span class="txt-link">Usuários</span>
                  </a>
              </li>
              <li class="item-menu">
                  <a href="http://10.22.48.47:3000/ramalcrud">
                      <span class="icon"><i class="bi bi-telephone-fill"></i></span>
                      <span class="txt-link">Ramal</span>
                  </a>
              </li>
              <li class="item-menu">
                  <a href="http://10.22.48.47:3000/coordenadoriacrud">
                      <span class="icon"><i class="bi bi-globe2"></i></span>
                      <span class="txt-link">Gerenciar</span>
                  </a>
              </li>
              <li class="item-menu">
                  <a href="http://10.22.48.47:3000/cargocrud">
                      <span class="icon"><i class="bi bi-journal-check"></i></span>
                      <span class="txt-link">Relatórios</span>
                  </a>
              </li>
          </ul>
  
      </nav>
      <script src="menu-script.js"></script>
  </body>
  </html>
  `;

  return (
    <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
  );
};

export default Menu;
