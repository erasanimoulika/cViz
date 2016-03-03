'use strict';

var keynotesApp = angular.module('keynotes');

keynotesApp.controller('keynotesControllerMain', ['$scope', '$http','$rootScope', '$routeParams', '$location', 'growl',
  function($scope, $http,$rootScope, $routeParams, $location, growl) {
  


var id = $routeParams.id;
      // AUtomatically swap between the edit and new mode to reuse the same frontend form
  $scope.mode=(id==null? 'add': 'edit');
  $scope.hideFilter = true;

  $scope.noteById = "";
  $scope.noteByEmail = "";
  $scope.noteByUser =  "";


  var refresh = function() {
    $http.get('/api/v1/secure/keynotes').success(function(response) {

      $scope.keynotesList = response;
      $scope.keynotes = "";
 




      switch($scope.mode)    {
        case "add":
          $scope.keynotes = "";
          break;

        case "edit":
          $scope.keynotes = $http.get('/api/v1/secure/keynotes/' + id).success(function(response){
            $scope.keynotes = response;

            console.log($scope.keynotes);
            console.log(response.noteBy);
            $scope.noteByUser = response.noteBy;
            $scope.noteByEmail = response.noteBy.email;
            $scope.noteById = response.noteBy._id;
             

            // reformat date fields to avoid type compability issues with <input type=date on ng-model
            $scope.keynotes.startDate = new Date($scope.keynotes.createdOn);
          });

      } // switch scope.mode ends
    }); // get keynote call back ends
  }; // refresh method ends

  refresh();

  $scope.save = function(){
    // set noteBy based on the user picker value
    $scope.keynotes.noteBy = $scope.noteById;
         $scope.keynotes.createby = $rootScope.user._id;
         console.log($scope.keynotes.createby);
 


    switch($scope.mode)    {
      case "add":
        $scope.create();
        break;

      case "edit":
        $scope.update();
        break;
      } // end of switch scope.mode ends

      $location.path("/");
  } // end of save method

  $scope.create = function() {
    $http.post('/api/v1/secure/keynotes', $scope.keynotes).success(function(response) {
      console.log($scope.keynotes.title)
      refresh();
      growl.info(parse("Keynote [%s]<br/>Added successfully", $scope.keynotes.title));
    })
    .error(function(data, status){
      growl.error("Error adding keynote");
    }); // http post keynoges ends
  }; // create method ends

  $scope.delete = function(keynotes) {
    var title = keynotes.title;
    $http.delete('/api/v1/secure/keynotes/' + keynotes._id).success(function(response) {
      refresh();
      growl.info(parse("Keynotes [%s]<br/>Deleted successfully", title));
    })
    .error(function(data, status){
      growl.error("Error deleting keynote");
    }); // http delete keynoges ends
  }; // delete method ends

  $scope.update = function() {
    $http.put('/api/v1/secure/keynotes/' + $scope.keynotes._id, $scope.keynotes).success(function(response) {
      refresh();
      growl.info(parse("Keynote [%s]<br/>Edited successfully", $scope.keynotes.title));
    })
    .error(function(data, status){
      growl.error("Error updating keynote");
    }); // http put keynoges ends
  }; // update method ends

  $scope.cancel = function() {

    $scope.keynotes="";
    $location.path("/");
  }

  $scope.getUser = function(){
    console.log($scope.keynotes.speaker);
    console.log($scope.keynote.receiver);
    $http.get('/api/v1/secure/admin/users/' + $scope.keynotes.speaker).success(function(response) {
      console.log(response);
      var user = response;
      $scope.keynotes.speaker = parse("%s %s, <%s>", user.name.first, user.name.last, user.email);
    });/*
     $http.get('/api/v1/secure/admin/users/' + $scope.keynotes.receiver).success(function(response) {
      console.log(response);
      var user = response;
      $scope.keynotes.receiver = parse("%s %s, <%s>", user.name.first, user.name.last, user.email);
    });*/
  }

}]);﻿ // controller ends


//services and drirectives for ngFloatingLables//
var messages = {
    required: "this field is required",
    minlength: "min length of @value@ characters",
    maxlength: "max length of @value@ characters",
    pattern: "don\'t match the pattern",
    "email": "mail address not valid",
    "number": "insert only numbers",
    "custom": "custom not valid type \"@value@\"",
    "async": "async not valid type \"@value@\""
};
keynotesApp.directive('customValidator', function () {
    return {
        require: 'ngModel',
        link: function (scope, element, attrs, ngModel) {
            ngModel.$validators.custom = function (value) {
                return value === "foo";
            };
        }
    };
});

keynotesApp.service('$fakeValidationService', ['$q', function ($q) {
    return {
        "get": function (value) {
            var deferred = $q.defer();

            setTimeout(function () {
                if (value === "bar") {
                    deferred.resolve({valid: true});
                } else {
                    deferred.reject({valid: false});
                }
            }, 3000);

            return deferred.promise;
        }
    }
}])
keynotesApp.directive('asyncValidator', ['$fakeValidationService', '$q', function ($fakeValidationService, $q) {
    return {
        require: 'ngModel',
        link: function ($scope, element, attrs, ngModel) {
            ngModel.$asyncValidators.async = function (modelValue, viewValue) {
                var value = modelValue || viewValue;
                if(value.length){
                    element.before('<i class="icon-spin icon-refresh"></i>').parent().addClass('spinner');

                    return $fakeValidationService.get(value).then(function(response) {
                        element.parent().removeClass('spinner').find('i').remove();
                        return true;
                    }, function(response) {
                        element.parent().removeClass('spinner').find('i').remove();
                        if (!response.valid) {
                            return $q.reject();
                        }
                    });
                }
            };
        }
    }
}])
