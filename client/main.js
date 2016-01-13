var ONE_WORD = angular.module("oneword", []);

ONE_WORD.controller("userText", ["$scope", function($scope){

  var userTextVm = this;
  
  this.handleKeydown = function(event){
    console.log(event.keyCode);
  };

  this.setWordsGoal = function(numWords) {
    console.log(numWords, typeof numWords);
    return +numWords === +numWords ? userTextVm.wordsGoal = numWords : null;
  };

}]);
