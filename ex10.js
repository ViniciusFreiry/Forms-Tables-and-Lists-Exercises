const tb10 = document.getElementById("tb10");
const ord10 = document.getElementById("ord10");

ord10.onclick = () => {
    [...tb10.rows].slice(1)
    .sort((a,b) => a.cells[0].textContent.localeCompare(b.cells[0].textContent))
    .forEach(tr => tb10.tBodies[0].appendChild(tr));
}