/* ========================= */
/* FORMULÁRIO PARA WHATSAPP */
/* ========================= */

const formContato = document.getElementById("formContato");

/* ========================= */
/* NÚMERO DO WHATSAPP */
/* ========================= */

const numeroWhatsApp = "5583999507241";

/* ========================= */
/* VERIFICAR FORMULÁRIO */
/* ========================= */

if (formContato) {

    formContato.addEventListener("submit", function (event) {

        event.preventDefault();

        /* ========================= */
        /* PEGAR CAMPOS */
        /* ========================= */

        const nome = document.getElementById("nome").value;
        const telefone = document.getElementById("telefone").value;
        const email = document.getElementById("email").value;
        const assunto = document.getElementById("assunto").value;
        const mensagem = document.getElementById("mensagem").value;

        /* ========================= */
        /* MONTAR MENSAGEM */
        /* ========================= */

        const texto = `
Olá, gostaria de solicitar um orçamento.

Nome: ${nome}
WhatsApp: ${telefone}
E-mail: ${email}
Assunto: ${assunto}

Mensagem:
${mensagem}
        `;

        /* ========================= */
        /* CODIFICAR MENSAGEM */
        /* ========================= */

        const textoFormatado = encodeURIComponent(texto);

        /* ========================= */
        /* CRIAR LINK */
        /* ========================= */

        const linkWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${textoFormatado}`;

        /* ========================= */
        /* ABRIR WHATSAPP */
        /* ========================= */

        window.open(linkWhatsApp, "_blank");

        /* ========================= */
        /* LIMPAR FORMULÁRIO */
        /* ========================= */

        formContato.reset();

    });

}

/* ========================= */
/* CONSOLE */
/* ========================= */

console.log("WhatsApp JS carregado com sucesso!");