let firstNumber
let operator
let waitingForSecondNumber = false

display = document.getElementById("display")
clearbtn = document.getElementById("clear-btn")
clearbtn.addEventListener(
    "click", function () {
        display.innerText = "0"
    }
)
btn7 = document.getElementById("btn7")
btn7.addEventListener(
    "click", function () {
        if (waitingForSecondNumber == true) {

            display.innerText = "7"

            waitingForSecondNumber = false

        }
        else {

            if (display.innerText == 0) {
                display.innerText = "7"
            } else {
                display.innerText = display.innerText + "7"
            }

        }
    }

)
btn8 = document.getElementById("btn8")
btn8.addEventListener(
    "click", function () {
         if (waitingForSecondNumber == true) {

            display.innerText = "8"

            waitingForSecondNumber = false

        }
        else {

            if (display.innerText == 0) {
                display.innerText = "8"
            } else {
                display.innerText = display.innerText + "8"
            }

        }
    }
)
btn9 = document.getElementById("btn9")
btn9.addEventListener(
    "click", function () {
        if (waitingForSecondNumber == true) {

            display.innerText = "9"

            waitingForSecondNumber = false

        }
        else {

            if (display.innerText == 0) {
                display.innerText = "9"
            } else {
                display.innerText = display.innerText + "9"
            }

        }

    }
)
btn0 = document.getElementById("btn0")
btn0.addEventListener(
    "click", function () {
         if (waitingForSecondNumber == true) {

            display.innerText = "0"

            waitingForSecondNumber = false

        }
        else {

            if (display.innerText == 0) {
                display.innerText = "0"
            } else {
                display.innerText = display.innerText + "0"
            }

        }
    }
)
btn1 = document.getElementById("btn1")
btn1.addEventListener(
    "click", function () {
        if (waitingForSecondNumber == true) {

            display.innerText = "1"

            waitingForSecondNumber = false

        }
        else {

            if (display.innerText == 0) {
                display.innerText = "1"
            } else {
                display.innerText = display.innerText + "1"
            }

        }
    }
)
btn2 = document.getElementById("btn2")
btn2.addEventListener(
    "click", function () {
         if (waitingForSecondNumber == true) {

            display.innerText = "2"

            waitingForSecondNumber = false

        }
        else {

            if (display.innerText == 0) {
                display.innerText = "2"
            } else {
                display.innerText = display.innerText + "2"
            }

        }
    }
)
btn3 = document.getElementById("btn3")
btn3.addEventListener(
    "click", function () {
         if (waitingForSecondNumber == true) {

            display.innerText = "3"

            waitingForSecondNumber = false

        }
        else {

            if (display.innerText == 0) {
                display.innerText = "3"
            } else {
                display.innerText = display.innerText + "3"
            }

        }
    }
)
btn4 = document.getElementById("btn4")
btn4.addEventListener(
    "click", function () {
         if (waitingForSecondNumber == true) {

            display.innerText = "4"

            waitingForSecondNumber = false

        }
        else {

            if (display.innerText == 0) {
                display.innerText = "4"
            } else {
                display.innerText = display.innerText + "4"
            }

        }
    }
)
btn5 = document.getElementById("btn5")
btn5.addEventListener(
    "click", function () {
         if (waitingForSecondNumber == true) {

            display.innerText = "5"

            waitingForSecondNumber = false

        }
        else {

            if (display.innerText == 0) {
                display.innerText = "5"
            } else {
                display.innerText = display.innerText + "5"
            }

        }
    }
)
btn6 = document.getElementById("btn6")
btn6.addEventListener(
    "click", function () {
         if (waitingForSecondNumber == true) {

            display.innerText = "6"

            waitingForSecondNumber = false

        }
        else {

            if (display.innerText == 0) {
                display.innerText = "6"
            } else {
                display.innerText = display.innerText + "6"
            }

        }
    }
)
addbtn = document.getElementById("add-btn")
addbtn.addEventListener(
    "click",
    function () {
        firstNumber = display.innerText
        operator = "+"
        waitingForSecondNumber = true
    }
)
equalbtn = document.getElementById("equal-btn")
equalbtn.addEventListener(
    "click",
    function() {

        secondNumber = display.innerText

        if(operator == "+") {

          result = Number(firstNumber) + Number(secondNumber)
          display.innerText = result

        }
        if(operator == "-") {

          result = Number(firstNumber) - Number(secondNumber)
          display.innerText = result

        }
        if(operator == "*") {

          result = Number(firstNumber) * Number(secondNumber)
          display.innerText = result

        }
        if(operator == "/") {

          result = Number(firstNumber) / Number(secondNumber)
          display.innerText = result

        }


    }
)


