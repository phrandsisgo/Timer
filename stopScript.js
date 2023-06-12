console.log('stopScript.js is beeing accessed');

function createDialogForNewStopWatch(){
    console.log('createDialogForNewStopWatch()');
    let mainDialog = document.createElement('div');
    mainDialog.id = 'mainDialog';

    let dialog = document.createElement('form');
    dialog.id = 'dialog';
    dialog.style.position = 'absolute';
    mainDialog.appendChild(dialog);

    let title = document.createElement('h1');
    title.innerHTML = 'New Stop Watch';
    dialog.appendChild(title);

    let flexdDiv = document.createElement('div');
    flexdDiv.style.display = 'flex';
    flexdDiv.style.flexDirection = 'row';
    dialog.appendChild(flexdDiv);

    let labelHour = document.createElement('label');
    labelHour.innerHTML = 'Hours: ';
    flexdDiv.appendChild(labelHour);

    let inputHour = document.createElement('input');
    inputHour.type = 'number';
    inputHour.id = 'inputHour';
    flexdDiv.appendChild(inputHour);

    let labelMinute = document.createElement('label');
    labelMinute.innerHTML = 'Minutes: ';
    flexdDiv.appendChild(labelMinute);

    let inputMinute = document.createElement('input');
    inputMinute.type = 'number';
    inputMinute.id = 'inputMinute';
    flexdDiv.appendChild(inputMinute);

    let labelSecond = document.createElement('label');
    labelSecond.innerHTML = 'Seconds: ';
    flexdDiv.appendChild(labelSecond);

    let inputSecond = document.createElement('input');
    inputSecond.type = 'number';
    inputSecond.id = 'inputSecond';
    flexdDiv.appendChild(inputSecond);

    //what I have as inputs are so far: inputHour, inputMinute, inputSecond
    
    let submitButton = document.createElement('button');
    submitButton.innerHTML = 'Start';
    submitButton.addEventListener('click',function(){
        event.preventDefault();
        let hours = inputHour.value;
        let minutes = inputMinute.value;
        let seconds = inputSecond.value;
        createStopWatch(hours,minutes,seconds);
        mainDialog.remove();
    });
    dialog.appendChild(submitButton);

    document.body.appendChild(mainDialog);

}

function createStopWatch(hours,minutes,seconds){
    console.log("creaate Stop watch"+ hours +"h" + minutes + "m" + seconds + "s");

    let stopWatch = document.createElement('div');
    stopWatch.class = 'Time-card row';

    let Zeile1 = document.createElement('div');
    Zeile1.class = 'Zeile1 text-center col-12';
    stopWatch.appendChild(Zeile1);

    let abstand1 = document.createElement('div');
    abstand1.class = 'col-1';
    Zeile1.appendChild(abstand1);

    let zeitAnzeige = document.createElement('h4');
    zeitAnzeige.class = 'col-5 fontDigitalNumber';
    zeitAnzeige.innerHTML = hours + ":" + minutes + ":" + seconds;
    Zeile1.appendChild(zeitAnzeige);
}
