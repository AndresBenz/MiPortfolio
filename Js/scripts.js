document.addEventListener("DOMContentLoaded", () => {
    const { personal, skills, proyectos, redes } = portfolioData;

    const elNombre = document.getElementById("hero-nombre");
    const elSaludo = document.getElementById("hero-saludo");
    const elSobreMi = document.getElementById("sobre-mi-texto");

    if (elNombre) elNombre.textContent = personal.nombre;
    if (elSaludo) elSaludo.textContent = personal.saludo;
    if (elSobreMi) elSobreMi.textContent = personal.sobreMi;

    const sobreMiDatos = document.getElementById("sobre-mi-datos");

if (sobreMiDatos) {

    sobreMiDatos.innerHTML = personal.datosSobreMi.map(dato => `
        <div class="dato-card">

            <span class="dato-icono">${dato.icono}</span>

            <div>
                <h3>${dato.titulo}</h3>
                <p>${dato.principal}</p>
                <span>${dato.detalle}</span>
            </div>

        </div>
    `).join("");

}

     // SKILLS

    const skillsContainer = document.getElementById("skills-container");
    if (skillsContainer) {
        skillsContainer.innerHTML = skills.map(skill => `
           <div class="skill-card">

            <div class="skill-icono">
                <img 
                    src="${skill.imagen}" 
                    alt="${skill.nombre}"
                >
            </div>

            <h3>${skill.nombre}</h3>

            <span>${skill.categoria}</span>

        </div>
        `).join("");
    }

    // PROYECTOS

    const proyectosContainer = document.getElementById("proyectos-container");

if (proyectosContainer) {

    proyectosContainer.innerHTML = proyectos.map((proy, index) => `

        <article class="proyecto-item ${index % 2 !== 0 ? "proyecto-invertido" : ""}">

            <!-- IMAGEN / CARRUSEL -->
            <div class="proyecto-galeria">

                <<div class="proyecto-imagen-wrapper skeleton">

    <img
        class="proyecto-imagen"
        src="${proy.imagenes[0]}"
        alt="${proy.titulo}"
        data-proyecto="${index}"
        data-imagen="0"
        onload="this.parentElement.classList.remove('skeleton')"
    >

                    ${proy.imagenes.length > 1 ? `

                        <button 
                            class="proyecto-flecha proyecto-anterior"
                            data-proyecto="${index}"
                            aria-label="Imagen anterior"
                        >
                            ‹
                        </button>

                        <button 
                            class="proyecto-flecha proyecto-siguiente"
                            data-proyecto="${index}"
                            aria-label="Imagen siguiente"
                        >
                            ›
                        </button>

                    ` : ""}

                </div>

                <!-- INDICADORES -->
                <div class="proyecto-indicadores">

                    ${proy.imagenes.map((_, imgIndex) => `
                        <button
                            class="proyecto-punto ${imgIndex === 0 ? "activo" : ""}"
                            data-proyecto="${index}"
                            data-imagen="${imgIndex}"
                            aria-label="Ver imagen ${imgIndex + 1}"
                        ></button>
                    `).join("")}

                </div>

            </div>


            <!-- INFORMACIÓN -->
            <div class="proyecto-info">

                <div class="proyecto-numero">
                    ${String(index + 1).padStart(2, "0")}
                    <span></span>
                </div>

                <h3>${proy.titulo}</h3>

                <p>${proy.descripcion}</p>

                <div class="proyecto-tags">

                    ${proy.tags.map(tag => `
                        <span>${tag}</span>
                    `).join("")}

                </div>

                <div class="proyecto-botones">

                    <a 
                        href="${proy.github}" 
                        target="_blank"
                        class="proyecto-btn proyecto-btn-github"
                    >
                        GitHub ↗
                    </a>

                </div>

            </div>

        </article>

    `).join("");


    // ===============================
    // CARRUSEL
    // ===============================

    function cambiarImagen(proyectoIndex, nuevaImagen) {

        const proyecto = proyectos[proyectoIndex];

        if (!proyecto) return;

        const totalImagenes = proyecto.imagenes.length;

        // Permite pasar de última -> primera
        // y de primera -> última
        nuevaImagen =
            (nuevaImagen + totalImagenes) % totalImagenes;


        const imagen = document.querySelector(
            `.proyecto-imagen[data-proyecto="${proyectoIndex}"]`
        );

        if (!imagen) return;


        // pequeña animación
        imagen.classList.add("cambiando");


        setTimeout(() => {

            imagen.src = proyecto.imagenes[nuevaImagen];
            imagen.dataset.imagen = nuevaImagen;

            imagen.classList.remove("cambiando");

        }, 150);


        // actualizar puntitos

        document.querySelectorAll(
            `.proyecto-punto[data-proyecto="${proyectoIndex}"]`
        ).forEach((punto, index) => {

            punto.classList.toggle(
                "activo",
                index === nuevaImagen
            );

        });
    }


    // FLECHA SIGUIENTE

    document.querySelectorAll(".proyecto-siguiente")
        .forEach(boton => {

            boton.addEventListener("click", () => {

                const proyectoIndex =
                    Number(boton.dataset.proyecto);

                const imagen = document.querySelector(
                    `.proyecto-imagen[data-proyecto="${proyectoIndex}"]`
                );

                const actual =
                    Number(imagen.dataset.imagen);

                cambiarImagen(
                    proyectoIndex,
                    actual + 1
                );

            });

        });


    // FLECHA ANTERIOR

    document.querySelectorAll(".proyecto-anterior")
        .forEach(boton => {

            boton.addEventListener("click", () => {

                const proyectoIndex =
                    Number(boton.dataset.proyecto);

                const imagen = document.querySelector(
                    `.proyecto-imagen[data-proyecto="${proyectoIndex}"]`
                );

                const actual =
                    Number(imagen.dataset.imagen);

                cambiarImagen(
                    proyectoIndex,
                    actual - 1
                );

            });

        });


    // PUNTITOS

    document.querySelectorAll(".proyecto-punto")
        .forEach(punto => {

            punto.addEventListener("click", () => {

                cambiarImagen(
                    Number(punto.dataset.proyecto),
                    Number(punto.dataset.imagen)
                );

            });

        });

}

  // REDES

    const linkGithub = document.getElementById("link-github");
    const linkLinkedin = document.getElementById("link-linkedin");

    if (linkGithub) linkGithub.href = redes.github;
    if (linkLinkedin) linkLinkedin.href = redes.linkedin;

    //PARTÍCULAS

     particlesJS("particles-js", {

        

        particles: {

            number: {
                value: 100,

                density: {
                    enable: true,
                    value_area: 600
                }
            },


        
            color: {
                value: ["#3498db", "#ff4054", "#ffffff"]
            },


         
            shape: {
                type: "circle"
            },


         

            opacity: {
                value: 0.5,
                random: true
            },


           
            size: {
                value: 1,
                random: true
            },


           
            line_linked: {

                
                enable: true,

             
                distance: 120,

                
                color: "#cc690c",

                
                opacity: 0.5,

                
                width: 1
            },


           

            move: {

                enable: true,

                
                speed: 1.6,

                direction: "none",

               
                random: true,

              
                straight: false,

               
                out_mode: "out",
                bounce: false
            }
        },


       
        // INTERACCIÓN CON EL MOUSE
       

        interactivity: {

            detect_on: "window",

            events: {

               
                onhover: {

                    enable: true,

                  
                    mode: "grab"
                },

                
                onclick: {

                    enable: true,

                   
                    mode: "push"
                },

                resize: true
            },


            modes: {

               
               

                grab: {

                   
                    distance: 220,

                    line_linked: {

                       
                        opacity: 0.5
                    }
                },


                

                push: {

                    particles_nb: 3
                }
            }
        },


      
        retina_detect: true

    });


particlesJS("particles-fondo", {

    particles: {

        number: {
            value: 100,
            density: {
                enable: true,
                value_area: 900
            }
        },

        color: {
            value: "#cc690c"
        },

        shape: {
            type: "circle"
        },

        opacity: {
            value: 0.35,
            random: true
        },

        size: {
            value: 1,
            random: true
        },

        line_linked: {
            enable: true,
            distance: 110,
            color: "#cc690c",
            opacity: 0.35,
            width: 1
        },

        move: {
            enable: true,
            speed: 0.8,
            direction: "none",
            random: false,
            straight: false,
            out_mode: "out",
            bounce: false
        }
    },


    // SIN INTERACCIÓN CON EL MOUSE
    interactivity: {

        detect_on: "canvas",

        events: {

            onhover: {
                enable: false
            },

            onclick: {
                enable: false
            },

            resize: true
        }
    },


    retina_detect: true

});

// ===============================
// CV
// ===============================

const btnCv = document.getElementById("btn-cv");
const btnCvTexto = document.getElementById("btn-cv-texto");

if (btnCv) {
    btnCv.href = cv.archivo;
}

if (btnCvTexto) {
    btnCvTexto.textContent = cv.texto;
}

});