document.addEventListener("DOMContentLoaded", () => {
    const { personal, skills, proyectos, redes } = portfolioData;

    const elNombre = document.getElementById("hero-nombre");
    const elSaludo = document.getElementById("hero-saludo");
    const elSobreMi = document.getElementById("sobre-mi-texto");

    if (elNombre) elNombre.textContent = personal.nombre;
    if (elSaludo) elSaludo.textContent = personal.saludo;
    if (elSobreMi) elSobreMi.textContent = personal.sobreMi;

     // SKILLS

    const skillsContainer = document.getElementById("skills-container");
    if (skillsContainer) {
        skillsContainer.innerHTML = skills.map(skill => `
            <div class="skill-item">
                <img src="${skill.imagen}" alt="${skill.nombre}" title="${skill.nombre}">
            </div>
        `).join("");
    }

    // PROYECTOS

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
});