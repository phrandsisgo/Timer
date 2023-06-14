let timerId;
let intervalBool = false;
let maxCount = 10;
let count = maxCount;
let destinationTimeGetterBool = false;
const timerAnzeige = document.getElementById("timer");
const timerStart = document.getElementById("start");
const timerStop = document.getElementById("stop");
const timerReset = document.getElementById("reset");


            function startCountdown(){
                console.log("startCountdown has been called");
                stopCountdown();//für falls es schon einen Timer gibt.
                
                setDisplay(maxCount); //setze die Anzeige auf den Anfangswert bevor der Countdown startet.
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
            function getDestinationTime(){

                let parentElement = document.getElementById('timeGetSpawner');

                let destinationTimeGetter = document.createElement('div');
                destinationTimeGetter.id = 'destinationTimeGetter';
                parentElement.appendChild(destinationTimeGetter);

                let destinationTimeGetterForm = document.createElement('form');
                destinationTimeGetterForm.id = 'destinationTimeGetterForm';
                destinationTimeGetter.appendChild(destinationTimeGetterForm);

                let destinationTimeGetterFormLabel1 = document.createElement('label');
                destinationTimeGetterFormLabel1.for = 'hours';
                destinationTimeGetterFormLabel1.innerHTML = 'Stunden';
                destinationTimeGetterForm.appendChild(destinationTimeGetterFormLabel1);

                let destinationTimeGetterFormInput1 = document.createElement('input');
                destinationTimeGetterFormInput1.type = 'number';
                destinationTimeGetterFormInput1.id = 'hours';
                destinationTimeGetterFormInput1.name = 'hours';
                destinationTimeGetterFormInput1.min = '0';
                destinationTimeGetterForm.appendChild(destinationTimeGetterFormInput1);

                let h3Text = document.createElement('h3');
                h3Text.innerHTML = ':';
                destinationTimeGetterForm.appendChild(h3Text);

            }
            