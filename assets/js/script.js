/* Author: 

*/
function comman(id_first, id_second, target, fn_name) {
    document.getElementById(id_first).addEventListener('click', fn_name);
    function fn_name() {
        document.getElementById(id_second).classList.toggle(target);
    }
}

comman('dropdown', 'show-drop', 'dropdown-deactived', 'dropdown');

comman('hamburger', 'show-nav', 'nav-hide', 'showNav');

comman('close-nav', 'show-nav', 'nav-hide', 'closeNav');

var scroll = document.querySelector('.to-the-top');
window.addEventListener('scroll', () => {
    scroll.classList.toggle("active", window.scrollY > 500);
    if (scroll.classList.contains("active")) {
        scroll.style.visibility = "visible";
        scroll.style.opacity = 1;
        scroll.style.transition = "all .3s ease";
    } else {
        scroll.style.visibility = "hidden";
        scroll.style.opacity = 0;
    }
});

var expands = document.querySelectorAll('.gear-icon');

expands.forEach(expand => {
    expand.addEventListener('click', show);
    expand.style.cursor = "pointer";
    function show() {
        var currentClick = document.querySelector('.gear-icon.active');
        if (currentClick && currentClick !== expand) {
            currentClick.classList.toggle("active");
            currentClick.nextElementSibling.style.display = "none";
        }
    
        expand.classList.toggle("active");
        var target = expand.nextElementSibling;
        if (expand.classList.contains("active")) {
            target.style.display = "block";
        } else {
            target.style.display = "none";
        }
    }
});




















