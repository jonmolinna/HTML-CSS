/******* Menu **************/
(() => {
    const $btnMenu = document.querySelector(".menu-btn");
    const $menu = document.querySelector(".menu");

    $btnMenu.addEventListener("click", e => {
        $btnMenu.firstElementChild.classList.toggle("none");
        $btnMenu.lastElementChild.classList.toggle("none");
        $menu.classList.toggle("is-active");
    });

    document.addEventListener("click", e => {
        if(!e.target.matches(".menu a")) return false

        $btnMenu.firstElementChild.classList.remove("none");
        $btnMenu.lastElementChild.classList.add("none");
        $menu.classList.remove("is-active");
    })

})();


/******* ContactForm **************/
(() => {
    const $form = document.querySelector(".contact-form");
    const $loader = document.querySelector(".contact-form-loader");
    const $response = document.querySelector("contact-form-response");

    $form.addEventListener("submit", e => {
        e.preventDefault();
        $loader.classList.remove("none");
        fetch("https://formsubmit.co/ajax/jmolina2624@gmail.com", {
            method: "POST",
            body: new FormData(e.target)
        })
        .then(res => (res.ok? res.json() : Promise.reject(res)))
        .then(json => {
            //console.log(json);
            location.hash = "$gracias";
            $form.reset();
        })
        .catch(err => {
            //console.log(err);
            let message = err.statusText || "Ocurrió un error al enviar, intenta nuevamente"
            $response.querySelector("h3").innerHTML = `Error ${err.status} : ${message}`;
        })
        .finally(() => {
            $loader.classList.add("none");
            setTimeout(() => {
                location.hash = "#close"
            }, 3000)
        })
    })
})();