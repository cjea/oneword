var ONE_WORD = angular.module("oneword", []);

ONE_WORD.controller("userText", ["$scope", function($scope){
  var userTextVm = this;
  this.text = "Hello, world!";
  this.handleKeydown = function(event){
    console.log(event.keyCode);
  }
}]);
