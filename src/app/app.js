'use strict';

var app = angular.module('app', [
  'ui.router',
  'ui.bootstrap.modal'
]);



app.run(function($rootScope, $location, $state, LoginService, $timeout) {
  $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams){ 
    console.log('Changed state to: ' + toState);
  });

  if(!LoginService.isAuth()) {
    $state.transitionTo('main');
  }
});



app.factory('LoginService', function(){

  var admin = 'admin',
      pass = 'password',
      isAuth = false;

  return {
    login: function(username, password) {
      isAuth = username === admin && password === pass;
      return isAuth;
    },
    isAuth: function() {
      return isAuth;
    }
  };
})



app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('main', {
      url: '/',
      templateUrl: 'views/main/main.html',
      controller: 'MainCtrl'
    })
    .state('account', {
      url: '/account',
      templateUrl: 'views/account/account.html'
    })
    .state('account.getZen', {
      url: '/account/get-zen',
      templateUrl: 'views/account/get-zen.html'
    })
    .state('account.takeZen', {
      url: '/account/take-zen',
      templateUrl: 'views/account/take-zen.html'
    })
    .state('account.ratings', {
      url: '/account/ratings',
      templateUrl: 'views/account/ratings.html'
    })
    .state('account.news', {
      url: '/account/news',
      templateUrl: 'views/account/news.html'
    });
  $urlRouterProvider.otherwise('/');
}]);