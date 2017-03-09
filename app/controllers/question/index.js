import Ember from "ember";

export default Ember.Controller.extend({
  needs: ['quiz/index','application'],
  currentUser: Ember.computed.alias('controllers.application.currentUser'),
  quiz: Ember.computed.alias('controllers.quiz/index.model'),

  actions: {
    answerSelector(answer, question_id) {
      answer.set('selected', true);
      let correctAnswer = false;
      this.store.find("question", question_id).then(question => {
        question.set('submitted', true);
        if (answer.get("correct") === true) {
          correctAnswer = true;
        }
        this.send('emit', {question_answered: this.model.id, quiz_id: this.model.get('quiz').id, correct_answer: correctAnswer, answer_id: answer.id}, true, 'socket1');
        this.transitionToRoute('question.waiting', question);
      });
    },
    timeUp() {
      //this.send('emit', {question_answered: this.model.id, quiz_id: this.model.get('quiz').id, correct_answer: false, answer_id: null}, true, 'socket1');
      this.transitionToRoute('question.waiting', this.model);
    },
    resetCountdown() {
      this.get('progress-bar').renderElement();
    }
  }
});
