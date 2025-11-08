const ul6 = document.getElementById("ul6");
const c6 = document.getElementById("c6");
const out6 = document.getElementById("out6");

c6.onclick = () => {
    const qtd = ul6.querySelectorAll("li").length;
    out6.textContent = "Itens: " + qtd;
}