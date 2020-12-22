(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];

 function LunchCheckController($scope) {
    $scope.content = "";
    $scope.message = "";
    $scope.emptyFlag = "";
    $scope.textColor = {
        "color" : "black"
        // ,"background-color" : "coral",
        // "font-size" : "60px",
        // "padding" : "50px"
    }
    $scope.borderColor = {
        "border" : "2px solid black"
    }

    

    $scope.displayNumElemens = function() {
        var numOfElems = calcNumOfElems($scope.content)[0];
        if (numOfElems == 0) {
            $scope.message = "Please Enter Data First!";
            $scope.textColor = {
                "color" : "red"};
                $scope.borderColor = {
                    "border" : "2px solid red"
                };
        } else if (numOfElems <= 3) {
            $scope.message = "Enjoy!";
            $scope.textColor = {
                "color" : "green"};
                
            $scope.borderColor = {
                "border" : "2px solid green"
            };
        } else if (numOfElems > 3) {
            $scope.message = "Too much!";
            $scope.textColor = {
                "color" : "green"};
                $scope.borderColor = {
                    "border" : "2px solid green"
                };
        }
        var numOfFlags = calcNumOfElems($scope.content)[1];
        if (numOfFlags == 1) {
            var flagMsg = "";
            $scope.emptyFlag = flagMsg.concat(numOfFlags," empty entry was removed!");
            console.log(flagMsg);
        } else if ( numOfFlags > 1) {
            var flagMsg = "";
            $scope.emptyFlag = flagMsg.concat(numOfFlags," empty entries were removed!");
            console.log(flagMsg);
        }
    };
    
    function calcNumOfElems(inputString) {
        var numOfElems = 0;
        var emptyFlagCount = 0;

        if (inputString == null || inputString.trim() === ''){
            numOfElems = 0;
          } else {
              var listOfElems = inputString.split(',');
              for (var i = 0; i < listOfElems.length; i++) {
                  if (listOfElems[i].trim() == ''){
                      emptyFlagCount += 1;
                  }
              }
              var numOfElems = listOfElems.length;
          }
        //   console.log(numOfElems);
        //   console.log(emptyFlagCount);
          numOfElems -= emptyFlagCount;
        //   console.log(numOfElems);
          return [numOfElems, emptyFlagCount];
    };



}

})();