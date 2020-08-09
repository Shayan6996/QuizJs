function Quiz(questions) {
    this.score = 0;
    this.questions = questions;
    this.questionIndex = 0;
}

Quiz.prototype.getQuestionIndex = function() {
    return this.questions[this.questionIndex];
}

Quiz.prototype.guess = function(answer) {
    if(this.getQuestionIndex().isCorrectAnswer(answer)) {
        this.score++;
    }

    this.questionIndex++;
}

Quiz.prototype.isEnded = function() {
    return this.questionIndex === this.questions.length;
}


function Question(text, choices, answer) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;
}

Question.prototype.isCorrectAnswer = function(choice) {
    return this.answer === choice;
}


function populate() {
    if(quiz.isEnded()) {
        showScores();
    }
    else {
       
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;

        
        var choices = quiz.getQuestionIndex().choices;
        for(var i = 0; i < choices.length; i++) {
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess("btn" + i, choices[i]);
        }

        showProgress();
    }
};

function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);
        populate();
    }
};


function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
};

function showScores() {
    var gameOverHTML = "<h1>Result</h1>";
    gameOverHTML += "<h2 id='score'> Your scores: " + quiz.score + "</h2>";
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHTML;
};


var questions = [
    new Question("Who is the First President of Pakistan ?",  ["Muhammad Ali Jinnah", "Liaqat Ali khan","Khawaja Nazimuddin", "Isikander Mirza"], "Isikander Mirza"),
    new Question("When was first constitution of Pakistan Adopted ?", ["1956", "1950", "1949", "1955"], "1956"),
    new Question("When is Youm-e-Takbir celebrated ?", ["March 21", "May 28","August 14", "December 25"], "May 28"),
    new Question("Which is Highest civillian award in Pakistan ?", ["Hilal-e-Pakistan", "Nishan-e-Pakistan", "Sitara-e-Pakistan", "Tamgha-e-Pakistan"], "Nishan-e-Pakistan"),
    new Question("How many times martial law has been placed in Pakistan ?", ["4", "6", "1", "3"], "3")
];


var quiz = new Quiz(questions);


populate();
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
32
33
34
35
36
37
38
39
40
41
42
43
44
45
46
47
48
49
50
51
52
53
54
55
56
57
58
59
60
61
62
63
64
65
66
67
68
69
70
71
72
73
74
75
76
77
78
79
80
81
82
83
84
85
86
87
88
89
90
91
92

function Quiz(questions) {
    this.score = 0;
    this.questions = questions;
    this.questionIndex = 0;
}
 
Quiz.prototype.getQuestionIndex = function() {
    return this.questions[this.questionIndex];
}
 
Quiz.prototype.guess = function(answer) {
    if(this.getQuestionIndex().isCorrectAnswer(answer)) {
        this.score++;
    }
 
    this.questionIndex++;
}
 
Quiz.prototype.isEnded = function() {
    return this.questionIndex === this.questions.length;
}
 
 
function Question(text, choices, answer) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;
}
 
Question.prototype.isCorrectAnswer = function(choice) {
    return this.answer === choice;
}
 
 
function populate() {
    if(quiz.isEnded()) {
        showScores();
    }
    else {
       
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;
 
       
        var choices = quiz.getQuestionIndex().choices;
        for(var i = 0; i < choices.length; i++) {
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess("btn" + i, choices[i]);
        }
 
        showProgress();
    }
};
 
function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);
        populate();
    }
};
 
 
function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
};
 
function showScores() {
    var gameOverHTML = "<h1>Result</h1>";
    gameOverHTML += "<h2 id='score'> Your scores: " + quiz.score + "</h2>";
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHTML;
};
 

var questions = [
    new Question("Who is the First President of Pakistan ?", ["Muhammad Ali Jinnah", "Liaqat Ali khan","Khawaja Nazimuddin", "Isikander Mirza"], "Isikander Mirza"),
    new Question("When was first constitution of Pakistan Adopted ?", ["1956", "1950", "1949", "1955"], "1956"),
    new Question("When is Youm-e-Takbir celebrated ?", ["March 21", "May 28","August 14", "December 25"], "May 28"),
    new Question("Which is Highest civillian award in Pakistan ?", ["Hilal-e-Pakistan", "Nishan-e-Pakistan", "Sitara-e-Pakistan", "Tamgha-e-Pakistan"], "Nishan-e-Pakistan"),
    new Question("How many times martial law has been placed in Pakistan ?", ["4", "6", "1", "3"], "3")
];
 

var quiz = new Quiz(questions);

populate();