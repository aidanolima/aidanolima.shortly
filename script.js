/*==================== MENU SHOW Y HIDDEN ====================*/
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

/*===== MENU SHOW =====*/
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

/*===== MENU HIDDEN =====*/
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll(".nav-link");

function linkAction() {
  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.remove("show-menu");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));

/*==================== QUALIFICATION TABS ====================*/
const tabs = document.querySelectorAll("[data-target]"),
  tabContents = document.querySelectorAll("[data-content]");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = document.querySelector(tab.dataset.target);

    tabContents.forEach((tabContent) => {
      tabContent.classList.remove("qualification-active");
    });
    target.classList.add("qualification-active");

    tabs.forEach((tab) => {
      tab.classList.remove("qualification-active");
    });

    tab.classList.add("qualification-active");
  });
});

/*==================== SERVICES MODAL ====================*/
const boxViews = document.querySelectorAll(".services-box"),
  boxBtns = document.querySelectorAll(".services-button"),
  boxCloses = document.querySelectorAll(".services-box-close");

let box = function (boxClick) {
  boxViews[boxClick].classList.add("active-box");
};

boxBtns.forEach((boxBtn, i) => {
  boxBtn.addEventListener("click", () => {
    box(i);
  });
});

boxCloses.forEach((boxClose) => {
  boxClose.addEventListener("click", () => {
    boxViews.forEach((boxView) => {
      boxView.classList.remove("active-box");
    });
  });
});

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav-menu a[href*=" + sectionId + "]")
        .classList.add("active-link");
    } else {
      document
        .querySelector(".nav-menu a[href*=" + sectionId + "]")
        .classList.remove("active-link");
    }
  });
}
window.addEventListener("scroll", scrollActive);

/*==================== CHANGE BACKGROUND HEADER ====================*/
function scrollHeader() {
  const nav = document.getElementById("header");
  if (this.scrollY >= 200) nav.classList.add("scroll-header");
  else nav.classList.remove("scroll-header");
}
window.addEventListener("scroll", scrollHeader);

/*==================== SHOW SCROLL TOP ====================*/
function scrollUp() {
  const scrollUp = document.getElementById("scroll-up");
  if (this.scrollY >= 560) scrollUp.classList.add("show-scroll");
  else scrollUp.classList.remove("show-scroll");
}
window.addEventListener("scroll", scrollUp);

/*==================== DARK LIGHT THEME ====================*/
const themeButton = document.getElementById("theme-button");
const darkTheme = "dark-theme";
const iconTheme = "fa-sun";

const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

const getCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? "dark" : "light";
const getCurrentIcon = () =>
  themeButton.classList.contains(iconTheme) ? "fa-moon" : "fa-sun";

if (selectedTheme) {
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
    darkTheme
  );
  themeButton.classList[selectedIcon === "fa-moon" ? "add" : "remove"](
    iconTheme
  );
}

themeButton.addEventListener("click", () => {
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);
  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());
});

/*==================== LANGUAGE SELECTION & TRANSLATION ====================*/
const languageToggle = document.getElementById("language-toggle");
const languageMenu = document.getElementById("language-menu");
const languageOptions = document.querySelectorAll(".language-option");

// Toggle Menu Idioma
if (languageToggle) {
    languageToggle.addEventListener("click", () => {
        languageMenu.classList.toggle("show-language");
    });
}

// Fechar menu ao clicar fora
document.addEventListener("click", (e) => {
    if (languageToggle && !languageToggle.contains(e.target)) {
        languageMenu.classList.remove("show-language");
    }
});

