const ul2 = document.getElementById("ul2");

ul2.onclick = (e) => {
    if (e.target && e.target.tagName === "LI") {
        e.target.remove();
    }
}