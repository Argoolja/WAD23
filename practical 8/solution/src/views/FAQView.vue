<template>
<div class="about">
    <h2>WAD - frequently Asked Question (FAQ)</h2>
    <div class="container">
    <div class="question" v-for="(question, index) in questions" :key="index">
    <h3 @click="question.clicked = !question.clicked" v-text="question.question"></h3>
    <div class="answer" v-show="question.clicked">
    <p v-text="question.answer"></p>
    </div>
</div>
</div>
</div>
</template>

<script>
export default {
  name: "FAQView",

  data: function() {
    return {
  questions: {
  "FAQ1": {
    index: 1,
    clicked: false,
    question: "Do I need to attened the lecture/labs?",
    answer: "Attending the lecture/labs is not mandatory, but highly adviced."
  },
  "FAQ2": {
    index: 2,
    clicked: false,
    question: "Do I need to physically attened the exam",
    answer: "Yes, the exam is not offered online, physical presence is required."
  },
  "FAQ3": {
    index: 3,
    clicked: false,
    question: "Do I need to attend the discussion of my homework",
    answer: "Yes, all team memebers need to attened the discussion."
  },
  "FAQ4": {
    index: 4,
    clicked: false,
    question: "I cannot attend the exam, can I retake it",
    answer: "There will be a resit exam offered to students who do not pass/attend exams"
  },
}
}}}
</script>

<style scoped>

* {
  box-sizing: border-box;
}
body {
  font-size: 18px;
  padding-bottom: 100px;
}
h2{
  color: rgb(98, 170, 39);
}
.container {
  margin: 20px auto;
  width: 600px;
}
.container .question h3 {
  margin: 0;
  padding: 15px;
  text-align: left;
}



.container .question h3:hover {
  cursor: pointer;
  color: rgb(98, 170, 39);

}
.container .question .answer {
  padding: 5px;
  font-size: 16px;
  text-align: left;
  text-indent: 20px;
}
.container .question .answer p {
  margin: 0;
}

</style>