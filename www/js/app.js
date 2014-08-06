//主控文件，主要包含模块引入、路由配置
'use strict';

var wsUrl = "http://61.133.217.140:808/otrs/nph-genericinterface.pl/Webservice/GenericTicketConnector";
//angular.module('otrsapp', ['ionic', 'abc.authservices', 'abc.loginControllers'])
<<<<<<< HEAD
angular.module('otrsapp', ['ionic', 'otrsapp.authservices', 'otrsapp.controllers', 'otrsapp.common'])
  .config(function ($stateProvider, $urlRouterProvider, $httpProvider) {
    console.log('ok');
    $stateProvider
      .state('login', {
        url: "/login",
        templateUrl: "templates/login.html",
        controller: 'LoginCtrl'
      });
  })
//登录拦截器
//.run(function ($rootScope, $window, $location, AuthService) {
.run(function ($rootScope, $window, $location, AuthService) {
  $rootScope.$on("$locationChangeStart", function (event, next, current) {
    console.log('logging ');
    if (AuthService.isLoggedIn($window)) {
      //登录dl 
      //event.preventDefaul t();
    } else {
      //未登录
      console.log('no logging');
      //$location.path('/login');
      //event.preventDefault();
    }
  });
=======
angular.module('otrsapp', ['ionic', 'otrsapp.authservices', 'otrsapp.controllers','otrsapp.common'])
    .config(function ($stateProvider, $urlRouterProvider, $httpProvider) {
        console.log('ok');
        $stateProvider
            .state('login', {
                url: "/login",
                templateUrl: "templates/login.html",
                controller: 'LoginCtrl'
            });
    })
//登录拦截器
//.run(function ($rootScope, $window, $location, AuthService) {
.run(function ($rootScope, $window, $location, AuthService) {
    $rootScope.$on("$locationChangeStart", function (event, next, current) {
        console.log('logging ');
        if (AuthService.isLoggedIn($window)) {
            //登录dl
            console.log('having logging');
            //event.preventDefaul t();
        } else {
            //未登录
            console.log('no logging');
            $location.path('/login');
            //event.preventDefault();
        }
    });
>>>>>>> 3991f13371bad973e69a8df1b661fe1c61f81474
});