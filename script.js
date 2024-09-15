const screenCalc = document.getElementById('screenCalc')
const calcButtons = document.getElementById('buttons')

calcButtons.addEventListener('click', (e) => {
    if (e.target.nodeName == "BUTTON") {
        switch (e.target.textContent) {
            case "AC":
                clear()
                break
            case "DEL":
                removeLast()
                break
            case "=":
                evalute()
                break
            default:
                addToScreenCalc(e.target.textContent)
        }
    }
})


// this function for adding numbers to screenCalc...
function addToScreenCalc(value) {
    screenCalc.textContent += value;
}

// this function for clear everything in screenCalc
function clear() {
    screenCalc.textContent = '';
}

// this function for remove last input from screenCalc  ******
function removeLast() {
    let last = screenCalc.textContent;
    screenCalc.textContent = last.substring(0, last.length - 1)
}


function evalute() {
    try {
        let calculation = math.evaluate(screenCalc.textContent);
        screenCalc.textContent = calculation;

        if (calculation == "Infinity" || isNaN(calculation)) {
            screenCalc.textContent = "you can't divide by zero";
        }

    } catch (error) {
        screenCalc.textContent = "Invalid Input!"
        console.error("Invalid Input!")
    }

}
