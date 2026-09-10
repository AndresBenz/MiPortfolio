JavaScript
document.addEventListener("DOMContentLoaded", () => {
    const { personal, skills, proyectos, redes } = portfolioData;

    const elNombre = document.getElementById("hero-nombre");
    const elSaludo = document.getElementById("hero-saludo");
    const elSobreMi = document.getElementById("sobre-mi-texto");

    if (elNombre) elNombre.textContent = personal.nombre;
    if (elSaludo) elSaludo.textContent = personal.saludo;
    if (elSobreMi) elSobreMi.textContent = personal.sobreMi;

    const skillsContainer = document.getElementById("skills-container");
    if (skillsContainer) {
        skillsContainer.innerHTML = skills.map(skill => `
            <div class="skill-item">
                <img src="${skill.imagen}" alt="${skill.nombre}" title="${skill.nombre}">
            </div>
        `).join("");
    }

    const proyectosContainer = document.getElementById("proyectos-container");
    if (proyectosContainer) {
        proyectosContainer.innerHTML = proyectos.map(proy => `
            <article class="proyecto-card">
                <div class="proyecto-imagen-container">
                    <img src="${proy.imagen}" alt="${proy.titulo}">
                </div>
                <div class="proyecto-contenido">
                    <h4>${proy.titulo}</h4>
                    <p>${proy.descripcion}</p>
                </div>
                <div class="proyecto-tags">
                    ${proy.tags.map(tag => `<span class="tag">${tag}</span>`).join("")}
                </div>
            </article>
        `).join("");
    }

    const linkGithub = document.getElementById("link-github");
    const linkLinkedin = document.getElementById("link-linkedin");

    if (linkGithub) linkGithub.href = redes.github;
    if (linkLinkedin) linkLinkedin.href = redes.linkedin;
});