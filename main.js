let sharebutton = document.getElementsByClassName('share-button')[0];
let sharebuttons = document.getElementsByClassName("sharebuttons")[0];
let articlemeta = document.getElementsByClassName("article-meta")[0];
let authordetails = document.getElementsByClassName("author")[0];
let buttonsblock = document.getElementsByClassName("sharebuttons-hover")[0];
let screenwidth = window.innerWidth;

//event listener
sharebutton.addEventListener("click",() => {showsharebuttons();});

function showsharebuttons(){
let screenwidth = window.innerWidth;
  if (screenwidth <= 767){
/* sharebuttons.style.display = "flex"; */
authordetails.style.display = "none";
articlemeta.classList.toggle('sharestate')

if (sharebuttons.style.display === "flex"){
sharebuttons.style.display = "none"
authordetails.style.display = "flex";
}
else {sharebuttons.style.display = "flex"
    authordetails.style.display = "none"
}

}
else {
  if(buttonsblock.style.display === "none"){
buttonsblock.style.display = "block";}
else{buttonsblock.style.display = "none";}


}
}


cancelshare.addEventListener("click",() => {hidesharebuttons();});

function hidesharebuttons(){
    sharebuttons.style.display = "none";
    author.style.display = "flex";
}









/* let mybuttons = document.getElementsByClassName('share-button');
let toshow = document.getElementsByClassName("sharebuttons")[0];

for (let btn of mybuttons) {
  btn.addEventListener("click", () => {
    showsharebuttons();
  });
}

function showsharebuttons() {
  toshow.style.display = "flex";
} */