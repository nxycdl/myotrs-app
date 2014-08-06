//Auth服务实现，业务逻辑
'use strict';
<<<<<<< HEAD
angular.module('otrsapp.authservices', []).factory('AuthService', function ($q, CommonService) {
  return {
    login: function ($http, credentials) {
      return true;
    },
    isLoggedIn: function ($window) {
      console.log('dddddd');
      if (typeof $window.localStorage.auth == 'undefined') {
        return false;
      } else {
        return true;
      }
    },
    logout: function ($window) {
      return true;
=======
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
>>>>>>> 3991f13371bad973e69a8df1b661fe1c61f81474
    }
});