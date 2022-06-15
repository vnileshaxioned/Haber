/* Author: 

*/
function comman(id_first, id_second, target, fn_name) {
    document.getElementById(id_first).addEventListener('click', fn_name);
    function fn_name() {
        document.getElementById(id_second).classList.toggle(target);
    }
}
//  for dropdown
comman('dropdown', 'show-drop', 'dropdown-deactived', 'dropdown');
// for hamburger
comman('hamburger', 'show-nav', 'nav-hide', 'showNav');
// for navbar close
comman('close-nav', 'show-nav', 'nav-hide', 'closeNav');

// for top button
var scroll = document.querySelector('.to-the-top');
window.addEventListener('scroll', () => scroll.classList.toggle('top-active', window.scrollY > 500));

// for accordian
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




















