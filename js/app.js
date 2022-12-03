function getPin() {
    const pin = genaratePin();
    if (pin.length === 4) {
        return pin;
    }
    else {
        return getPin()
    }
}

function genaratePin() {
    const randomPin = Math.round(Math.random()* 10000) + '';
    return randomPin;
}
document.getElementById('generatePin').addEventListener('click', function () {
    const displayPin = document.getElementById('display-pin');
    displayPin.value=getPin()
})
document.getElementById('calculator').addEventListener('click', function () {
    const number = event.target.innerText;
    const typeNumber = document.getElementById('type-number');
    const previoustypeNumber = typeNumber.value;
    if (isNaN(number)) {
        if (number === 'C') {
            typeNumber.value = '';
        }
        else if (number === '<') {
            const digits = previoustypeNumber.split('');
            digits.pop();
            const remaningDigit = digits.join('');
            typeNumber.value = remaningDigit;
        }
    }
    else {
        const newTypeNumbe = previoustypeNumber + number;
        typeNumber.value = newTypeNumbe;    

    }
})
const category="pen"; 
const performer = category + "-teller";
console.log(performer)