/* ========================= */
/* MENU ATIVO AUTOMÁTICO */
/* ========================= */

const menuLinks = document.querySelectorAll(".nav-list a");

/* ========================= */
/* PEGAR URL ATUAL */
/* ========================= */

const paginaAtual = window.location.pathname.split("/").pop();

/* ========================= */
/* PERCORRER LINKS */
/* ========================= */

menuLinks.forEach(link => {

    /* ========================= */
    /* PEGAR HREF */
    /* ========================= */

    const linkPagina = link.getAttribute("href");

    /* ========================= */
    /* VERIFICAR PÁGINA */
    /* ========================= */

    if (linkPagina === paginaAtual) {

        link.classList.add("active");

    }

});

/* ========================= */
/* ANIMAÇÃO SCROLL HEADER */
/* ========================= */

const header = document.querySelector(".header");

/* ========================= */
/* EVENTO SCROLL */
/* ========================= */

window.addEventListener("scroll", () => {

    /* ========================= */
    /* VERIFICAR POSIÇÃO */
    /* ========================= */

    if (window.scrollY > 50) {

        header.style.backgroundColor = "#000000";
        header.style.boxShadow = "0 5px 20px rgba(0,0,0,0.3)";

    } else {

        header.style.backgroundColor = "#111111";
        header.style.boxShadow = "none";

    }

});

/* ========================= */
/* SCROLL SUAVE */
/* ========================= */

const linksInternos = document.querySelectorAll('a[href^="#"]');

/* ========================= */
/* PERCORRER LINKS */
/* ========================= */

linksInternos.forEach(link => {

    /* ========================= */
    /* CLIQUE */
    /* ========================= */

    link.addEventListener("click", function (e) {

        /* ========================= */
        /* PEGAR ID */
        /* ========================= */

        const id = this.getAttribute("href");

        /* ========================= */
        /* VERIFICAR */
        /* ========================= */

        if (id !== "#") {

            e.preventDefault();

            /* ========================= */
            /* SEÇÃO */
            /* ========================= */

            const secao = document.querySelector(id);

            /* ========================= */
            /* SCROLL */
            /* ========================= */

            if (secao) {

                secao.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }

        }

    });

});

/* ========================= */
/* BOTÃO WHATSAPP FLOAT */
/* ========================= */

const whatsappFloat = document.querySelector(".whatsapp-float");

/* ========================= */
/* VERIFICAR BOTÃO */
/* ========================= */

if (whatsappFloat) {

    /* ========================= */
    /* EFEITO PULSAR */
    /* ========================= */

    setInterval(() => {

        whatsappFloat.style.transform = "scale(1.1)";

        setTimeout(() => {

            whatsappFloat.style.transform = "scale(1)";

        }, 500);

    }, 2000);

}

/* ========================= */
/* ANIMAÇÃO AO SCROLL */
/* ========================= */

const elementosAnimados = document.querySelectorAll(
    ".servico-card, .produto-card, .diferencial-card, .depoimento-card"
);

/* ========================= */
/* OBSERVER */
/* ========================= */

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        /* ========================= */
        /* VERIFICAR */
        /* ========================= */

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";

        }

    });

}, {
    threshold: 0.2
});

/* ========================= */
/* APLICAR ANIMAÇÃO */
/* ========================= */

elementosAnimados.forEach(elemento => {

    /* ========================= */
    /* ESTADO INICIAL */
    /* ========================= */

    elemento.style.opacity = "0";
    elemento.style.transform = "translateY(50px)";
    elemento.style.transition = "0.6s ease";

    /* ========================= */
    /* OBSERVAR */
    /* ========================= */

    observer.observe(elemento);

});

/* ========================= */
/* BOTÕES HERO */
/* ========================= */

const botoes = document.querySelectorAll(
    ".btn-primary, .btn-secondary, .btn-produto, .btn-whatsapp"
);

/* ========================= */
/* EFEITO HOVER */
/* ========================= */

botoes.forEach(botao => {

    /* ========================= */
    /* MOUSE ENTER */
    /* ========================= */

    botao.addEventListener("mouseenter", () => {

        botao.style.transform = "translateY(-3px)";

    });

    /* ========================= */
    /* MOUSE LEAVE */
    /* ========================= */

    botao.addEventListener("mouseleave", () => {

        botao.style.transform = "translateY(0)";

    });

});

/* ========================= */
/* PRELOADER SIMPLES */
/* ========================= */

window.addEventListener("load", () => {

    document.body.style.opacity = "1";

});

/* ========================= */
/* BODY INICIAL */
/* ========================= */

document.body.style.opacity = "0";
document.body.style.transition = "0.4s";

/* ========================= */
/* CONSOLE */
/* ========================= */

console.log("Gráfica B21 carregada com sucesso!");