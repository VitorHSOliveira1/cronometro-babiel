const startButton = document.querySelector('.start-button') as HTMLButtonElement;
const stopButton = document.querySelector('.stop-button') as HTMLButtonElement;
const reiniciarButton = document.querySelector('.reiniciar-button') as HTMLButtonElement;
const showTime = document.querySelector('.time') as HTMLElement;
const baruioClick = document.getElementById('baruio-click') as HTMLAudioElement
const baruioFinal = document.getElementById('tempo-acabou') as HTMLAudioElement

let time = 600; // Tempo em segundos (10 minutos)
let timerIniciado = false;  
let tInterval: number;

function formatarTempo(segundos: number): string {
    const minutos = Math.floor(segundos / 60);
    const segundosRestantes = segundos % 60;
    const minutosFormatados = minutos < 10 ? '0' + minutos : minutos;
    const segundosFormatados = segundosRestantes < 10 ? '0' + segundosRestantes : segundosRestantes;
    return `${minutosFormatados}:${segundosFormatados}`;
}

function atualizarDisplay() {
    showTime.textContent = formatarTempo(time);
}

function iniciarTimer() {
    if (!timerIniciado) {
        timerIniciado = true;
        atualizarDisplay();
        tInterval = setInterval(() => {
            if (time > 0) {
                time--;
                atualizarDisplay();
            } else {
                clearInterval(tInterval);
                alert("Tempo acabou!");
                baruioFinal.play()
                timerIniciado = false;
            }
        }, 1000); 
    }
}

function reiniciarTimer() {
    clearInterval(tInterval);
    time = 600;
    timerIniciado = false;
    atualizarDisplay();
    console.log("Cronômetro reiniciado");
}

function pausarTimer() {
    if (timerIniciado) {
        clearInterval(tInterval);
        timerIniciado = false;
        console.log("Cronômetro pausado");
    }
}

function clickSound(){
    baruioClick.play();
}

startButton?.addEventListener('click', clickSound)
startButton?.addEventListener('click', iniciarTimer);
stopButton?.addEventListener('click', pausarTimer);
startButton?.addEventListener('click', clickSound)
reiniciarButton?.addEventListener('click', reiniciarTimer);
reiniciarButton?.addEventListener('click', clickSound)

atualizarDisplay();
