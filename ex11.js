const tb11 = document.getElementById("tb11");
const sum11 = document.getElementById("sum11");
const res11 = document.getElementById("res11");

sum11.onclick = () => {
    const total = [...tb11.rows].slice(1)
    .reduce((sum, tr) => sum + Number(tr.cells[1].textContent), 0);

    res11.textContent = `Total: ${total}`;
}