const ul4 = document.getElementById("ul4");
const ed4 = document.getElementById("ed4");
const ok4 = document.getElementById("ok4");
const out4 = document.getElementById("out4");

let alvo = null;

ul4.onclick = (e) => {
    if (e.target && e.target.tagName === "LI") {
        alvo = e.target;
        out4.textContent = "Selecionado: " + alvo.textContent;
    }
}

ok4.onclick = () => {
    const novo = ed4.value.trim();

    if (alvo && novo) {
        alvo.textContent = novo;
        out4.textContent = "Atualizado!";
        ed4.value = "";
    }
}