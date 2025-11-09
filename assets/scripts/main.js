fetch("../../header.html")
    .then(response => response.text())
    .then(data => {
        document.getElementById("header").innerHTML = data;

        const themeInputs = document.querySelectorAll(".theme-controller");

        themeInputs.forEach(input => {
            input.addEventListener("change", () => {
                localStorage.setItem("theme", input.value);
                document.documentElement.setAttribute("data-theme", input.value);
            });
        });

        const saved = localStorage.getItem("theme");
        if (saved) {
            document.documentElement.setAttribute("data-theme", saved);
            document.querySelector(`.theme-controller[value="${saved}"]`)?.setAttribute("checked", "checked");
        };
});

fetch("../../footer.html")
    .then(response => response.text())
    .then(data => {
        document.getElementById("footer").innerHTML = data;
});