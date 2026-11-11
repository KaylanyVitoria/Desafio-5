$(document).ready(function () {
    const $carrossel = $(".inicio__carrossel");
    const $botaoMenu = $(".cabecalho__menu-toggle");
    const $menu = $(".cabecalho_nav");

    function posicionarIndicadores() {
        const $indicadores = $carrossel.find(".owl-dots");
        const $conteudoAtivo = $carrossel.find(".owl-item.active .inicio__conteudo");

        if ($indicadores.length && $conteudoAtivo.length) {
            $conteudoAtivo.prepend($indicadores);
        }
    }

    $carrossel.on("initialized.owl.carousel translated.owl.carousel", posicionarIndicadores);

    $carrossel.owlCarousel({
        items: 1,
        loop: false,
        autoplay: false,
        smartSpeed: 500,
        dots: true,
        dotsData: true,
        nav: false
    });

    posicionarIndicadores();

    // Navega diretamente para o slide correspondente ao indicador clicado.
    $carrossel.on("click", ".owl-dot", function () {
        const indice = $(this).index();
        $carrossel.trigger("to.owl.carousel", [indice, 500, true]);
    });

    $botaoMenu.on("click", function () {
        const aberto = $(this).attr("aria-expanded") === "true";
        $(this).attr("aria-expanded", String(!aberto));
        $(this).attr("aria-label", aberto ? "Abrir menu" : "Fechar menu");
        $menu.toggleClass("is-open", !aberto);
    });

    $menu.on("click", "a", function () {
        $menu.removeClass("is-open");
        $botaoMenu.attr("aria-expanded", "false");
        $botaoMenu.attr("aria-label", "Abrir menu");
    });

    $(window).on("resize", function () {
        if (window.innerWidth > 900) {
            $menu.removeClass("is-open");
            $botaoMenu.attr("aria-expanded", "false");
            $botaoMenu.attr("aria-label", "Abrir menu");
        }
    });
});
