const id = document.querySelector("#first");
const  id_input= id.querySelector("input");
const password =document.querySelector("#second");
const password_input = password.querySelector("input");
const form = document.querySelector(".inbutton");
function handleSubmitId(){
    let currnetUser = id_input.value;
    let currentPassword = password_input.value;
    localStorage.setItem(currnetUser, currentPassword);
    location.href ="login.html";
}
