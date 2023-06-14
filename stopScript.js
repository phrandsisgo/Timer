//I need to declare a global variable for the widgetId
let widgetIdNumber = 0;

function createDialogForNewStopWatch(){
    console.log('createDialogForNewStopWatch()');
    let mainDialog = document.createElement('div');
    mainDialog.id = 'mainDialog';


    let dialog = document.createElement('form');
    dialog.id = 'dialog';
    dialog.style.position = 'absolute';
    dialog.classList.add("justify-content-center","mx-auto" );
    mainDialog.appendChild(dialog);

    let centerdiv = document.createElement('div');
    centerdiv.classList.add('justify-content-center', 'mx-auto');
    dialog.appendChild(centerdiv);

    let title = document.createElement('h1');
    title.innerHTML = 'New Stop Watch';
    title.classList.add('text-center', 'mx-auto');
    centerdiv.appendChild(title);

    let flexdDiv = document.createElement('div');
    flexdDiv.style.display = 'flex';
    flexdDiv.style.flexDirection = 'row';
    flexdDiv.classList.add('justify-content-center', 'mx-auto','d-flex');
    dialog.appendChild(flexdDiv);

    let labelHour = document.createElement('label');
    labelHour.innerHTML = 'Hours: ';
    flexdDiv.appendChild(labelHour);

    let inputHour = document.createElement('input');
    inputHour.type = 'number';
    inputHour.classList.add('inputField', 'col-1');
    inputHour.id = 'inputHour';
    flexdDiv.appendChild(inputHour);

    let labelMinute = document.createElement('label');
    labelMinute.innerHTML = 'Minutes: ';
    flexdDiv.appendChild(labelMinute);

    let inputMinute = document.createElement('input');
    inputMinute.type = 'number';
    inputMinute.id = 'inputMinute', 'col-1';
    inputMinute.classList.add('inputField', 'col-1');
    flexdDiv.appendChild(inputMinute);

    let labelSecond = document.createElement('label');
    labelSecond.innerHTML = 'Seconds: ';
    flexdDiv.appendChild(labelSecond);

    let inputSecond = document.createElement('input');
    inputSecond.type = 'number';
    inputSecond.id = 'inputSecond';
    inputSecond.classList.add('inputField', 'col-1');
    flexdDiv.appendChild(inputSecond);

    //what I have as inputs are so far: inputHour, inputMinute, inputSecond
    let center = document.createElement('div');
    center.classList.add('d-flex', 'justify-content-center', 'mx-auto','addButton');
    dialog.appendChild(center);

    let submitButton = document.createElement('button');
    submitButton.innerHTML = 'Start';
    submitButton.classList.add('btn', 'btn-success',  );
    submitButton.addEventListener('click',function(){
        event.preventDefault();
        let hours = inputHour.value;
        let minutes = inputMinute.value;
        let seconds = inputSecond.value;
        createStopWatch(hours,minutes,seconds);
        mainDialog.remove();
    });
    center.appendChild(submitButton);

    document.body.appendChild(mainDialog);

}


