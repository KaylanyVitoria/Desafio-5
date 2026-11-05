$(document).ready(function () {
    const $carrossel = $(".inicio__carrossel");

    $carrossel.owlCarousel({
        items: 1,
        loop: false,
        autoplay: false,
        smartSpeed: 500,
        dots: true,
        dotsData: true,
        nav: false
    });

    // Navega diretamente para o slide correspondente ao indicador clicado.
    $carrossel.on("click", ".owl-dot", function () {
        const indice = $(this).index();
        $carrossel.trigger("to.owl.carousel", [indice, 500, true]);
    });
});
