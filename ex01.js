const f1 = document.getElementById("f1");
const ul1 = document.getElementById("ul1");

f1.onsubmit = (e) => {
    e.preventDefault();
    const texto = f1.item.value.trim();

    if (!texto) return;
    const li = document.createElement("li");

    li.textContent = texto;
    ul1.appendChild(li);
    f1.reset();
    f1.item.focus();
}