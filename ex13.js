const tb13 = document.getElementById("tb13");
const all13 = document.getElementById("all13");
const rmSel13 = document.getElementById("rmSel13");

all13.onchange = () => {
    tb13.querySelectorAll("tr:not(:first-child) input[type='checkbox']")
    .forEach(cb => cb.checked = all13.checked);
}

rmSel13.onclick = () => {
    tb13.querySelectorAll("tr:not(:first-child) input:checked")
    .forEach(cb => cb.closest("tr").remove());
}