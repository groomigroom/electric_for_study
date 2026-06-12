let pp = document.querySelectorAll("p");

pp.forEach((pps) => {
    pps.addEventListener("click", () => {
        pps.classList.add("on");
    });
});
