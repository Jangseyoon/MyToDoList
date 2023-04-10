let textS = document.querySelector('#checklist');
const contentsArea = document.querySelector(".inner");
const addbutton = document.querySelector(".circle");

window.addEventListener('keypress',(e)=>{
  if (e.key=='Enter'){
    const newList = document.createElement("div");
    newList.classList.add('newList');
    newList.innerHTML = 
    `${textS.value}
    <i class="fa-solid fa-trash"></i>`;

    contentsArea.appendChild(newList);
    textS.value="";
  }
})


addbutton.addEventListener("click",()=>{
  if (textS.value!=""){
    const newList = document.createElement("div");
    newList.classList.add('newList');
    newList.innerHTML = 
    `${textS.value}
    <i class="fa-solid fa-trash"></i>`;

    contentsArea.appendChild(newList);
    textS.value="";
  }
})

window.addEventListener("click",(event)=>{
  if (event.target.className=='fa-solid fa-trash'){
    const v = event.target;
    const prNode = v.parentElement;
    contentsArea.removeChild(prNode);
  }
})