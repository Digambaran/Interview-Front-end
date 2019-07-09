function nav() {
    console.log("loaded")
    let menu = document.getElementById('js-nav-menu')
    let mainNav = document.getElementsByClassName('navbar')[0];
    let toggle = document.getElementById('js-nav-toggle');
    let logo = document.getElementsByClassName('logo-container')[0];
    let btn = document.getElementsByClassName('button')[0];

    toggle.addEventListener('click',
        function () {
            console.log("clicked");
            mainNav.classList.toggle('active');
            menu.classList.toggle('active');
            logo.classList.toggle('Nactive');
            btn.classList.toggle('Nactive');
        }
    )
}
window.onload = nav;