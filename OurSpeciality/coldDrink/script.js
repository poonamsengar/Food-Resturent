const hearts = document.getElementsByClassName("hearts");
var count = 1;
for (let i = 0; i < hearts.length; i++) {
  hearts[i].addEventListener("click", () => {
    const countSpan = document.querySelector(".count");
    countSpan.innerHTML = count++;
    // console.log(countSpan)
  });
}
// Order here logic
var count1=1;
const btn =  document.getElementsByClassName("btnn")
for(let i=0;i<btn.length;i++){
    btn[i].addEventListener("click",()=>{
        const countSpan1 = document.querySelector(".count1");
        countSpan1.innerHTML=count1++;
        // console.log(countSpan1)
    })
}

// image selectorhere


const image1 = document.querySelector(".image1");
const imgsrc1 = image1.src;
const image2 = document.querySelector(".image2");
const imgsrc2 = image2.src;
const image3 = document.querySelector(".image3");
const imgsrc3 = image3.src;
const image4 = document.querySelector(".image4");
const imgsrc4 = image4.src;
const image5 = document.querySelector(".image5");
const imgsrc5 = image5.src;
const image6 = document.querySelector(".image6");
const imgsrc6 = image6.src;
const image7 = document.querySelector(".image7");
const imgsrc7 = image7.src;
const image8 = document.querySelector(".image8");
const imgsrc8 = image8.src;
const image9 = document.querySelector(".image9");
const imgsrc9 = image9.src;
const image10 = document.querySelector(".image10");
const imgsrc10 = image10.src;
const image11 = document.querySelector(".image11");
const imgsrc11 = image11.src;
const image12 = document.querySelector(".image12");
const imgsrc12 = image12.src;
const image13 = document.querySelector(".image13");
const imgsrc13 = image13.src;
const image14 = document.querySelector(".image14");
const imgsrc14 = image14.src;
const image15 = document.querySelector(".image15");
const imgsrc15 = image15.src;
const image16 = document.querySelector(".image16");
const imgsrc16 = image16.src;
const image17 = document.querySelector(".image17");
const imgsrc17 = image17.src;
const image18 = document.querySelector(".image18");
const imgsrc18 = image18.src;
const image19 = document.querySelector(".image19");
const imgsrc19 = image19.src;
const image20 = document.querySelector(".image20");
const imgsrc20 = image20.src;
const image21 = document.querySelector(".image21");
const imgsrc21 = image21.src;

const btn1 = document.querySelector(".one");
const btn2 = document.querySelector(".two");
const btn3 = document.querySelector(".three");
const btn4 = document.querySelector(".four");
const btn5 = document.querySelector(".five");
const btn6 = document.querySelector(".six");
const btn7 = document.querySelector(".seven");
const btn8 = document.querySelector(".eight");
const btn9 = document.querySelector(".nine");
const btn10 = document.querySelector(".ten");
const btn11 = document.querySelector(".eleven");
const btn12 = document.querySelector(".tewel");
const btn13 = document.querySelector(".thirteen");
const btn14 = document.querySelector(".fourtheen");
const btn15 = document.querySelector(".fifteen");
const btn16 = document.querySelector(".sixteen");
const btn17 = document.querySelector(".seventeen");
const btn18 = document.querySelector(".eighteen");
const btn19 = document.querySelector(".nineteen");
const btn20 = document.querySelector(".twenteen");
const btn21 = document.querySelector(".twenteone");

const box = document.querySelectorAll(".box");
const offcanvasDarkNavbar = document.getElementById('offcanvasDarkNavbar')

// btn1.forEach(Orderfun => {
    btn1.addEventListener("click",()=>{
        const NewDiv = document.createElement("div");
        NewDiv.classList.add("leftMain")

        const IMG = document.createElement("img");
        IMG.classList.add("Leftimg")
        IMG.setAttribute("src", imgsrc1);

        const p = document.createElement('p')
        p.classList.add('pleft')
        p.textContent="Chees Burger dolor sit amet."

        const BtnDiv = document.createElement("div");
        BtnDiv.classList.add("btnleft")
        const button = document.createElement('button')
        button.classList.add("btnn")
        button.textContent="Done✅"
        BtnDiv.append(button)
        NewDiv.append(IMG,p,BtnDiv);
        
        offcanvasDarkNavbar.append(NewDiv)
        console.log("click",IMG);
    // })

});

