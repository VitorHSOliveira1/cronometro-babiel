var startButton = document.querySelector('.start-button');
var stopButton = document.querySelector('.stop-button');
var setTime = document.querySelector('.set-time-button');
var showTime = document.querySelector('.time');
var baruioClick = document.getElementById('baruio-click');
var baruioFinal = document.getElementById('tempo-acabou');
var modal = document.querySelector('.modal');
var submitTimeButton = document.querySelector('#submit-time');
var closeButton = document.querySelector('#close-modal');
var timeInput = document.querySelector('#input-number');
var titulo = document.querySelector('.title');
var nameInput = document.querySelector('#input-name');
var tituloTarefa = document.querySelector('.title-tarefa');
var clariceButton = document.querySelector('#clarice-button');
var body = document.querySelector('body');
var modalPrincipal = document.querySelector('.stopwatch');
var nerd1 = document.querySelector('#img1');
var nerd2 = document.querySelector('#img2');
var time = 0;
var timerIniciado = false;
var tInterval;
function startEasterEgg() {
    body.style.backgroundColor = 'rgb(11, 73, 11)';
    showTime.style.color = 'white';
    modalPrincipal.style.background = 'rgb(57, 41, 41)';
    startButton.style.backgroundColor = 'rgb(11, 73, 11)';
    stopButton.style.backgroundColor = 'rgb(11, 73, 11)';
    setTime.style.backgroundColor = 'rgb(11, 73, 11)';
    modal.style.background = 'rgb(57, 41, 41)';
    tituloTarefa.style.background = 'white';
    closeButton.style.backgroundColor = 'rgb(57, 41, 41)';
    submitTimeButton.style.backgroundColor = 'rgb(11, 73, 11)';
    nerd1.style.display = 'block';
    nerd2.style.display = 'block';
}
function formatarTempo(segundos) {
    var minutos = Math.floor(segundos / 60);
    var segundosRestantes = segundos % 60;
    var minutosFormatados = minutos < 10 ? '0' + minutos : minutos;
    var segundosFormatados = segundosRestantes < 10 ? '0' + segundosRestantes : segundosRestantes;
    return "".concat(minutosFormatados, ":").concat(segundosFormatados);
}
function putTitlleInTime() {
    var inputTitulo = String(nameInput.value);
    tituloTarefa.textContent = inputTitulo;
}
var mostrarTempo = formatarTempo(time);
function putTimeInTitle() {
    titulo.textContent = mostrarTempo;
}
function atualizarDisplay() {
    showTime.textContent = mostrarTempo;
}
function iniciarTimer() {
    if (!timerIniciado && time > 0) {
        timerIniciado = true;
        atualizarDisplay();
        tInterval = setInterval(function () {
            if (time > 0) {
                time--;
                atualizarDisplay();
                putTimeInTitle();
            }
            else {
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
    var inputTime = parseInt(timeInput.value);
    if (!isNaN(inputTime) && inputTime > 0) {
        time = inputTime * 60;
        atualizarDisplay();
        putTitlleInTime();
        timeInput.value = "";
        nameInput.value = "";
        closeModalSetTime();
    }
    else {
        alert("Insira um número válido maior que zero.");
    }
}
// Event listeners
startButton === null || startButton === void 0 ? void 0 : startButton.addEventListener('click', clickSound);
startButton === null || startButton === void 0 ? void 0 : startButton.addEventListener('click', iniciarTimer);
stopButton === null || stopButton === void 0 ? void 0 : stopButton.addEventListener('click', pausarTimer);
setTime === null || setTime === void 0 ? void 0 : setTime.addEventListener('click', openModalSetTime);
setTime === null || setTime === void 0 ? void 0 : setTime.addEventListener('click', clickSound);
closeButton === null || closeButton === void 0 ? void 0 : closeButton.addEventListener('click', closeModalSetTime);
closeButton === null || closeButton === void 0 ? void 0 : closeButton.addEventListener("click", clickSound);
submitTimeButton === null || submitTimeButton === void 0 ? void 0 : submitTimeButton.addEventListener('click', setTimeFromInput);
clariceButton === null || clariceButton === void 0 ? void 0 : clariceButton.addEventListener('click', startEasterEgg);
putTimeInTitle();
atualizarDisplay();
