smartExpenseApp .config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'module/login/login.html',
        controller: 'loginController',
        controllerPath:'module/login/js/smartController.js'
      }).
      when('/login', {
        templateUrl: 'module/login/login.html',
        controller: 'loginController',
        controllerPath:'module/login/js/loginController.js'
      }).
      when('/table', {
        templateUrl: 'module/table/table.html',
        controller: 'tableController',
        controllerPath:'module/table/js/tableController.js'
      }).
      otherwise({
        redirectTo: '/login'
      });
  }]);