const player = document.getElementById("player1")

console.log(player)
function gameSystem(event){
    const key = event.key;
    if(key == " "){
        player1.style.top = "calc(95% - 200px)"
    }
};

window.addEventListener('keydown', gameSystem)