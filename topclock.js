let timerId;
let intervalBool = false;
let maxCount = 10;
let count = maxCount;
const timerAnzeige = document.getElementById("timer");
const timerStart = document.getElementById("start");
const timerStop = document.getElementById("stop");
const timerReset = document.getElementById("reset");


            function startCountdown(){
                console.log("startCountdown has been called");
                stopCountdown();//für falls es schon einen Timer gibt.
                
                setDisplay(maxCount);//setDisplay("10");
                count = maxCount;//counter in den anfangszustand versetzen.
                //verwende die Referenz 'updateCounter', um die Funktion für später zu registrieren.
                timerId = setInterval(updateCounter, 1000);//jede Sekunde soll die Funktion 'updateCounter' aufgerufen werden.

            }
            function stopCountdown(){
                clearInterval(timerId);
            }
            function updateCounter(){
                count--;
                setDisplay(count);
                if(count <= 0){
                    stopCountdown();
                    setDisplay("Fertig!");
                }

            }
            function resetCountdown(){

                timerAnzeige.innerHTML = "00:00:00";
            }
            function setDisplay(info){
                timerAnzeige.innerHTML = info;
            }
            