btn2.addEventListener("click",()=>{
  const NewDiv = document.createElement("div");
  NewDiv.classList.add("leftMain")

  const IMG = document.createElement("img");
  IMG.classList.add("Leftimg")
  IMG.setAttribute("src", imgsrc2);

  const p = document.createElement('p')
  p.classList.add('pleft')
  p.textContent="Chees Burger dolor sit amet."

  const BtnDiv = document.createElement("div");
  BtnDiv.classList.add("btnleft")
  const button = document.createElement('button')
  button.classList.add("btnn")
  button.textContent="Done✅"
  BtnDiv.append(button)
  NewDiv.append(IMG,p,BtnDiv);
  
  offcanvasDarkNavbar.append(NewDiv)
  console.log("click",IMG);
// })

});
btn3.addEventListener("click",()=>{
  const NewDiv = document.createElement("div");
  NewDiv.classList.add("leftMain")

  const IMG = document.createElement("img");
  IMG.classList.add("Leftimg")
  IMG.setAttribute("src", imgsrc3);

  const p = document.createElement('p')
  p.classList.add('pleft')
  p.textContent="Chees Burger dolor sit amet."

  const BtnDiv = document.createElement("div");
  BtnDiv.classList.add("btnleft")
  const button = document.createElement('button')
  button.classList.add("btnn")
  button.textContent="Done✅"
  BtnDiv.append(button)
  NewDiv.append(IMG,p,BtnDiv);
  
  offcanvasDarkNavbar.append(NewDiv)
  console.log("click",IMG);
// })

});
btn4.addEventListener("click",()=>{
  const NewDiv = document.createElement("div");
  NewDiv.classList.add("leftMain")

  const IMG = document.createElement("img");
  IMG.classList.add("Leftimg")
  IMG.setAttribute("src", imgsrc4);

  const p = document.createElement('p')
  p.classList.add('pleft')
  p.textContent="Chees Burger dolor sit amet."

  const BtnDiv = document.createElement("div");
  BtnDiv.classList.add("btnleft")
  const button = document.createElement('button')
  button.classList.add("btnn")
  button.textContent="Done✅"
  BtnDiv.append(button)
  NewDiv.append(IMG,p,BtnDiv);
  
  offcanvasDarkNavbar.append(NewDiv)
  console.log("click",IMG);
// })

});
btn5.addEventListener("click",()=>{
  const NewDiv = document.createElement("div");
  NewDiv.classList.add("leftMain")

  const IMG = document.createElement("img");
  IMG.classList.add("Leftimg")
  IMG.setAttribute("src", imgsrc5);

  const p = document.createElement('p')
  p.classList.add('pleft')
  p.textContent="Chees Burger dolor sit amet."

  const BtnDiv = document.createElement("div");
  BtnDiv.classList.add("btnleft")
  const button = document.createElement('button')
  button.classList.add("btnn")
  button.textContent="Done✅"
  BtnDiv.append(button)
  NewDiv.append(IMG,p,BtnDiv);
  
  offcanvasDarkNavbar.append(NewDiv)
  console.log("click",IMG);
// })

});
btn6.addEventListener("click",()=>{
  const NewDiv = document.createElement("div");
  NewDiv.classList.add("leftMain")

  const IMG = document.createElement("img");
  IMG.classList.add("Leftimg")
  IMG.setAttribute("src", imgsrc6);

  const p = document.createElement('p')
  p.classList.add('pleft')
  p.textContent="Chees Burger dolor sit amet."

  const BtnDiv = document.createElement("div");
  BtnDiv.classList.add("btnleft")
  const button = document.createElement('button')
  button.classList.add("btnn")
  button.textContent="Done✅"
  BtnDiv.append(button)
  NewDiv.append(IMG,p,BtnDiv);
  
  offcanvasDarkNavbar.append(NewDiv)
  console.log("click",IMG);
// })

});
btn7.addEventListener("click",()=>{
  const NewDiv = document.createElement("div");
  NewDiv.classList.add("leftMain")

  const IMG = document.createElement("img");
  IMG.classList.add("Leftimg")
  IMG.setAttribute("src", imgsrc7);

  const p = document.createElement('p')
  p.classList.add('pleft')
  p.textContent="Chees Burger dolor sit amet."

  const BtnDiv = document.createElement("div");
  BtnDiv.classList.add("btnleft")
  const button = document.createElement('button')
  button.classList.add("btnn")
  button.textContent="Done✅"
  BtnDiv.append(button)
  NewDiv.append(IMG,p,BtnDiv);
  
  offcanvasDarkNavbar.append(NewDiv)
  console.log("click",IMG);
// })

});
btn8.addEventListener("click",()=>{
  const NewDiv = document.createElement("div");
  NewDiv.classList.add("leftMain")

  const IMG = document.createElement("img");
  IMG.classList.add("Leftimg")
  IMG.setAttribute("src", imgsrc8);

  const p = document.createElement('p')
  p.classList.add('pleft')
  p.textContent="Chees Burger dolor sit amet."

  const BtnDiv = document.createElement("div");
  BtnDiv.classList.add("btnleft")
  const button = document.createElement('button')
  button.classList.add("btnn")
  button.textContent="Done✅"
  BtnDiv.append(button)
  NewDiv.append(IMG,p,BtnDiv);
  
  offcanvasDarkNavbar.append(NewDiv)
  console.log("click",IMG);
// })

});
btn9.addEventListener("click",()=>{
  const NewDiv = document.createElement("div");
  NewDiv.classList.add("leftMain")

  const IMG = document.createElement("img");
  IMG.classList.add("Leftimg")
  IMG.setAttribute("src", imgsrc9);

  const p = document.createElement('p')
  p.classList.add('pleft')
  p.textContent="Chees Burger dolor sit amet."

  const BtnDiv = document.createElement("div");
  BtnDiv.classList.add("btnleft")
  const button = document.createElement('button')
  button.classList.add("btnn")
  button.textContent="Done✅"
  BtnDiv.append(button)
  NewDiv.append(IMG,p,BtnDiv);
  
  offcanvasDarkNavbar.append(NewDiv)
  console.log("click",IMG);
// })

});
btn10.addEventListener("click",()=>{
  const NewDiv = document.createElement("div");
  NewDiv.classList.add("leftMain")

  const IMG = document.createElement("img");
  IMG.classList.add("Leftimg")
  IMG.setAttribute("src", imgsrc10);

  const p = document.createElement('p')
  p.classList.add('pleft')
  p.textContent="Chees Burger dolor sit amet."

  const BtnDiv = document.createElement("div");
  BtnDiv.classList.add("btnleft")
  const button = document.createElement('button')
  button.classList.add("btnn")
  button.textContent="Done✅"
  BtnDiv.append(button)
  NewDiv.append(IMG,p,BtnDiv);
  
  offcanvasDarkNavbar.append(NewDiv)
  console.log("click",IMG);
// })

});
btn11.addEventListener("click",()=>{
  const NewDiv = document.createElement("div");
  NewDiv.classList.add("leftMain")

  const IMG = document.createElement("img");
  IMG.classList.add("Leftimg")
  IMG.setAttribute("src", imgsrc11);

  const p = document.createElement('p')
  p.classList.add('pleft')
  p.textContent="Chees Burger dolor sit amet."

  const BtnDiv = document.createElement("div");
  BtnDiv.classList.add("btnleft")
  const button = document.createElement('button')
  button.classList.add("btnn")
  button.textContent="Done✅"
  BtnDiv.append(button)
  NewDiv.append(IMG,p,BtnDiv);
  
  offcanvasDarkNavbar.append(NewDiv)
  console.log("click",IMG);
// })

});
btn12.addEventListener("click",()=>{
  const NewDiv = document.createElement("div");
  NewDiv.classList.add("leftMain")

  const IMG = document.createElement("img");
  IMG.classList.add("Leftimg")
  IMG.setAttribute("src", imgsrc12);

  const p = document.createElement('p')
  p.classList.add('pleft')
  p.textContent="Chees Burger dolor sit amet."

  const BtnDiv = document.createElement("div");
  BtnDiv.classList.add("btnleft")
  const button = document.createElement('button')
  button.classList.add("btnn")
  button.textContent="Done✅"
  BtnDiv.append(button)
  NewDiv.append(IMG,p,BtnDiv);
  
  offcanvasDarkNavbar.append(NewDiv)
  console.log("click",IMG);
// })

});
btn13.addEventListener("click",()=>{
  const NewDiv = document.createElement("div");
  NewDiv.classList.add("leftMain")

  const IMG = document.createElement("img");
  IMG.classList.add("Leftimg")
  IMG.setAttribute("src", imgsrc13);

  const p = document.createElement('p')
  p.classList.add('pleft')
  p.textContent="Chees Burger dolor sit amet."

  const BtnDiv = document.createElement("div");
  BtnDiv.classList.add("btnleft")
  const button = document.createElement('button')
  button.classList.add("btnn")
  button.textContent="Done✅"
  BtnDiv.append(button)
  NewDiv.append(IMG,p,BtnDiv);
  
  offcanvasDarkNavbar.append(NewDiv)
  console.log("click",IMG);
// })

});
btn14.addEventListener("click",()=>{
  const NewDiv = document.createElement("div");
  NewDiv.classList.add("leftMain")

  const IMG = document.createElement("img");
  IMG.classList.add("Leftimg")
  IMG.setAttribute("src", imgsrc14);

  const p = document.createElement('p')
  p.classList.add('pleft')
  p.textContent="Chees Burger dolor sit amet."

  const BtnDiv = document.createElement("div");
  BtnDiv.classList.add("btnleft")
  const button = document.createElement('button')
  button.classList.add("btnn")
  button.textContent="Done✅"
  BtnDiv.append(button)
  NewDiv.append(IMG,p,BtnDiv);
  
  offcanvasDarkNavbar.append(NewDiv)
  console.log("click",IMG);
// })

});
btn15.addEventListener("click",()=>{
  const NewDiv = document.createElement("div");
  NewDiv.classList.add("leftMain")

  const IMG = document.createElement("img");
  IMG.classList.add("Leftimg")
  IMG.setAttribute("src", imgsrc15);

  const p = document.createElement('p')
  p.classList.add('pleft')
  p.textContent="Chees Burger dolor sit amet."

  const BtnDiv = document.createElement("div");
  BtnDiv.classList.add("btnleft")
  const button = document.createElement('button')
  button.classList.add("btnn")
  button.textContent="Done✅"
  BtnDiv.append(button)
  NewDiv.append(IMG,p,BtnDiv);
  
  offcanvasDarkNavbar.append(NewDiv)
  console.log("click",IMG);
// })

});