// Dicionário de Traduções (ATUALIZADO COM PROJETOS 3 e 4)
const translations = {
  en: {
    nav_home: "Home",
    nav_about: "About",
    nav_skills: "Skills",
    nav_services: "Services",
    nav_projects: "Projects",
    nav_contact: "Contact",
    home_title: "Hello, I'm Áidano Lima",
    home_subtitle: "Dev Full Stack, Cloud and Project Manager",
    home_description: "Passionate about building scalable and efficient digital solutions, I specialize in technology and innovation, web development, application optimization, and cloud computing. With a solid technical foundation and a problem-solving mindset, my goal is to create impactful technologies that drive innovation.",
    home_contact_btn: "Contact Me",
    home_scroll: "Scroll down",
    about_title: "About Me",
    about_subtitle: "My Introduction",
    about_description: "IT Professional with a background in large-scale enterprises and over 22 years of experience in both public and private sectors. Expertise in Software Development Project Management, serving clients in banking, telecommunications, education, and operations planning.",
    about_exp_years: "Years <br /> experience",
    about_exp_projects: "Completed <br /> project GitHub",
    about_exp_companies: "Companies <br /> worked",
    about_download_cv: "Download my CV",
    skills_title: "Skills",
    skills_subtitle: "My Technical Skills",
    qualification_title: "Qualification",
    qualification_subtitle: "My journey",
    qualification_work: "Work History",
    qualification_edu: "Education",
    services_title: "Services",
    services_subtitle: "What I offer",
    service_web_title: "Web <br /> Development",
    service_view_more: "View more",
    service_web_job: "Web <br /> Developer",
    service_web_1: "Responsive Web Design (HTML/CSS/JS)",
    service_web_2: "React JS & Frontend Frameworks",
    service_web_3: "Application Optimization",
    service_cloud_title: "Cloud <br /> Computing",
    service_cloud_job: "Cloud <br /> Solutions",
    service_cloud_3: "Microservices Architecture",
    service_cloud_4: "Scalable Infrastructure",
    service_pm_title: "Project <br /> Management",
    service_pm_job: "Project <br /> Manager",
    service_pm_1: "Agile Development",
    service_pm_2: "Stakeholder Management",
    service_pm_3: "Team Leadership",
    projects_title: "Projects",
    projects_subtitle: "Most recent work",
    project_1_desc: "Implementation of scalable cloud architectures This is a SaaS project for an insurance policy management system, developed to facilitate the digital administration of proposals and policies.",
    project_2_desc: "Large-scale dev FrontEnd software development project managementPet Admin GOV is a senior administration panel developed to manage pets and their owners in a centralized way.",
    project_3_title: "Professional Landing Page",
    project_3_desc: "Creation of the corporate landing page for ASL SOLUÇÕES TECH, a page with all company information.",
    project_4_title: "Sales Landing Page",
    project_4_desc: "Creation of the sales landing page for APÓLICE SYSTEM software, a dynamic page for contracting IT services.",
    project_view: "View Details",
    testimonial_title: "Testimonial",
    testimonial_subtitle: "My clients and professional friends are saying",
    client_friend: "Professional Friends",
    client_pro: "Professional Client",
    client_partner: "Tech Partner",
    testim_1: "Áidano is an exemplary professional. Skilled, committed, and motivated. He is capable of leading and building relationships in the projects he works on.",
    testim_2: "Áidano is a dynamic, creative, and willing professional. He has a unifying profile and works easily with the teams he's involved with.",
    testim_3: "Áidano is highly technical, possesses excellent analytical skills, and is always committed to the company's objectives.",
    testim_4: "Excellent delivery and technical support. The project was completed ahead of schedule with high quality code.",
    testim_5: "Great experience working together on cloud migration. Áidano has deep knowledge in AWS and architecture.",
    project_contact_title: "Do you have a new project, Collaboration, And Work?",
    project_contact_desc: "Feel Free to Discuss with me",
    contact_title: "Contact me",
    contact_subtitle: "Get in touch",
    typing_phrases: ["I'll be here soon", "In more detail", "about my portfolio"]
  },
  pt: {
    nav_home: "Início",
    nav_about: "Sobre",
    nav_skills: "Habilidades",
    nav_services: "Serviços",
    nav_projects: "Projetos",
    nav_contact: "Contato",
    home_title: "Olá, sou Áidano Lima",
    home_subtitle: "Dev Full Stack, Cloud e Gerente de Projetos",
    home_description: "Apaixonado por criar soluções digitais escaláveis e eficientes, sou especialista em tecnologia e inovação, desenvolvimento web, otimização de aplicações e computação em nuvem. Com uma base técnica sólida e foco na resolução de problemas, meu objetivo é criar tecnologias impactantes.",
    home_contact_btn: "Entre em Contato",
    home_scroll: "Role para baixo",
    about_title: "Sobre Mim",
    about_subtitle: "Minha Introdução",
    about_description: "Profissional de TI com experiência em grandes empresas e mais de 22 anos de atuação nos setores público e privado. Expertise em Gestão de Projetos de Desenvolvimento de Software, atendendo clientes bancários, telecomunicações e educação.",
    about_exp_years: "Anos <br /> experiência",
    about_exp_projects: "Projetos <br /> GitHub",
    about_exp_companies: "Empresas <br /> trabalhadas",
    about_download_cv: "Baixar meu CV",
    skills_title: "Habilidades",
    skills_subtitle: "Minhas Skills Técnicas",
    qualification_title: "Qualificação",
    qualification_subtitle: "Minha jornada",
    qualification_work: "Experiência",
    qualification_edu: "Educação",
    services_title: "Serviços",
    services_subtitle: "O que ofereço",
    service_web_title: "Desenv. <br /> Web",
    service_view_more: "Ver mais",
    service_web_job: "Desenvolvedor <br /> Web",
    service_web_1: "Design Responsivo (HTML/CSS/JS)",
    service_web_2: "React JS e Frameworks Frontend",
    service_web_3: "Otimização de Aplicações",
    service_cloud_title: "Computação <br /> em Nuvem",
    service_cloud_job: "Soluções <br /> Cloud",
    service_cloud_3: "Arquitetura de Microsserviços",
    service_cloud_4: "Infraestrutura Escalável",
    service_pm_title: "Gestão de <br /> Projetos",
    service_pm_job: "Gerente de <br /> Projetos",
    service_pm_1: "Desenvolvimento Ágil",
    service_pm_2: "Gestão de Stakeholders",
    service_pm_3: "Liderança de Equipe",
    projects_title: "Projetos",
    projects_subtitle: "Trabalhos recentes",
    project_1_desc: "Implementação de arquiteturas de nuvem escaláveis. Este é um projeto SaaS para um sistema de gestão de apólices de seguros, desenvolvido para facilitar a administração digital de propostas e apólices.",
    project_2_desc: "Gestão de projetos de software FrontEnd em larga escala. Pet Admin GOV é um painel administrativo sênior desenvolvido para gerenciar pets e seus donos de forma centralizada.",
    project_3_title: "LandingPage Profissional",
    project_3_desc: "Criação da landingpage corporativa da ASL SOLUÇÕES TECH, uma pagina com todas as informaçoes da empresa.",
    project_4_title: "LandingPage de Vendas",
    project_4_desc: "Criação da landingpage de vendas do software APÓLICE SYSTEM, uma pagina dinamica para contrataçao de serviço de TI.",
    project_view: "Ver Detalhes",
    testimonial_title: "Depoimentos",
    testimonial_subtitle: "O que clientes e amigos dizem",
    client_friend: "Amigo Profissional",
    client_pro: "Cliente Profissional",
    client_partner: "Parceiro Técnico",
    testim_1: "Áidano é um profissional exemplar. Habilidoso, comprometido e motivado. É capaz de liderar e construir relacionamentos nos projetos em que atua.",
    testim_2: "Áidano é um profissional dinâmico, criativo e disposto. Tem perfil agregador e transita com facilidade junto às equipes que se envolve.",
    testim_3: "Áidano é altamente técnico, possui ótimo senso analítico e sempre comprometido com o objetivo da empresa.",
    testim_4: "Excelente entrega e suporte técnico. O projeto foi concluído antes do prazo com código de alta qualidade.",
    testim_5: "Ótima experiência trabalhando juntos na migração para nuvem. Áidano tem profundo conhecimento em AWS e arquitetura.",
    project_contact_title: "Tem um novo projeto ou colaboração?",
    project_contact_desc: "Sinta-se à vontade para discutir comigo",
    contact_title: "Contato",
    contact_subtitle: "Entre em contato",
    typing_phrases: ["Estarei aqui em breve", "Com mais detalhes", "sobre meu portfólio"]
  },
  es: {
    nav_home: "Inicio",
    nav_about: "Sobre mí",
    nav_skills: "Habilidades",
    nav_services: "Servicios",
    nav_projects: "Proyectos",
    nav_contact: "Contacto",
    home_title: "Hola, soy Áidano Lima",
    home_subtitle: "Dev Full Stack, Cloud y Project Manager",
    home_description: "Apasionado por crear soluciones digitales escalables y eficientes, me especializo en tecnología e innovación, desarrollo web, optimización de aplicaciones y computación en la nube. Con una base técnica sólida, mi objetivo es crear tecnologías impactantes.",
    home_contact_btn: "Contáctame",
    home_scroll: "Desplazarse",
    about_title: "Sobre Mí",
    about_subtitle: "Mi Introducción",
    about_description: "Profesional de TI con experiencia en grandes empresas y más de 22 años de experiencia en los sectores público y privado. Experiencia en Gestión de Proyectos de Desarrollo de Software, atendiendo clientes en banca, telecomunicaciones y educación.",
    about_exp_years: "Años <br /> experiencia",
    about_exp_projects: "Proyectos <br /> GitHub",
    about_exp_companies: "Empresas <br /> trabajadas",
    about_download_cv: "Descargar mi CV",
    skills_title: "Habilidades",
    skills_subtitle: "Mis Habilidades Técnicas",
    qualification_title: "Cualificación",
    qualification_subtitle: "Mi viaje",
    qualification_work: "Experiencia",
    qualification_edu: "Educación",
    services_title: "Servicios",
    services_subtitle: "Lo que ofrezco",
    service_web_title: "Desarr. <br /> Web",
    service_view_more: "Ver más",
    service_web_job: "Desarrollador <br /> Web",
    service_web_1: "Diseño Web Responsivo (HTML/CSS/JS)",
    service_web_2: "React JS y Frameworks Frontend",
    service_web_3: "Optimización de Aplicaciones",
    service_cloud_title: "Computación <br /> en Nube",
    service_cloud_job: "Soluciones <br /> Cloud",
    service_cloud_3: "Arquitectura de Microservicios",
    service_cloud_4: "Infraestructura Escalable",
    service_pm_title: "Gestión de <br /> Proyectos",
    service_pm_job: "Gerente de <br /> Proyectos",
    service_pm_1: "Desarrollo Ágil",
    service_pm_2: "Gestión de Stakeholders",
    service_pm_3: "Liderazgo de Equipo",
    projects_title: "Proyectos",
    projects_subtitle: "Trabajos recientes",
    project_1_desc: "Implementación de arquitecturas en la nube escalables. Este es un proyecto SaaS para un sistema de gestión de pólizas de seguros, desarrollado para facilitar la administración digital.",
    project_2_desc: "Gestión de proyectos de desarrollo de software FrontEnd a gran escala. Pet Admin GOV es un panel administrativo senior desarrollado para gestionar mascotas y dueños.",
    project_3_title: "Landing Page Profesional",
    project_3_desc: "Creación de la landing page corporativa de ASL SOLUÇÕES TECH, una página con toda la información de la empresa.",
    project_4_title: "Landing Page de Ventas",
    project_4_desc: "Creación de la landing page de ventas del software APÓLICE SYSTEM, una página dinámica para la contratación de servicios de TI.",
    project_view: "Ver Detalles",
    testimonial_title: "Testimonios",
    testimonial_subtitle: "Lo que dicen clientes y amigos",
    client_friend: "Amigo Profesional",
    client_pro: "Cliente Profesional",
    client_partner: "Socio Tecnológico",
    testim_1: "Áidano es un profesional ejemplar. Habilidoso, comprometido y motivado. Es capaz de liderar y construir relaciones en los proyectos en los que trabaja.",
    testim_2: "Áidano es un profesional dinámico, creativo y dispuesto. Tiene un perfil unificador y trabaja fácilmente con los equipos.",
    testim_3: "Áidano es altamente técnico, posee excelentes habilidades analíticas y siempre está comprometido con los objetivos de la empresa.",
    testim_4: "Excelente entrega y soporte técnico. El proyecto se completó antes de lo previsto con código de alta calidad.",
    testim_5: "Gran experiencia trabajando juntos en la migración a la nube. Áidano tiene un profundo conocimiento en AWS y arquitectura.",
    project_contact_title: "¿Tienes un nuevo proyecto o colaboración?",
    project_contact_desc: "Siéntete libre de discutir conmigo",
    contact_title: "Contacto",
    contact_subtitle: "Ponte en contacto",
    typing_phrases: ["Estaré aquí pronto", "Con más detalles", "sobre mi portafolio"]
  }
};

