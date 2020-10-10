var vistajugadahumano = document.getElementById("jugador");
var vistajugadamaquina = document.getElementById("maquina");
var vistaresultado = document.getElementById("vistaresultado");
 
var audio = document.getElementById("audio");




function jugadaHumano(jugada) {
    let jugadaRobot = Math.floor(Math.random()*3);
    let jugadas =["piedra","papel","tijera"];
    let jugadasMaquina = ["piedra","papel","tijera"];

    vistajugadahumano.innerHTML = `<p> Elegiste ${jugadas[jugada]} </p>` ;
    
    vistajugadamaquina.innerHTML=`<p>La monja elige ${jugadasMaquina[jugadaRobot]}</p>`;
    
    if(jugadas[jugada] == jugadasMaquina[jugadaRobot] ){
        vistaresultado.innerHTML = `<p> EMPATE</p>`
    }
    else if (jugadas[jugada] ==jugadas[0] && jugadasMaquina[jugadaRobot] == jugadasMaquina[1] ||
        jugadas[jugada] ==jugadas[1] && jugadasMaquina[jugadaRobot] == jugadasMaquina[2] ||
        jugadas[jugada] ==jugadas[2] && jugadasMaquina[jugadaRobot] == jugadasMaquina[0]){
            vistaresultado.innerHTML = `<p> Moriras mañana </p>`
            document.getElementById("imagenmonja").style.display ="flex";
            audio.play();  
            
    }
    else if (jugadas[jugada] ==jugadas[1] && jugadasMaquina[jugadaRobot] == jugadasMaquina[0] ||
        jugadas[jugada] ==jugadas[2] && jugadasMaquina[jugadaRobot] == jugadasMaquina[1] ||
        jugadas[jugada] ==jugadas[0] && jugadasMaquina[jugadaRobot] == jugadasMaquina[2]) {
            vistaresultado.innerHTML = `<p> La monja fue aniquilada</p>`
    }else{

    }
        
}
 
document.getElementById("botonquitar").addEventListener("click",quitarimagen);
function quitarimagen (){
    document.getElementById("imagenmonja").style.display ="none";
} 

