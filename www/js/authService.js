//Auth服务实现，业务逻辑
'use strict';
angular.module('otrsapp.authservices', []).factory('AuthService', function ($q, CommonService) {
  return {
    login: function ($http, credentials) {
      return true;
    },
    isLoggedIn: function ($window) {
      return true;
    },
    logout: function ($window) {
      return true;
    }
  }
});