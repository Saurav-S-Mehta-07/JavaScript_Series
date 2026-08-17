const form = document.querySelector("form");

form.addEventListener("submit", (event)=>{
    event.stopPropagation()
    const height = parseFloat(document.querySelector("#height").value);
    const weight = parseFloat(document.querySelector("#weight").value);
    const result = document.querySelector("#result")


    if(!height || height<0 || height===NaN){
        result.textContent = "please enter valid height";
        result.style.color="red";
        return;
    }
    else if(!weight || weight<0 || weight===NaN){
        result.textContent = "please enter valid weight";
        result.style.color = "red";
        return;
    }
    else{
        result.style.color="black";
    }

    const bmi = (weight/(Math.pow(height,2))) * 10000
    result.textContent = `BMI : ${bmi.toFixed(3)}`;
    console.log("form submitted");
})