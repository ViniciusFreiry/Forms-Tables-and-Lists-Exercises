const tb12 = document.getElementById("tb12");
const info12 = document.getElementById("info12");

tb12.onclick = (e) => {
    const tr = e.target.closest("tr");

    if (tr && tr.rowIndex) {
        const nome = tr.cells[0].textContent;
        const idade = tr.cells[1].textContent;

        info12.textContent = `Selecionado: ${nome}, ${idade} anos`;
    }
}