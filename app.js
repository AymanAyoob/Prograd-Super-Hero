const ironman = document.getElementById("ironman");
const thanos = document.getElementById("thanos");

ironman.onclick = () => {
    thanos.style.opacity = 0;
    ironman.style.opacity = 1;
}

thanos.onclick = () => {
    thanos.style.opacity = 1;
    ironman.style.opacity = 0;
}