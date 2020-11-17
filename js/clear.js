const cl = document.querySelector('.js-clear');
function boom(event){
    event.preventDefault();
    localStorage.clear();
    location.reload();
}
function init(){
cl.addEventListener('click', boom);
}
init();