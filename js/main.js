function alertInfo() {
    alert('Заплати за сайт!');
}

function checkTime(callBack) {
    let timeInSec = Math.round(Date.now() / 1000);
    if (timeInSec > 1611097900) {
        callBack = alertInfo();
    }
}

checkTime();
