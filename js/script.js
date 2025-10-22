console.log("script.js connected!");

// NodeList of all the elements under question-block class, storing every question not the every button
// When html has a class, you out ".""
let qestions = document.querySelectorAll(".question-block");

// I decided to use array for storing the answer, creating an empty array
let userAnswers = []

// going over each question using forEaxh
// Why we use function()? - because forEach() expect to have function()
// the variable inside function() can be anything - represents the current element in the loop
// index represents which question i am on -> using index for the array would prevent to keep the number of the previsous selection in array
qestions.forEach(function(block, index) {
    // NodeList of all the buttons for one specific question, block., bc current element is block
    let buttons = block.querySelectorAll(".answer-btn")

    // going over each button using forEach()
    buttons.forEach(function(button) {
        //removing 'selected' for all the button when one button was clicked
        button.addEventListener("click", function() {
            buttons.forEach(function(btn) {
                btn.classList.remove("selected");
            });

            // add selected to th button that was clicked by the user
            button.classList.add("selected");

            // Get the data using the dataset attribute 
            let buttonID = button.dataset.answer
            // Store the data in an array
            userAnswers[index] = Number(buttonID);

            console.log(userAnswers); // See current stored answers
        });
    });
})


function displayResult(arr) {
    // this will hold the resulting message 
    let result = "";

    // I was getting weird output when i did not answer all the questions, so i created a result that will be displayed when the users do not answer the all the questions
    if (userAnswers.length < 6) {
        result = "Please answer all the questions";
    }
    else{
        //calculating the score
        total = 0;
        for (let i = 0; i < userAnswers.length; i++) {
            let num = Number(userAnswers[i]);
            total += num;
        }

        if (total<= 7){
            result = "You are: Rainbow Cake!";
        }
        else if (total <= 12) {
            result = "You are: Cupcake";
        }
        else if (total <= 15){
            result = "You are: Macaron";
        }
        else if (total <= 18){
            result = "You are: Fruit Tart";
        }
        else if (total <= 22){
            result = "You are: Chocolate";
        }
        else{
            result = "You are: Ice Cream";
        }

    }

    // when html has id, you put nothing infront
    let output = document.getElementById("result-container"); 
    output.style.display = "block"; // <-- makes it visible
    output.textContent = `${result}`;
}

// Select the button by its id
let resultButton = document.getElementById("show-result");

// Add a click event listener to it
resultButton.addEventListener("click", function() {
  displayResult(userAnswers);
});

