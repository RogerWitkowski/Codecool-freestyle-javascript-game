let n = 0;
document.addEventListener("click", () => {
    logo()
})

function logo() {
    if (n == 0) {
        let logo = document.getElementById("logo");
        logo.innerHTML = '<img class="item fade-in" src="static/logo1.png">';
        n = 1;
        setTimeout(function () { window.location.href = "preview.html"; }, 5000);
    }
}