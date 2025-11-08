const f7 = document.getElementById("f7");
const ul7 = document.getElementById("ul7");

f7.oninput = () => {
    const q = f7.value.toLowerCase();

    ul7.querySelectorAll("li").forEach(li => {
        const ok = li.textContent.toLowerCase().includes(q);
        li.style.display = (ok ? "" : "none");
    });
}