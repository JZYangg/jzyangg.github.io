function toggleSection(id) {
    const sections = document.querySelectorAll('.section-content');

    sections.forEach(section => {
        if (section.id === id) {
            section.classList.toggle("open");
        } else {
            section.classList.remove("open");
        }
    });
}