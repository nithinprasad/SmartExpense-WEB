smartExpenseApp .config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'module/login/login.html',
        controller: 'smartController'
      }).
      when('/login', {
        templateUrl: 'module/login/login.html',
        controller: 'smartController'
      }).
      when('/table', {
        templateUrl: 'module/table/table.html',
        controller: 'smartController'
      }).
      otherwise({
        redirectTo: '/login'
      });
  }]);