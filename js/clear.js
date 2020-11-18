const cl = document.querySelector('.js-clear');
function boom(event){
    event.preventDefault();
    localStorage.clear();
    location.href ="login.html";
}
function init(){
cl.addEventListener('click', boom);
}
init();