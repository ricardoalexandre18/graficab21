/* ========================= */
/* FILTRO DE PRODUTOS */
/* ========================= */

const botoesCategoria = document.querySelectorAll(".categoria-btn");
const produtos = document.querySelectorAll(".produto-card");

/* ========================= */
/* CATEGORIAS DOS PRODUTOS */
/* ========================= */

const categoriasProdutos = [
    "CARTÕES",
    "PANFLETOS",
    "BANNERS",
    "ADESIVOS",
    "FACHADAS",
    "CONVITES",
    "BANNERS",
    "ADESIVOS",
    "CAMISAS"
];

/* ========================= */
/* ADICIONAR CATEGORIA */
/* ========================= */

produtos.forEach((produto, index) => {
    produto.setAttribute("data-categoria", categoriasProdutos[index]);
});

/* ========================= */
/* CLIQUE NOS BOTÕES */
/* ========================= */

botoesCategoria.forEach(botao => {

    botao.addEventListener("click", () => {

        /* ========================= */
        /* REMOVER ACTIVE */
        /* ========================= */

        botoesCategoria.forEach(btn => {
            btn.classList.remove("active");
        });

        /* ========================= */
        /* ADICIONAR ACTIVE */
        /* ========================= */

        botao.classList.add("active");

        /* ========================= */
        /* PEGAR CATEGORIA */
        /* ========================= */

        const categoriaSelecionada = botao.textContent.trim();

        /* ========================= */
        /* FILTRAR PRODUTOS */
        /* ========================= */

        produtos.forEach(produto => {

            const categoriaProduto = produto.getAttribute("data-categoria");

            if (
                categoriaSelecionada === "TODOS" ||
                categoriaSelecionada === categoriaProduto
            ) {

                produto.style.display = "block";

                setTimeout(() => {
                    produto.style.opacity = "1";
                    produto.style.transform = "scale(1)";
                }, 100);

            } else {

                produto.style.opacity = "0";
                produto.style.transform = "scale(0.9)";

                setTimeout(() => {
                    produto.style.display = "none";
                }, 300);

            }

        });

    });

});

/* ========================= */
/* TRANSIÇÃO DOS PRODUTOS */
/* ========================= */

produtos.forEach(produto => {
    produto.style.transition = "0.3s ease";
});

/* ========================= */
/* MENSAGEM NO CONSOLE */
/* ========================= */

console.log("Filtro de produtos carregado com sucesso!");