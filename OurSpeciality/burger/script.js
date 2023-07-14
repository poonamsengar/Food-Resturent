const hearts = document.getElementsByClassName("hearts");
var count = 1
for (let i=0;i<hearts.length;i++){
   hearts[i].addEventListener("click",()=>{
    const countSpan = document.querySelector(".count");
    countSpan.innerHTML=count++;
    console.log(countSpan)
   })
}
// Order here logic
var count1=1;
const btn =  document.getElementsByClassName("btnn")
for(let i=0;i<btn.length;i++){
    btn[i].addEventListener("click",()=>{
        const countSpan1 = document.querySelector(".count1");
        countSpan1.innerHTML=count1++;
        console.log(countSpan1)
    })
}

// image selectorhere

const boxcontainer = document.querySelector(".box-container")
const btnn = document.querySelector(".btnn");
const offcanvas =  document.getElementById("offcanvasDarkNavbar")

btnn.addEventListener("click",()=>{
    const image =  document.getElementsByClassName("image");
    const clone = image.cloneNode(true);

    const div = document.createElement('div')
    div.appendChild(clone)
    offcanvas.appendChild(div)
})