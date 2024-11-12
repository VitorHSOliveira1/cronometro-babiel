var startButton = document.querySelector('.start-button');
var stopButton = document.querySelector('.stop-button');
var reiniciarButton = document.querySelector('.reiniciar-button');
var showTime = document.querySelector('.time');
var baruioClick = document.getElementById('baruio-click');
var baruioFinal = document.getElementById('tempo-acabou');
var time = 10; // Tempo em segundos (10 minutos)
var timerIniciado = false;
var tInterval;
function formatarTempo(segundos) {
    var minutos = Math.floor(segundos / 60);
    var segundosRestantes = segundos % 60;
    var minutosFormatados = minutos < 10 ? '0' + minutos : minutos;
    var segundosFormatados = segundosRestantes < 10 ? '0' + segundosRestantes : segundosRestantes;
    return "".concat(minutosFormatados, ":").concat(segundosFormatados);
}
function atualizarDisplay() {
    showTime.textContent = formatarTempo(time);
}
function iniciarTimer() {
    if (!timerIniciado) {
        timerIniciado = true;
        atualizarDisplay();
        tInterval = setInterval(function () {
            if (time > 0) {
                time--;
                atualizarDisplay();
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
function clickSound() {
    baruioClick.play();
}
startButton === null || startButton === void 0 ? void 0 : startButton.addEventListener('click', clickSound);
startButton === null || startButton === void 0 ? void 0 : startButton.addEventListener('click', iniciarTimer);
stopButton === null || stopButton === void 0 ? void 0 : stopButton.addEventListener('click', pausarTimer);
startButton === null || startButton === void 0 ? void 0 : startButton.addEventListener('click', clickSound);
reiniciarButton === null || reiniciarButton === void 0 ? void 0 : reiniciarButton.addEventListener('click', reiniciarTimer);
reiniciarButton === null || reiniciarButton === void 0 ? void 0 : reiniciarButton.addEventListener('click', clickSound);
atualizarDisplay();