btn16.addEventListener("click",()=>{
  const NewDiv = document.createElement("div");
  NewDiv.classList.add("leftMain")

  const IMG = document.createElement("img");
  IMG.classList.add("Leftimg")
  IMG.setAttribute("src", imgsrc16);

  const p = document.createElement('p')
  p.classList.add('pleft')
  p.textContent="Chees Burger dolor sit amet."

  const BtnDiv = document.createElement("div");
  BtnDiv.classList.add("btnleft")
  const button = document.createElement('button')
  button.classList.add("btnn")
  button.textContent="Done✅"
  BtnDiv.append(button)
  NewDiv.append(IMG,p,BtnDiv);
  
  offcanvasDarkNavbar.append(NewDiv)
  console.log("click",IMG);
// })

});
btn17.addEventListener("click",()=>{
  const NewDiv = document.createElement("div");
  NewDiv.classList.add("leftMain")

  const IMG = document.createElement("img");
  IMG.classList.add("Leftimg")
  IMG.setAttribute("src", imgsrc17);

  const p = document.createElement('p')
  p.classList.add('pleft')
  p.textContent="Chees Burger dolor sit amet."

  const BtnDiv = document.createElement("div");
  BtnDiv.classList.add("btnleft")
  const button = document.createElement('button')
  button.classList.add("btnn")
  button.textContent="Done✅"
  BtnDiv.append(button)
  NewDiv.append(IMG,p,BtnDiv);
  
  offcanvasDarkNavbar.append(NewDiv)
  console.log("click",IMG);
// })

});
btn18.addEventListener("click",()=>{
  const NewDiv = document.createElement("div");
  NewDiv.classList.add("leftMain")

  const IMG = document.createElement("img");
  IMG.classList.add("Leftimg")
  IMG.setAttribute("src", imgsrc18);

  const p = document.createElement('p')
  p.classList.add('pleft')
  p.textContent="Chees Burger dolor sit amet."

  const BtnDiv = document.createElement("div");
  BtnDiv.classList.add("btnleft")
  const button = document.createElement('button')
  button.classList.add("btnn")
  button.textContent="Done✅"
  BtnDiv.append(button)
  NewDiv.append(IMG,p,BtnDiv);
  
  offcanvasDarkNavbar.append(NewDiv)
  console.log("click",IMG);
// })

});

