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

var topBtn = document.getElementsByClassName('to-the-top');
topBtn.addEventListener('click', top);
function top() {
    topBtn.setAttribute('href', '#to-top');
}




















