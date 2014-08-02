angular.module('m_loginControllers', [])
    .controller('LoginCtrl', function ($rootScope, $scope, $http, $state, $ionicPopup, $window, AuthService) {
        $scope.credentials = {
            username: '',
            password: ''
        };
        $scope.credentials.username = $window.localStorage.username;
        $scope.login = function (credentials) {
            AuthService.login($http, credentials).then(function (data) {
                $window.localStorage.auth = data;
                $window.localStorage.username = credentials.username;
                $state.go('tab.ticket-index');
            });
        },
        function (err) {
            //登陆失败;
            delete $window.localStorage.auth;
            var loginError = $ionicPopup.alert({
                title: '登录错误',
                template: '用户名或口令错误！<br>' + err.ErrorMessage
            });
            loginError.then(function (res) {
                //
                console.log('error');
            });
        }


    });