
$(document).ready(function () {
    
    var correct = 0;

    //shows total incorrect answers
    var incorrect = 0;

    //shows unanswered questions
    var unanswered = 0;

    var number = 90;

    var intervalId;

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
       
// $("#answerBox").show("<h2>" + "#correctAnswers" + correct + "</h2>" + "<h2>" + incorrect + "</h2>");
    };

    // function renderQuestions() {
    //     for (var i = 0; i < questions.length; i++) {
    //         var questionLi = $("<li>")
    //         var liText = $("<span>" + questions[i].question + "</span>");
    //         for (j = 0; j < questions[i].answers.length; i++) {
    //             var answerLi = $("<input type='radio' name='q" + j + "' value='" + questions[i].correctAnswer + "' checked>" + questions[i].answers[j] + "</input>");
    //             liText.append(answerLi);
    //         }
    //         questionLi.append(liText)
    //         $("#question-list").append(questionLi)
    //     }

    // }

    $("#start").on("click", function () {
        console.log("clicked");
        $("#questions").show();
        $("#start").hide();
        

        run();
    })

    $("#submit").on("click", function (event) {
        event.preventDefault()

        console.log("clicked");
        $("#questions").hide();
        $("#start").show();
        checkAnswers()

        stop();

        $("#answerBox").append("<h2>Correct Answers: " + correct + "</h2>" + "<h2>Incorrect Answers: " + incorrect + "</h2>")

        
    })


    
    
    function run() {
        intervalId = setInterval(decrement, 1000);

    }

    function decrement() {
        number--;

        $("#timer").html("<h2>" + number + "</h2>");

        if (number === 0) {

            //alerts "time up"
            alert("Time Up!");

            stop();
        }
    }

    function stop() {

        clearInterval(intervalId);
    }



    //need to add in "Start button" on new page


    //after hitting submit button goes to new page

    //shows total correct answers (if/else)

    $("#questions").hide();


})

