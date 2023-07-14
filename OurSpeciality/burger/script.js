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
// let currentHeart = hearts[i];
// if(currentHeart){
//     console.log(`Current Heart: ${currentHeart}`);
// }