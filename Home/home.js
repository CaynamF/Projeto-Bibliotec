const menu = document.getElementById("menu"); /* Pegando o elemento pelo ID */

// Estamos pegando o elemento de forma genérica - pode  ser classe (precosa trazer o ponto) ou pode ser ID (precisa trazer a hashtag). 
const navMenu = document.querySelector(".navegacao");

menu.addEventListener("click", function() {
    if(navMenu.className == "navegacao") {
        navMenu.className = "navegacao ativo";
    }
    else {
        navMenu.className = "navegacao";
    }
})

// Opção com arow function -> função lambda
// menu.addEventListener("click", () => {})