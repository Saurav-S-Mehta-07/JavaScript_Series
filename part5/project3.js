const button = document.querySelector("button");

setInterval(()=>{
    const date = new Date();
    document.querySelector("h1").
    textContent = `${date.toLocaleTimeString()}`
}, 1000)