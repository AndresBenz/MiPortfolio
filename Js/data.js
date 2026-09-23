
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
            principal: "Desarrollador Junior",
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
            descripcion: "Sistema web de gestión comercial e inventario para agro/jardinería. Vistas por rol (Admin y Empleado), alertas de stock bajo, facturación en PDF y persistencia en SQL Server.",
            imagen: "Imagenes/ProyectaComercio.png",
            tags: ["C#", "ASP.NET", "SQL Server", "Bootstrap"]
        },
        {
            titulo: "Gestión de Artículos",
            descripcion: "Aplicación de escritorio desarrollada con C#, SQL Server y .NET Framework para la administración ágil de inventario y catálogo de productos.",
            imagen: "Imagenes/TpWinform.png",
            tags: ["C#", ".NET", "SQL Server"]
        },
        {
            titulo: "SimuMesa",
            descripcion: "Sistema en C++ con persistencia en archivos para almacenar y recuperar información de restaurantes: pedidos, menús y reservas.",
            imagen: "Imagenes/SimuMesa.png",
            tags: ["C++", "Archivos"]
        },
        {
            titulo: "PlantasSabias",
            descripcion: "Sitio web educativo y comercial sobre jardinería y cuidado botánico, desarrollado con maquetación en HTML5 y CSS3.",
            imagen: "Imagenes/PlantaSabias.png",
            tags: ["HTML5", "CSS3"]
        }
    ],

    redes: {
        github: "https://github.com/AndresBenz",
        linkedin: "https://www.linkedin.com/in/andres-esteban-benitez"
    }
};