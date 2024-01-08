document.addEventListener('DOMContentLoaded', function () {
    // declare the necessary variables:
    const buttonParenthesis = document.querySelectorAll('.parenthesis');
    const buttonNumbers = document.querySelectorAll('.digit');
    const buttonOperators = document.querySelectorAll('.operator');
    const buttonEqual = document.querySelector('.equal');
    const buttonDecimel = document.querySelector('.decimel');
    const buttonAC = document.querySelector('.ac');
    const buttonCE = document.querySelector('.ce');
    const buttonPercentage = document.querySelector('.parcentage');

    let previousResult = document.querySelector('.previous-result');
    let inputAndResult = document.querySelector('.input-and-result');
    
    let input = inputAndResult.value;
    let result = 0;

    // a variable to keep track the number of user's input for new calculation:
    let count = 0;

    // list of all the current input elements for the further calculation:
    let aryInput = [];

    // Chang the title dinamically
    let userName = prompt("You Name Please?");
    alert(`Hello ${userName.toUpperCase()}, Welcome!!. Let's do some interesting calculation!`);
    document.querySelector('title').textContent = `Calculator - ${userName.toUpperCase()}!`;
   
    // FUNCTION TO TAKE INPUT FORM THE USERS:
    function takeInput(button) {

        // when users provide their first input for a new calculation:
        if(count === 0) {
            input = '';
            inputAndResult.placeholder = '';
        }

        // display the previous result
        previousResult.textContent = `Previous Result: ${result}`;

        // take input form the users:
        const value = button.dataset.value;
        input += value;
        inputAndResult.placeholder = input;

        // keep track the number of inputs the users has porvided for a single calculation:
        count++;

        // print out the input to the console:
        console.log(input, typeof input);

        // convert the input into an array (THIS STEP IS OPTIONAL)
        aryInput = Array.from(input);
        console.log(aryInput, typeof aryInput);
    };


    // FUNCTION TO CLEAR THE INPUT FIEDL ITEM ONE BY ONE FROM THE SCREEN:
    function clearElement() {

        let lastItem = aryInput[aryInput.length + 1];

        // remove the last input element:
        aryInput.pop();

        // display the updated array for the rest of the input element:
        console.log(aryInput);

        //clear out the display screen:
        input = '';
        inputAndResult.placeholder = '';

        // loop through the updated array and display the rest of the input element in the screen:
        aryInput.forEach(function(item, index) {
            input += item;
            inputAndResult.placeholder += item;

        });

        // when there is no element left any more in the input array for the further calculation:
        if(aryInput.length == 0) {
            inputAndResult.placeholder = '';
            input = '';

            // disable the Equal button:
            buttonEqual.disabled = true;
            // disable all the operator buttons:
            buttonOperators.forEach(function(button) {
                button.disabled = true;
            });
        };

        // display the current input elements to the console:
        console.log(input);
        console.log(inputAndResult.placeholder);
    };


    // FUNCTION TO CALCULATE THE FINAL RESULT:
    function claculateResult() {
        // evaluate the result:
        const finalResult = eval(input);

        //display the final result to the screen:
        inputAndResult.placeholder = finalResult;
        result = finalResult;
        input ='';

        // print out the final result to the console:
        console.log(finalResult);
    };



    // by default the input field value is set to 0:
    inputAndResult.placeholder = 0;

    // by default, the Eaual button should be disabled:
    buttonEqual.disabled = true;

    // by default, all the operator button should be disabled:
    buttonOperators.forEach(function(button) {
        button.disabled = true;
    });


    // added and onlcick event handler to the parenthesis buttons:
    buttonParenthesis.forEach(button => {
        button.onclick = function() {
            
            // activate the Equal button:
            buttonEqual.disabled = false;

            // take input from the users:
            takeInput(button);

            // hide the AC button:
            buttonAC.style.display = "none";
            
            // display the CE button:
            buttonCE.style.display = "block";
        };            
    });


    // added an onclick event handler to all the digit buttons:
    buttonNumbers.forEach(button => {
        button.onclick = function() {

            // activate the Equal button:
            buttonEqual.disabled = false;

            // activate all the operator buttons:
            buttonOperators.forEach(function(button) {
                button.disabled = false;
            });

            // take input from the users:
            takeInput(button);

            // display the CE button:
            buttonCE.style.display = "block";

            // hide the AC button:
            buttonAC.style.display = "none";
        };      
    });

    // added an onclick event handler to the operator:
    buttonOperators.forEach(button => {
        button.onclick = function() {

            // activate the Equal button:
            buttonEqual.disabled = false;

            // take input from the users:
            takeInput(button);

            // display the CE button:
            buttonCE.style.display = "block";

            // hide the AC the AC button:
            buttonAC.style.display = "none";
        };
    });

    // added an onclick event handler to the equal button:
    buttonEqual.onclick = function() {
        claculateResult();

        // display the AC button:
        buttonAC.style.display = "block";

        // hide the CE button:
        buttonCE.style.display = "none";

        // disable the Equal button:
        buttonEqual.disabled = true;

        // disable all the operator button:
        buttonOperators.forEach(function(button) {
            button.disabled = true;
        })
    };

    // added an onclick enent handler to the AC button:
    buttonAC.onclick = function() {
        
        input = 0;
        inputAndResult.placeholder = 0;
        count = 0;

        // disable the Equal button:
        buttonEqual.disabled = true;
    };

    // added an onclick event handler to the CE button:
    buttonCE.onclick = function() {
        clearElement();
    };


});

