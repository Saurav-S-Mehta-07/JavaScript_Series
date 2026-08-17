document.querySelectorAll(".box").forEach((box)=>{
   box.addEventListener("click", (event)=>{
      document.querySelector("body").
      style.backgroundColor = event.target.getAttribute("id");
   })
})