function createStopWatch(hours,minutes,seconds,widgetId){
    let widgetIdString = 'sw' + widgetIdNumber.toString(); //sw = abkürzung für "stop watch"
    let combinedTime = hours + minutes + seconds;
    
    let stopWatch = document.createElement('div');
    stopWatch.classList.add('bg-color-success', 'Time-card', 'row');
    stopWatch.id = widgetIdString;
    document.body.appendChild(stopWatch);

    let firstLineWidget = document.createElement('div');
    firstLineWidget.classList.add('col-12', 'Zeile1', 'text-center');
    stopWatch.appendChild(firstLineWidget);


    //Für die Anzeige braucht es noch eine Funktion
    let digitalAnzeige = document.createElement('h5');
    digitalAnzeige.id = widgetIdString + 'digitalAnzeige';
    digitalAnzeige.classList.add('fontDigitalNumber', 'col-7');
    digitalAnzeige.innerHTML =  "Zeit sollte hier eingefüllt werden";
    digitalAnzeige.setAttribute('functionId', widgetIdString + 'digitalAnzeige');
    digitalAnzeige.setAttribute('data-time', combinedTime);
    //if I want to access it by this attribute I need to use digitalAnzeige.getAttribute('data-*');
    firstLineWidget.appendChild(digitalAnzeige);


    let trashIcon = document.createElement('img');
    let fritz = 12;
    trashIcon.src = 'trash1.svg';
    trashIcon.classList.add('col-2','icon');
    trashIcon.alt = 'trashIcon';
    trashIcon.addEventListener('click',function(){
        document.getElementById(widgetIdString).remove();
    });
    firstLineWidget.appendChild(trashIcon);

    let pauseIcon = document.createElement('img');
    pauseIcon.src = 'pause.svg';
    pauseIcon.classList.add('col-2', 'icon');
    pauseIcon.alt = 'pauseIcon';
    pauseIcon.setAttribute('functionId', widgetIdString + 'digitalAnzeige');
    pauseIcon.addEventListener('click',function(){
        pauseTimer(widgetIdString + 'digitalAnzeige');
    });
    //pauseIcon.onclick = 'pauseCountdown()';
    firstLineWidget.appendChild(pauseIcon);



    

    let intervalId;

    targetTimer(hours, minutes, seconds, widgetIdString + 'digitalAnzeige')//calling the timer function that sets a interval to the timer

    function targetTimer(Stunden, Minuten, Sekunden, anzeigeStringId){
        document.getElementById(anzeigeStringId).innerHTML = Stunden + "h " + Minuten + "m " + Sekunden + "s ";

        let distanceFinal = Stunden*60*60*1000 + Minuten*60*1000 + Sekunden*1000;
        intervalId = setInterval(function() {
            
            var stunden = Math.floor((distanceFinal % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minuten = Math.floor((distanceFinal % (1000 * 60 * 60)) / (1000 * 60));
            var sekunden = Math.floor((distanceFinal % (1000 * 60)) / 1000);
            document.getElementById(anzeigeStringId).innerHTML = stunden + "h " + minuten + "m " + sekunden + "s ";
            distanceFinal = distanceFinal - 1000;
            document.getElementById(anzeigeStringId).innerHTML = stunden + "h " + minuten + "m " + sekunden + "s ";
            document.getElementById(anzeigeStringId).setAttribute('data-time', distanceFinal);
            if (distanceFinal <= 0) {
                clearInterval(intervalId);
                document.getElementById(anzeigeStringId).innerHTML = "Finished";
            }
    },1000);
    }
    function pauseTimer(anzeigeStringId){
        clearInterval(intervalId);
    }

    //die 2 funktionen für reset und play werden nicht in der Abgabe dabei sein, da ich die Funktionen für die nicht programmieren konnte
    function resetTimer(anzeigeStringId, beginningTimer){
        clearInterval(intervalId);
        console.log(intervalId);
        targetTimer(beginningTimer);
    }
    function playTimer(anzeigeStringId){
        //play the timer with the time that is stored in the data-time attribute and the widgetIdString + 'digitalAnzeige'
        let time = document.getElementById(widgetIdString + 'digitalAnzeige').getAttribute('data-time');
        targetTimer(time, anzeigeStringId);

    }
    //update the variable
    widgetIdNumber++;
  
}


function beispielsZeit(){
    let minutes = 3;
    let seconds = 12;
        
    var x;
    let distanceFinal=  minutes*60*1000+seconds*1000;
        x = setInterval(function() {
        distanceFinal = distanceFinal - 1000;

        var minuten = Math.floor((distanceFinal % (1000 * 60 * 60)) / (1000 * 60));
        var sekunden = Math.floor((distanceFinal % (1000 * 60)) / 1000);
        document.getElementById("digitaAnzeige").innerHTML = minuten + "m " + sekunden + "s ";
        if (distanceFinal < 0) {
            clearInterval(x);
            document.getElementById("digitaAnzeige").innerHTML = "EXPIRED";
        }
    }, 1000);
}
function deleteCountdown(){
//code kommt hier hin
}
function stopCountdown(){
    clearInterval(x);
    document.getElementById("beispiel1").remove();
}
beispielsZeit();