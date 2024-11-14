const startButton = document.querySelector('.start-button') as HTMLButtonElement;
const stopButton = document.querySelector('.stop-button') as HTMLButtonElement;
const setTime = document.querySelector('.set-time-button') as HTMLButtonElement;
const showTime = document.querySelector('.time') as HTMLElement;
const baruioClick = document.getElementById('baruio-click') as HTMLAudioElement;
const baruioFinal = document.getElementById('tempo-acabou') as HTMLAudioElement;
const modal = document.querySelector('.modal') as HTMLElement;
const submitTimeButton = document.querySelector('#submit-time') as HTMLButtonElement;
const closeButton = document.querySelector('#close-modal') as HTMLButtonElement;
const timeInput = document.querySelector('#input-number') as HTMLInputElement;
const titulo = document.querySelector('.title') as HTMLElement;
const nameInput = document.querySelector('#input-name') as HTMLInputElement
const tituloTarefa = document.querySelector('.title-tarefa') as HTMLElement
const clariceButton = document.querySelector('#clarice-button') as HTMLButtonElement
const body = document.querySelector('body') as HTMLBodyElement
const modalPrincipal = document.querySelector('.stopwatch') as HTMLElement
const nerd1 = document.querySelector('#img1') as HTMLImageElement
const nerd2 = document.querySelector('#img2') as HTMLImageElement

let time = 0;
let timerIniciado = false;
let tInterval: number;

function startEasterEgg(){
    body.style.backgroundColor = 'rgb(11, 73, 11)'
    showTime.style.color = 'white'
    modalPrincipal.style.background = 'rgb(57, 41, 41)'
    startButton.style.backgroundColor = 'rgb(11, 73, 11)'
    stopButton.style.backgroundColor = 'rgb(11, 73, 11)'
    setTime.style.backgroundColor = 'rgb(11, 73, 11)'
    modal.style.background = 'rgb(57, 41, 41)'
    tituloTarefa.style.background = 'white'
    closeButton.style.backgroundColor = 'rgb(57, 41, 41)'
    submitTimeButton.style.backgroundColor = 'rgb(11, 73, 11)'
    nerd1.style.display = 'block'
    nerd2.style.display = 'block'
}


function formatarTempo(segundos: number): string {
    const minutos = Math.floor(segundos / 60);
    const segundosRestantes = segundos % 60;
    const minutosFormatados = minutos < 10 ? '0' + minutos : minutos;
    const segundosFormatados = segundosRestantes < 10 ? '0' + segundosRestantes : segundosRestantes;
    return `${minutosFormatados}:${segundosFormatados}`;
}

function putTitlleInTime(){
    const inputTitulo = String(nameInput.value)
    tituloTarefa.textContent = inputTitulo
}

const mostrarTempo = formatarTempo(time)


function putTimeInTitle(){
    titulo.textContent = mostrarTempo;
}

function atualizarDisplay() {
    showTime.textContent = mostrarTempo;
}

function iniciarTimer() {
    if (!timerIniciado && time > 0) {
        timerIniciado = true;
        atualizarDisplay();
        tInterval = setInterval(() => {
            if (time > 0) {
                time--;
                atualizarDisplay();
                putTimeInTitle();
            } else {
                clearInterval(tInterval);
                alert("Tempo acabou!");
                baruioFinal.play();
                timerIniciado = false;
            }
        }, 1000);
    }
}

function pausarTimer() {
    if (timerIniciado) {
        clearInterval(tInterval);
        timerIniciado = false;
        console.log("Cronômetro pausado");
    }
}

function clickSound() {
    baruioClick.play();
}

function openModalSetTime() {
    modal.style.display = "block";
}

function closeModalSetTime() {
    modal.style.display = "none";
}

function setTimeFromInput() {
    const inputTime = parseInt(timeInput.value);
    if (!isNaN(inputTime) && inputTime > 0) {
        time = inputTime * 60; 
        atualizarDisplay();
        putTitlleInTime(); 
        timeInput.value = ""; 
        nameInput.value = ""; 
        closeModalSetTime();
    } else {
        alert("Insira um número válido maior que zero.");
    }
}


// Event listeners
startButton?.addEventListener('click', clickSound);
startButton?.addEventListener('click', iniciarTimer);
stopButton?.addEventListener('click', pausarTimer);
setTime?.addEventListener('click', openModalSetTime);
setTime?.addEventListener('click', clickSound);
closeButton?.addEventListener('click', closeModalSetTime);
closeButton?.addEventListener("click", clickSound);
submitTimeButton?.addEventListener('click', setTimeFromInput);
clariceButton?.addEventListener('click',startEasterEgg )

putTimeInTitle();
atualizarDisplay();
