const id_in = document.querySelector("#firstid"),
    id_check= id_in.querySelector("input");
const password_in =document.querySelector("#secondps"),
    password_check = password_in.querySelector("input");
const form = document.querySelector(".loginbutton");
const USER_LS = "currentUser";

function CheckId(){
    let ckid = id_check.value;
    let ckps = password_check.value;
    if(localStorage.getItem(ckid) == ckps){
        localStorage.setItem(USER_LS, ckid);
        location.href ="main.html";
    }
    else{
        alert("Wrong!!");
        location.reload();
    }
}

