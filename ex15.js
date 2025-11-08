const f15 = document.getElementById("f15");
const json15 = document.getElementById("json15");

f15.onsubmit = (e) => {
    e.preventDefault();
    const fd = new FormData(f15);
    const obj = Object.fromEntries(fd);
    const json = JSON.stringify(obj, null, 2);

    json15.textContent = json;
}