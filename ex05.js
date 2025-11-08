const ul5 = document.getElementById("ul5");
const up5 = document.getElementById("up5");
const sel5 = document.getElementById("sel5");

let liSel = null;

ul5.onclick = (e) => {
    if (e.target && e.target.tagName === "LI") {
        liSel = e.target;
        sel5.textContent = "Sel: " + liSel.textContent;
    }
}

up5.onclick = () => {
    if (!liSel || !liSel.previousElementSibling) return;
    ul5.insertBefore(liSel, liSel.previousElementSibling);
}