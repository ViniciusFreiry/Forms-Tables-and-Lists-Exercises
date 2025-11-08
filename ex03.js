const ul3 = document.getElementById("ul3");

ul3.onclick = (e) => {
    if (!e.target || e.target.tagName !== "LI") return;
    const t = e.target.textContent;

    e.target.textContent = (t.endsWith(" (feito)") ? t.replace(" (feito)", "") : t + " (feito)");
}