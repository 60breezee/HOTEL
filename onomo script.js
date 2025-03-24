document.addEventListener("DOMContentLoaded", function () {
    const elements = document.querySelectorAll(".fade-in, .slide-up");

    function revealOnScroll() {
        elements.forEach(el => {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight - 50) {
                el.classList.add("reveal");
            }
        });
    }

    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll();
});
