## Jaimee Trivia!
Welcome to Jaimee Trivia! Can you guess all the mishaps that have happened to Jaimee? Try your luck, but remember you only have 90 seconds to answer all the questions! Check all the boxes then click submit to see how many you answered correctly. **Horrible photos of Jaimee brought to you by Jaimee's boyfriend**

## Motivation
Jaimee Trivia was created to utilize "Moment" in JavaScript to create a sense of urgency for the user through the use of a timer. Once the timer is up it will tally up the correct and incorrect answers for the user.
  
## Sneak Peak
![Jaimee Trivia](https://user-images.githubusercontent.com/53287044/74380291-8638ca00-4da6-11ea-9b04-39875db37e20.jpg)

## Installation
* Fork It
* Clone It
* Open in your terminal or bash and run NPM Install
* Or click [HERE](https://jlynnraz.github.io/TriviaGame/) to run the live demo

## Technologies
* JavaScript
* jQuery
* HTML
* CSS

## Code Sample
Questions are written into an HTML form. Then a function checkAnswers is called when the submit button is clicked:

~~~
 function checkAnswers() {
        
        var answers = $("#question-list");
        var inputs = answers.children("input:checked");
        console.log(inputs);
        for (var i = 0; i < inputs.length; i++){
            console.log($(inputs[i]).val());
            if ($(inputs[i]).val() === "true"){
                correct++;
            }else if($(inputs[i]).val()==="false"){
                incorrect++ 
            }

        }
~~~

## Contact
* jlynnraz@gmail.com
* [LinkedIn](https://www.linkedin.com/in/jaimee-razee/)
* [Portfolio](https://jlynnraz.github.io/Portfolio2/)


