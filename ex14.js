const f14 = document.getElementById("f14");
const btn14 = document.getElementById("btn14");
const res14 = document.getElementById("res14");

btn14.onclick = () => {
    if (f14.checkValidity()) {
        res14.textContent = `Válido! E-mail: ${f14.email.value}, Idade: ${f14.idade.value}`;
    } else {
        f14.reportValidity();
    }
}