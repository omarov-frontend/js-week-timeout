function alertInfo() {
    alert('Заплати за сайт!');
}

function checkTime() {
    let timeInSec = Math.round(Date.now() / 1000);
    if (timeInSec > 1611056500) {
        alertInfo();
    }
    console.log(timeInSec);
}

checkTime();
