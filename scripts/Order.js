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
        alert("please Insert Your Information");
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
