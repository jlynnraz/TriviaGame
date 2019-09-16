
$(document).ready(function () {
    // var questions = [
    //     {
    //         question: "What was the first full length CGI movie?",
    //         answers: ["A Bug's Life", "Monsters Inc.", "Toy Story", "The Lion King"],
    //         correctAnswer: "Toy Story"
    //     },
    //     {
    //         question: "Which of these is NOT a name of one of the Spice Girls?",
    //         answers: ["Sporty Spice", "Fred Spice", "Scary Spice", "Posh Spice"],
    //         correctAnswer: "Fred Spice"
    //     },
    //     {
    //         question: "Which NBA team won the most titles in the 90s?",
    //         answers: ["New York Knicks", "Portland Trailblazers", "Los Angeles Lakers", "Chicago Bulls"],
    //         correctAnswer: "Chicago Bulls"
    //     },
    //     {
    //         question: "Which group released the hit song, 'Smells Like Teen Spirit'?",
    //         answers: ["Nirvana", "Backstreet Boys", "The Offspring", "No Doubt"],
    //         correctAnswer: "Nirvana"
    //     },
    //     {
    //         question: "Which popular Disney movie featured the song, 'Circle of Life'?",
    //         answers: ["Aladdin", "Hercules", "Mulan", "The Lion King"],
    //         correctAnswer: "The Lion King"
    //     },
    //     {
    //         question:
    //             "Finish this line from the Fresh Prince of Bel-Air theme song: 'I whistled for a cab and when it came near, the license plate said...'",
    //         answers: ["Dice", "Mirror", "Fresh", "Cab"],
    //         correctAnswer: "Fresh"
    //     },
    //     {
    //         question: "What was Doug's best friend's name?",
    //         answers: ["Skeeter", "Mark", "Zach", "Cody"],
    //         correctAnswer: "Skeeter"
    //     },
    //     {
    //         question: "What was the name of the principal at Bayside High in Saved By The Bell?",
    //         answers: ["Mr.Zhou", "Mr.Driggers", "Mr.Belding", "Mr.Page"],
    //         correctAnswer: "Mr.Belding"
    //     }
    // ];
    var correct = 0;

    //shows total incorrect answers
    var incorrect = 0;

    //shows unanswered questions
    var unanswered = 0;

    function checkAnswers() {
        var answers = $("#question-list");
        var inputs = answers.children("input:checked");
        console.log(inputs);
        for (var i = 0; i < inputs.length; i++){
            console.log($(inputs[i]).val());
            if ($(inputs[i]).val() === true){
                correct++;
            }else if($(inputs[i]).val()===false){
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
        $("#answerBox").show("<h2>Correct Answers: " + correct + "</h2>" + "<h2>Incorrect Answers: " + incorrect + "</h2>");
    })
    var number = 90;
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

