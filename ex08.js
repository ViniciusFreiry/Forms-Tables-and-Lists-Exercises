const f8 = document.getElementById("f8");
const tb8 = document.getElementById("tb8");

f8.onsubmit = (e) => {
    e.preventDefault();
    const tr = tb8.insertRow();

    tr.insertCell().textContent = f8.nome.value;
    tr.insertCell().textContent = f8.nota.value || "";
    f8.reset();
    f8.nome.focus();
}