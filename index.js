let buttons = document.querySelectorAll("button");
let buttonsCount = buttons.length;
let result = document.querySelector("#result");
let i = 0;

for (i = 0; i < buttonsCount; i++) {
    buttons.onclick = doit;
}

function doit() {
    let currentValue = this.innerHTML;
    if (currentValue == "=") {
        try {
            result.value = eval(result.value);
        }
        catch (e) {
            result.value = 0;
        }
        return;
    }
    result.value += currentValue;
}
