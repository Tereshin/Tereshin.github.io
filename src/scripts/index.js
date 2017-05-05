'use strict';

var blocks = {};

$(function () {
  initBlocks();
});

function initBlocks() {
  for (var key in blocks) {
    if (blocks[key]) {
      blocks[key].init();
    }
  }
}



var app = angular.module('app', ['ui.router', 'ngMockE2E']);



app.run(function($httpBackend){

  $httpBackend.whenPOST('http://127.0.0.1:8887/register').respond(function(method, url, data, headers) {
    return [200, data];
  });

  $httpBackend.whenPOST('http://127.0.0.1:8887/login').respond(function(method, url, data, headers) {
    return [200, data];
  });

});



app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('main', {
      url: '/',
      templateUrl: 'views/main.tpl.html'
    })
    .state('account', {
      url: '/account',
      templateUrl: 'views/account.tpl.html'
    });
  $urlRouterProvider.otherwise('/');
}]);



app.constant('usersConst', [
  {
    name: 'Максим',
    surename: 'Терешин',
    login: '+79179394242',
    password: '9179394242'
  },
  {
    name: 'Максимка',
    surename: 'Терешинка',
    login: '+79613344343',
    password: '9613344343'
  }
]);



app.factory('loginService', function(usersConst){

  var users = usersConst,
      isAuth = false;

  return {
    login: function (login, password) {
      result = $.grep(users, function(e) {
        return e.login === login && e.password === password
      });
      if (result.length) {
        return isAuth = true;
      } else {
        return isAuth = false;
      }
    },
    isAuth: function() {
      return isAuth;
    }
  };
});



app.controller('indexCtrl', function($http, $scope, loginService) {

});



app.controller('loginCtrl', function($http, $scope, loginService){
  $scope.loginForm = {};
  $scope.loginSubmit = function() {
    $http.post('http://127.0.0.1:8887/login', $scope.loginForm)
      .then(function(response) {
        if (loginService.login(response.data.login.replace(/[()-]|[ ]/g, ''), response.data.password)) {
          console.log("loggin in");
        } else {
          console.log("some error");
        }
      })
      .catch(function(response) {
        console.log(response);
      });
  }
});



app.controller('registerCtrl', function($http, $scope, usersConst){

  var users = usersConst;
  $scope.registerForm = {};
  $scope.registerSubmit = function() {
    $http.post('http://127.0.0.1:8887/register', $scope.registerForm)
      .then(function(response) {
        response.data.login = response.data.login.replace(/[()-]|[ ]/g, '');
        users.push(response.data);
      })
      .catch(function(response) {
        console.log(response);
      });
  }
});

