//add event listener for the start button
let start_button = document.getElementById("btn__reset")
let game = new Game(0,["you win","love him",
"hive job","magic world", "dog life" ],"");

start_button.addEventListener("click",()=>{
 
    game.startGame();

})


//add event listener to keyboard buttons. 

let div_buttons = document.getElementById("qwerty");
let keyboard_buttons = div_buttons.querySelectorAll("button");

keyboard_buttons.forEach(button=>{
    button.addEventListener("click",(e)=>{
        game.handleInteraction(e);



})


})