btn19.addEventListener("click",()=>{
  const NewDiv = document.createElement("div");
  NewDiv.classList.add("leftMain")

  const IMG = document.createElement("img");
  IMG.classList.add("Leftimg")
  IMG.setAttribute("src", imgsrc19);

  const p = document.createElement('p')
  p.classList.add('pleft')
  p.textContent="Chees Burger dolor sit amet."

  const BtnDiv = document.createElement("div");
  BtnDiv.classList.add("btnleft")
  const button = document.createElement('button')
  button.classList.add("btnn")
  button.textContent="Done✅"
  BtnDiv.append(button)
  NewDiv.append(IMG,p,BtnDiv);
  
  offcanvasDarkNavbar.append(NewDiv)
  console.log("click",IMG);
// })

});

btn20.addEventListener("click",()=>{
  const NewDiv = document.createElement("div");
  NewDiv.classList.add("leftMain")

  const IMG = document.createElement("img");
  IMG.classList.add("Leftimg")
  IMG.setAttribute("src", imgsrc20);

  const p = document.createElement('p')
  p.classList.add('pleft')
  p.textContent="Chees Burger dolor sit amet."

  const BtnDiv = document.createElement("div");
  BtnDiv.classList.add("btnleft")
  const button = document.createElement('button')
  button.classList.add("btnn")
  button.textContent="Done✅"
  BtnDiv.append(button)
  NewDiv.append(IMG,p,BtnDiv);
  
  offcanvasDarkNavbar.append(NewDiv)
  console.log("click",IMG);
// })

});
btn21.addEventListener("click",()=>{
  const NewDiv = document.createElement("div");
  NewDiv.classList.add("leftMain")

  const IMG = document.createElement("img");
  IMG.classList.add("Leftimg")
  IMG.setAttribute("src", imgsrc21);

  const p = document.createElement('p')
  p.classList.add('pleft')
  p.textContent="Chees Burger dolor sit amet."

  const BtnDiv = document.createElement("div");
  BtnDiv.classList.add("btnleft")
  const button = document.createElement('button')
  button.classList.add("btnn")
  button.textContent="Done✅"
  BtnDiv.append(button)
  NewDiv.append(IMG,p,BtnDiv);
  
  offcanvasDarkNavbar.append(NewDiv)
  console.log("click",IMG);
// })

});


