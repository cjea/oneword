var ONE_WORD = angular.module("oneword", []);

ONE_WORD.controller("userText", ["$scope", function($scope){

  var userTextVm = this;
  
  this.fullWriting = "";
  
  this.handleWordCount = function(event) {
    if (event.keyCode === 13) {
      userTextVm.setWordsGoal(userTextVm.wordCount);
    }
  };
  this.continueSession = function () {
    userTextVm.wordsSoFar = 0;
    userTextVm.askToContinue = false;
  };

  this.completeSession = function () {
    userTextVm.askToContinue = false;
    userTextVm.completed = true;
    userTextVm.wordCount = null;
    userTextVm.wordsGoal = null;
  };

  this.handleSpace = function() {
    userTextVm.fullWriting += userTextVm.word + " ";
    userTextVm.word = "";
    ++userTextVm.wordsSoFar;
    if (userTextVm.wordsSoFar >= userTextVm.wordsGoal) {
      userTextVm.askToContinue = true;
      //userTextVm.completeSession();
    }
  };

  this.handleTyping = function(event){
    if (event.keyCode === 32 || event.keyCode === 13) {
      event.preventDefault();
      userTextVm.handleSpace();
    }
  };

  this.setWordsGoal = function(wordCount) {
    if(+wordCount === +wordCount) {
      userTextVm.fullWriting = "";
      userTextVm.wordsGoal = wordCount;
      userTextVm.wordsSoFar = 0;
      userTextVm.completed = false;
    }
  };

  this.restart = function() {
    return userTextVm.completed = false;
  }

}]);
