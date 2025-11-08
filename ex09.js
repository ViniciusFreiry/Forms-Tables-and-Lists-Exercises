const tb9 = document.getElementById("tb9");

tb9.onclick = (e) => {
    const tr = e.target.closest("tr");
    if (tr && tr.rowIndex) tr.remove();
}