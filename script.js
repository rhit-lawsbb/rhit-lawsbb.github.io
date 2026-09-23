//wanted to find a way to swap a message by using a button
//found it here even though it was very simular to what we did in our favorite things homework https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Events

let button = document.getElementById("button");
let message = document.getElementById("message");

button.addEventListener("click", function(){
    message.innerHTML ="I am continuing to build my portfolio with new software projects."
})