function addUser(){
PLAYER1=document.getElementById("Player1Name").value
PLAYER2=document.getElementById("Player2Name").value
localStorage.setItem("jugador1",PLAYER1)
localStorage.setItem("jugador2",PLAYER2)

window.location="game_page.html"
}