let currentLang = localStorage.getItem("selected-lang") || "en";

function changeLanguage(lang) {
  currentLang = lang;
  localStorage.setItem("selected-lang", lang);
  
  // Atualiza Textos Estáticos
  const elements = document.querySelectorAll("[data-i18n]");
  elements.forEach(element => {
    const key = element.getAttribute("data-i18n");
    if (translations[lang][key]) {
      element.innerHTML = translations[lang][key];
    }
  });

  // Atualiza Frases da Animação
  phrases = translations[lang].typing_phrases;
}

// Event Listeners para botões de idioma
languageOptions.forEach(option => {
  option.addEventListener("click", () => {
    const lang = option.getAttribute("data-lang");
    changeLanguage(lang);
    languageMenu.classList.remove("show-language");
  });
});

/*==================== PORTFOLIO SWIPER ====================*/
let swiperPortfolio = new Swiper(".portfolio-container", {
  cssMode: true,
  loop: true,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

/*==================== TESTIMONIAL SWIPER (COM SETAS/ARROWS) ====================*/
let swiperTestimonial = new Swiper(".testimonial-container", {
  loop: true,
  grabCursor: true,
  spaceBetween: 48,
  slidesPerView: 1, 

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    568: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 50,
    }
  },
});

/*==================== TYPING ANIMATION (DINÂMICO) ====================*/
const typingTextElement = document.getElementById("typing-text");

