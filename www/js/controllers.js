//控制器
'use strict';

angular.module('otrsapp.controllers', [])

//登陆控制;
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
    }, function (err) {
      delete $window.localStorage.auth;
      var loginError = $ionicPopup.alert({
        title: '登录错误',
        template: '用户名或口令错误！<br>' + err.ErrorMessage
      });
      loginError.then(function (res) {
        //
        console.log('error');
      });
    });
  }

  $scope.logout = function () {
    AuthService.logout($window);
  }

})
// TicketIndexCtrl 控制器;
.controller('TicketIndexCtrl', function ($scope, $http, $state, $window, $ionicPopup, $ionicLoading, TicketService) {
  var init = function () {
    $scope.start = 0;
    $scope.end = 7;
    $scope.step = 7;
    $scope.max = 0;
    $scope.tickets = [];
  };

  var showLoading = function () {
    $ionicLoading.show({
      content: '<i class="icon ion-loading-c"></i>',
      animation: 'fade-in',
      showBackdrop: true,
      maxWidth: 200,
      showDelay: 300
    });
  };
  var hideLoading = function () {
    $ionicLoading.hide();
  };

  $scope.getByStartAndEnd = function (reset) {
    if (reset) {
      init();
    }
    if ($scope.end <= $scope.max) {
      return;
    }
    showLoading();
    TicketService.getByStartAndEnd($http, $window.localStorage.auth,
      $window.localStorage.username, $scope.start, $scope.end).then(function (data) {
      $scope.max = $scope.end;
      if ($scope.tickets.length != 0) {
        $scope.tickets = $scope.tickets.concat(data);
      } else {
        $scope.tickets = data;
      }
      $scope.$broadcast('scroll.refreshComplete');
      hideLoading();
    }, function (error) {
      hideLoading();
      $state.go('login');
    });
  };

  $scope.getByStartAndEnd(true);

  $scope.setPriority = function (ticket) {
    TicketService.updateTicket($http, ticket.id,
      $window.localStorage.auth, $window.localStorage.username, '加急').then(function (data) {
      var setPrioritySuccess = $ionicPopup.alert({
        title: '提示',
        template: '加急处理完成。'
      });
      setPrioritySuccess.then(function (res) {
        //
        console.log('error');
      });
    });
  };

  $scope.stepIt = function () {
    $scope.start += $scope.step;
    $scope.end += $scope.step;
    $scope.getByStartAndEnd(false);
  };

  $scope.showMoreButton = function () {
    return ($scope.tickets.length >= $scope.step);
  };
})