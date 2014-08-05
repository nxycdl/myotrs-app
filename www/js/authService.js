//Auth服务实现，业务逻辑
'use strict';
angular.module('otrsapp.authservices', []).factory('AuthService', function ($q, CommServices) {
    console.log('authservices module');
    return {
        login: function ($http, credentials) {
            console.log('call login');
            return true;
        },
        isLoggedIn: function ($window) {
            if (typeof $window.localStorage.auth == 'undefined') {
                return false;
            } else {
                return true;
            }
        },
        logout: function ($window) {
            console.log('logout');
            return true;
        }
    }
});