console.log("script.js connected!");

// NodeList of all the elements under question-block class, storing every question not the every button
let qestions = document.querySelectorAll(".question-block");

// I decided to use array for storing the answer, creating an empty array
let userAnswers = []

// going over each question using forEaxh
// Why we use function()? - because forEach() expect to have function()
// the variable inside function() can be anything - represents the current element in the loop
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
            //userAnswers.push(Number(button.dataset.answer));

            userAnswers[index] = Number(button.dataset.answer);
            console.log(userAnswers); // See current stored answers
        });
    });
})
