document.querySelectorAll(".box").forEach((box)=>{
   const id = (box.getAttribute("id"));
   box.addEventListener("click", ()=>{
      document.querySelector("body").
      style.backgroundColor = id;
   })
})