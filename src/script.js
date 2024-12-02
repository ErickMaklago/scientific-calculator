document.addEventListener('DOMContentLoaded', (event) => {
    console.log("Document is ready")
    const display = document.getElementById('calc-display');
    const buttons = document.getElementsByClassName('btn');
    console.log(buttons);

    let currentValue = "";

    function evaluateResult(){
        console.log('currentValue:',currentValue);
        const convertedValue=currentValue
            .replace("×","*")
            .replace("÷","/")
            .replace("%","*0.01")
            .replace("sin","Math.sin")
            .replace("ln","Math.log")
            .replace("π","Math.PI")
            .replace("cos","Math.cos")
            .replace("log","Math.log10")
            .replace("e","Math.exp")
            .replace("tan","Math.tan")
            .replace("√","Math.sqrt");
            
        console.log('convertedValue:',convertedValue);
        const result=eval(convertedValue);
        currentValue=result.toString();
        display.value=currentValue;
    }

    for (let i = 0; i < buttons.length; i++) {
        const button = buttons[i];
        button.addEventListener('click', function () {
            const value = button.innerText;

            if (value == 'AC') {
                currentValue="";
                display.value=currentValue;
            } else if(value=="="){
                evaluateResult();
            } else {
                currentValue += value;
                console.log('currentValue:', currentValue);
                display.value = currentValue;
            }
        })
    }

});