// VARIÁVEL "LET" AGORA, PARA PERMITIR MUDANÇA DE IDIOMA
let phrases = translations[currentLang].typing_phrases;

let currentPhraseIndex = 0;
let typingSpeed = 100;
let pauseDuration = 1800;
let eraseSpeed = 100;

function typePhrase() {
  let phrase = phrases[currentPhraseIndex];
  typingTextElement.textContent = ""; 
  typingTextElement.classList.remove("no-blink"); 
  typingTextElement.classList.remove("erase"); 

  let i = 0;

  function typeLetter() {
    // Segurança: Se a frase mudar no meio do caminho (troca de idioma)
    if (!phrase) phrase = phrases[0];

    if (i < phrase.length) {
      typingTextElement.textContent += phrase.charAt(i);
      i++;
      setTimeout(typeLetter, typingSpeed);
    } else {
      typingTextElement.classList.add("no-blink");
      setTimeout(erasePhrase, pauseDuration);
    }
  }

  function erasePhrase() {
    let j = phrase.length;
    typingTextElement.classList.remove("no-blink");

    function eraseLetter() {
      if (j >= 0) {
        typingTextElement.textContent = phrase.substring(0, j);
        j--;
        setTimeout(eraseLetter, eraseSpeed);
      } else {
        currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
        setTimeout(typePhrase, pauseDuration);
      }
    }
    eraseLetter();
  }
  typeLetter();
}

window.onload = () => {
    // Inicializa o idioma e as frases antes de começar a animação
    changeLanguage(currentLang);
    typePhrase();
};