//主控文件，主要包含模块引入、路由配置
'use strict';

var wsUrl = "http://61.133.217.140:808/otrs/nph-genericinterface.pl/Webservice/GenericTicketConnector";
angular.module('otrsapp', [])
    .config(function ($stateProvider, $urlRouterProvider, $httpProvider) {

        $stateProvider
            .state('login', {
                url: "/login",
                templateUrl: "templates/login.html",
                controller: 'LoginCtrl'
            });
    })
//登录拦截器
.run(function ($rootScope, $window, $location, AuthService) {
    $rootScope.$on("$locationChangeStart", function (event, next, current) {
        console.log('logging ');
    });
});