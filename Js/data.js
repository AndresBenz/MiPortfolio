
const portfolioData = {
    personal: {
        nombre: "Andres Esteban Benitez",
        titulo: "Desarrollador de Software",
        saludo: "Bienvenido Este es mi rincón digital. Mirá en qué estuve trabajando y charlemos sobre cómo impulsar tu próximo proyecto.",
        sobreMi: "Técnico en Programación egresado de la UTN. Más allá de cualquier lenguaje, lo que me mueve es la lógica detrás de los sistemas: entender cómo conectar las piezas, estructurar bien los datos y resolver problemas reales con código claro, ordenado y pensado para durar.",
        
         datosSobreMi: [
        {
            icono: "🎓",
            titulo: "Formación",
            principal: "Técnico en Programación",
            detalle: "UTN FRGP"
        },
        {
            icono: "💻",
            titulo: "Enfoque",
            principal: "Desarrollo Backend",
            detalle: ".NET / C#"
        },
        {
            icono: "⚡",
            titulo: "Objetivo",
            principal: "Crecimiento Profesional",
            detalle: "Aprendizaje continuo"
        }
    ]
    },

    skills: [
    { 
        nombre: "C++", 
        imagen: "Imagenes/c.png",
        categoria: "Lenguaje"
    },
    { 
        nombre: "C#", 
        imagen: "Imagenes/csharpU.png",
        categoria: "Lenguaje"
    },
     { 
        nombre: ".NET", 
        imagen: "Imagenes/dotnet.webp",
        categoria: "Framework"
    },

    { 
        nombre: "SQL Server", 
        imagen: "Imagenes/sqlserver.png",
        categoria: "Base de datos"
    },
    { 
        nombre: "MySQL", 
        imagen: "Imagenes/mysql.png",
        categoria: "Base de datos"
    },

    { 
        nombre: "Java", 
        imagen: "Imagenes/java.png",
        categoria: "Lenguaje"
    },
    { 
        nombre: "HTML5", 
        imagen: "Imagenes/html-5.png",
        categoria: "Frontend"
    },
    { 
        nombre: "CSS3", 
        imagen: "Imagenes/css-3.png",
        categoria: "Frontend"
    },
    { 
        nombre: "JavaScript", 
        imagen: "Imagenes/JavaScript-logo.png",
        categoria: "Frontend"
    },
     { 
        nombre: "Tailwind CSS", 
        imagen: "Imagenes/tailwind.png",
        categoria: "Frontend"
    },
    { 
        nombre: "Bootstrap", 
        imagen: "Imagenes/bootstrap.png",
        categoria: "Frontend"
    },

    { 
        nombre: "Git / GitHub", 
        imagen: "Imagenes/github.png",
        categoria: "Herramienta"
    }


],

    proyectos: [
    {
        titulo: "ProyectaComercio",
        descripcion: "Sistema web de gestión comercial e inventario para agro/jardinería. Permite administrar productos, ventas, compras, clientes y proveedores, con vistas diferenciadas según el rol del usuario, alertas de stock bajo y generación de reportes en PDF.",
        
        imagenes: [
            "Imagenes/Proyecta comercio.png",
            "Imagenes/Proyectacomercio1.png",
            "Imagenes/Proyectacomercio2.png",
            "Imagenes/Proyectacomercio3.png",
            "Imagenes/Proyectacomercio4.png"
        ],

        tags: ["C#", "ASP.NET", "SQL Server", "Bootstrap"],
        github: "https://github.com/AndresBenz/ProyectaComercio.git"
    },

    {
    titulo: "Tienda Mundo Shop",
    descripcion: "Aplicación web de catálogo de productos y carrito de compras desarrollada en equipo con compañeros. Utilizamos C# y ASP.NET Web Forms sobre .NET Framework 4.8, con SQL Server para almacenar artículos, marcas, categorías e imágenes. Permite buscar productos, consultar sus detalles y agregarlos al carrito.",

    imagenes: [
        "Imagenes/Mundoshop.png",
        "Imagenes/Mundoshop1.png",
        "Imagenes/Mundoshop2.png"
    ],

    tags: ["C#", "ASP.NET Web Forms", ".NET Framework", "SQL Server"],
    github: "https://github.com/AndresBenz/Tp-Carrito-equipo-O1.git"
},

    {
        titulo: "PlantasSabias",
        descripcion: "Sitio web educativo y comercial sobre jardinería y cuidado botánico, desarrollado con HTML5 y CSS3, con diseño orientado a una navegación simple y clara.",

        imagenes: [
            "Imagenes/PlantaSabias.png",
            "Imagenes/PlantasSabias.png",
            "Imagenes/PlantasSabias1.png",
            "Imagenes/PlantasSabias2.png"
        ],

        tags: ["HTML5", "CSS3"],
        github: "https://github.com/AndresBenz/PlantasSabias.git"
    },

    {
        titulo: "Aterrizar.com",
        descripcion: "Proyecto web académico de una etapa anterior de mi formación, desarrollado junto a dos compañeros de la facultad con ASP.NET y C#, utilizando SQL Server como base de datos.",

        imagenes: [
            "Imagenes/aterrizar1.png",
            "Imagenes/aterrizar2.png",
            "Imagenes/aterrizar3.png",
            "Imagenes/aterrizar4.png"
        ],

        tags: ["ASP.NET", "C#", "SQL Server"],
        github: "https://github.com/AndresBenz/Aterrizar.com.git"
    }
    ],

    contacto: {
    subtitulo: "CONTACTO",

    titulo: "Trabajemos",
    tituloDestacado: "juntos",

    

    miniTitulo: "HABLEMOS",

    pregunta: "¿Tenés una idea",
    preguntaDestacada: "en mente?",

    texto: "Si querés contactarme por una oportunidad laboral, proyecto o colaboración, completá el formulario y el mensaje llegará directamente a mi correo."
},

    redes: {
    github: "https://github.com/AndresBenz",
    linkedin: "https://www.linkedin.com/in/andres-esteban-benitez"
},

cv: {
    texto: "Descargar CV",
    archivo: "Imagenes/CV-Andres-Benitez.pdf"
},

};
