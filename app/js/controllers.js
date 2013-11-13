'use strict';

/* Controllers */
var snackMysticApp = angular.module('snackMysticApp', []);

snackMysticApp.controller('SnacksCaveCtrl', function SnacksCaveCtrl($scope) {
   $scope.snacks = [
     {'name': 'Cheetos',
      'love': 1},
     {'name': 'Sour Gummy Worms',
      'love': 1},
     {'name': 'Veggie Pizza',
      'love': 0}
   ];
  
  $scope.orderProp = 'name';
});