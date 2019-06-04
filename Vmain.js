
// below is an array with questions, options and an answer, and only one is valid the "true" one.
let quiz = {
  motive: 'Just keep calm, you can do it!!!',
  questions: [
    {text: "Q1) Africa is a continent (a very large mass of land) which is made up of many different countries. How many countries make up the continent of Africa?", 
    responses: [{text: '1'}, {text: '54', correct: true}, {text: '84.', }, {text:'56',} ]}, 
    {text: "Q2) What percentage of all the land on the planet Earth does Africa cover?", 
    responses: [{text: '10%'}, {text: '20%', correct: true}, {text: '30%'}, {text: '50%'} ]},
    {text: "Q3) What are the origins of the name 'Africa'? The name has its origins in a small country in the North of Africa (Tunisia) and it means:", 
    responses: [{text: 'enormous place'}, {text: 'sunny place', correct: true}, {text: 'dangerous place', }, {text:'Black people',} ]}, 
    {text: "Q4) In 1950, about 221 million people lived in Africa. How many people live in Africa today?", 
    responses: [{text: '500 million people'}, {text: '750 million people '}, {text: 'more than 1000 million (a billion) people', correct: true}, {text: 'more than a billion'} ]}, 
    {text: "Q5) What is the distance from the top of Africa (i.e. its most northerly point) to the bottom of Africa (its most southerly point)?",
    responses: [{text: '1000 miles (1600km)'}, {text: '5000 miles (8000km)', correct: true}, {text: '10000 miles (16000km)', }, {text:'None of the above',} ]},
    {text: "Q6) Long with lions, elephants and giraffes, Africa is also home to penguins?", 
    responses: [{text: 'False'}, {text: 'Some part'}, {text: 'True', correct: true}, {text: 'None of the above'} ]},
    {text: "Q7)How many different languages are spoken across Africa?", 
    responses: [{text: 'about 30'}, {text: 'about 300'}, {text: 'about 3000', correct:true }, {text:'About 470',} ]},
    {text: "Q8)To make chocolate you need cocoa beans. Approximately how much of the world's cocoa bean crop is grown in West Africa?", 
    responses: [{text: '33%'}, {text: '66%', correct:true}, {text: '99%'}, {text: '100%'} ]}, 
    {text: "Q9) What is the name of the fast food dish popular in South Africa which is made by filling a hollowed-out loaf of bread with curry?", 
    responses: [{text: 'Bunny Chow', correct: true}, {text: 'Funny Chow!'}, {text: 'KFC.', }, {text:'chip Chow',} ]}, 
    {text: "Q10) What does ANC stand for?", 
    responses: [{text: 'African nate Continent'}, {text: 'African National Congress', correct: true}, {text: 'African National Country'}, {text: 'African Nationalise Country'} ]}, 
    {text: "Q11) Which volcano in Tanzania is the highest mountain in Africa?",
    responses: [{text: 'Kilimanjaro', correct: true}, {text: 'The Congo'}, {text: 'Halimahya', }, {text:'Kilimanjaran',} ]}, 
    {text: "Q12) Which country, bordering Zaire, takes its name from the former name of the Zaire river?", 
    responses: [{text: 'Gabon'}, {text: 'zambia'}, {text: 'South Africa'}, {text: 'Congo', correct:true} ]}, 
    {text: "Q13) Which is the second longest river in Africa?", 
    responses: [{text: 'Congo', correct:true}, {text: 'Orange!'}, {text: 'Nair.', }, {text:'Zaire, formerly Congo',} ]}, 
    {text: "Q14) How many pairs of wings does a bee have?",
    responses: [{text: '2', correct:true}, {text: '4'}, {text: '6'}, {text: '7'} ]}, 
    {text: "Q15) What is the only continent on earth where Giraffes live in the wild?",
    responses: [{text: 'Africa', correct:true}, {text: 'Asia!'}, {text: 'North America.', }, {text:'Austria',} ]}, 
    {text: "Q16) What type of animal is the largest primate in the world?",
    responses: [{text: 'Lions'}, {text: 'Elephants'}, {text: 'king kong'}, {text: 'The Gorilla', correct:true} ]}, 
    {text: "Q17) How many legs does a spider have?", responses: [{text: '6'}, {text: '8', correct: true}, {text: '4.', }, {text:'12',} ]}, 
    {text: "Q18) Who was the Egyptian king whose tomb and treasures were discovered in the Valley of the Kings in 1922?", 
    responses: [{text: 'tutu'}, {text: 'Nelson Mandela'}, {text: 'Tutankhamen', correct:true}, {text: 'Tutakhmen'} ]}, 
    {text: "Q19) Which country is Africa'a most popular tourist destination? ", 
    responses: [{text: 'Egypt', correct: true}, {text: 'Morocco'}, {text: 'Tunisia', }, {text:'South Africa',} ]}, 
    {text: "Q20) The crocodile species is believed to have been around for how long? 2 million years or 200 million years?", 
    responses: [{text: '"100 million years'}, {text: '200 million years', correct: true}, {text: '300million years'}, {text: '400 million years'} ]},
  ]
};
      
new Vue({
  el: '#app',
  data: {
    message: "sorry!!! you got 0",
    quiz: quiz,
    // Store current question index
    questionIndex: 0,
    // An array initialized with "false" values for each question
    // It means: "did the user answered correctly to the question n?" "no".
    userResponses: Array(quiz.questions.length).fill(false)
  },
  // The view will trigger these methods on click
  methods: {
    // this is for the button to go to the next question
    next: function() {
      this.questionIndex++;
    },
    // this is for button to go to the previous question
    prev: function() {
      this.questionIndex--;
    }}, 
  computed: {
    // Return is giving the  "true" answers counted the in userResponses
    score: function() {
      return this.userResponses.filter(function(val) { return val }).length;
    }
  },
  //this is a watch for the v-if statement
  watch: {
    score: function() {
      if (this.score < 10) {
        this.message = "ouch try again"
      } else if (this.score < 12) {
        this.message = "well done"
      } else if (this.score > 17) {
        this.message = "you are super good"
      }
    }
  }
});



  

/* we need a create an if statement, saying = if the score is less than 10 - show message you can do better
                              else if score is greater than 10 but less than 15 - show very good
                               else if greater that 18 - show well done, are rock yeah */








