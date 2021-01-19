function alertInfo() {
    alert('Заплати за сайт!');
}

function checkTime(alertInfo) {
    let timeInSec = Math.round(Date.now() / 1000);
    if (timeInSec > 1611097900) {
        alertInfo();
    }
}

checkTime(alertInfo);
