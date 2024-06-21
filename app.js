const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry);
        entry.target.classList.toggle('show', entry.isIntersecting);
    })
});

const scrollElements = document.querySelectorAll('.hidden');
scrollElements.forEach((el) => observer.observe(el));