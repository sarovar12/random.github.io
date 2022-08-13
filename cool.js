var css = document.querySelector("h3");
var co1 = document.querySelector(".co1");
var co2 = document.querySelector(".co2");
var body= document.getElementById("body1");
function speedrun(){
    body.style.background=
        "linear-gradient(to right,"
        +co1.value
        +" , "
        +co2.value
        css.textContent= body.style.background+";"
}

co1.addEventListener("input",speedrun);
co2.addEventListener("input", speedrun); 

