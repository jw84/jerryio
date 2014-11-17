'use strict';

/**
 * @ngdoc function
 * @name jerryioApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the jerryioApp
 */
angular.module('jerryioApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
