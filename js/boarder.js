const boardTableBody = document.querySelector('#board-body');
const contentsContainer = document.querySelector('.contents__container');
const editorForm = document.querySelector('#editor-form');
const titleInput = document.querySelector('#editor-title-input');
const contentInput = document.querySelector('#editor-content-input');


const BOARDLIST_LS = 'boardLists';
let boardListObj = [];
const USER_LS = "currentUser";
let date = new Date();
const author = localStorage.getItem("currentUser"); 

function SaveList(){
    localStorage.setItem(BOARDLIST_LS,JSON.stringify(boardListObj));
}

// function assignIndex() {
//     const lists = JSON.parse(localStorage.getItem(BOARDLIST_LS));
//     if (!lists) {
//     nums = 0;
//     } else {
//     nums = parseInt(lists[lists.length - 1].num) + 1;
//     }
// }



function onEditSubmit(event)
{
    event.preventDefault();
    const title = titleInput.value;
    const content = contentInput.value;
    const num = boardListObj.length + 1;
    const listObj ={
        num: num,
        title: `${title}`,
        author: `${author}`,
        date: `${date.getFullYear()}.${date.getMonth() + 1}.${date.getDate()}.`,
        content: `${content}`
    };
    console.log(listObj);
    boardListObj.push(listObj);
    SaveList();
    title.value ="";
    content.value="";

//     const author = JSON.parse(localStorage.getItem(USER_LS)); 
//     const lists = JSON.parse(localStorage.getItem(BOARDLIST_LS));
// if(!list){
//     const objArr =[];
//     objArr.push({
//         num: `${nums++}`,
//         title: `${title}`,
//         author: `${author}`,
//         date: `${date.getFullYear()}.${date.getMonth() + 1}.${date.getDate()}.`,
//         content: `${content}`
//     });
//     localStorage.setItem(BOARDLIST_LS, JSON.stringify(objArr));
// }
// else{
//     lists.push({
//         num: `${nums++}`,
//         title: `${title}`,
//         author: `${author}`,
//         date: `${date.getFullYear()}.${date.getMonth() + 1}.${date.getDate()}.`,
//         content: `${content}`
//     });
//     localStorage.setItem(BOARDLIST_LS, JSON.stringify(lists));
// }
}



function init(){
    editorForm.addEventListener("submit", onEditSubmit);
}
init();