const lefttMain =  document.getElementById("inputFeedbackt")
function rightFeedback(){
  if(lefttMain.value==""){
    alert(`please Give Feedback 🍽️`)
  }else{
  alert(`Thank you for your feedback! 🎊 ${lefttMain.value}`);
  console.log(lefttMain.value);
  }

}

// crose left part


const closeleft =  document.getElementById("closeleft")
const offcanvasDarkNavbar1 =  document.getElementById('offcanvasDarkNavbar');
const faburger = document.querySelector('.fa-burger')
closeleft.addEventListener("click",()=>{
  offcanvasDarkNavbar1.style.visibility="hidden"
  offcanvasDarkNavbar1.style.transition=".2s left linear"

})
faburger.addEventListener("click",()=>{
  offcanvasDarkNavbar1.style.visibility="visible"
})
// order
document.getElementById("Order").addEventListener("submit", (e) => {
  e.preventDefault();
  const orderName = document.getElementById("orderName")
  const orderEmail = document.getElementById("orderEmail")
  const orderNum = document.getElementById("orderNum")
  const foodname = document.getElementById("foodname")
  const textArea = document.getElementById("textArea")

  // const OrderPlacesNull = document.createElement("div");
  // OrderPlacesNull.append(orderName,orderEmail,orderNum,foodname,textArea);

  console.log(orderName.value);
  
  const rightCLick = document.getElementById("rightCLick");  
  
      if((orderName.value=="") && (orderEmail.value=="") && (orderNum.value=="") && (foodname.value=="") && (textArea.value=="")){
        alert("Select your Deser and Insert Your Information");
      }else{
        rightCLick.style.display = "block";
        document.getElementById("main").style.filter = "blur(6px)";

  
        document.getElementById("croshOrder").addEventListener("click",()=>{
          console.log("click");
          rightCLick.style.display = "none";
          document.getElementById("main").style.filter = "none";
        })

      }
});
