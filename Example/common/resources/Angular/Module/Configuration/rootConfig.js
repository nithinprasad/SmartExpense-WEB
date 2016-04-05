// https://scotch.io/tutorials/angular-routing-using-ui-router
smartExpenseApp.config(['$stateProvider', function ($stateProvider, $urlRouterProvider) {
    $stateProvider
        /*.state('login', {
        url: '/login',
        templateUrl: 'module/login/login.html',
        controller: 'loginController',
        css: [],
        js: [{
                href:'module/login/js/login.js'
            }],
        views: {}
        })
        .state('home', {
            url: '/about',
            templateUrl: 'module/menu.html',
            controller: 'homeController'
            css: [{
                    href: 'my-page/my-page.mobile.css'
                }],
            views: {
               'columnOne@about': {
                    templateUrl: 'module/login/login.html',
                    controller: 'loginController',
                    css: [],
                    js: [{
                            href:'module/login/js/login.js'
                        }]
                },
               'columnOne@about': {
                    templateUrl: 'module/login/login.html',
                    controller: 'loginController',
                    css: [],
                    js: [{
                            href:'module/login/js/login.js'
                        }]
                }
            }

        });*/
        .state('/', {
        url: '/',
        controller: 'loginController',
        templateUrl: 'module/login/login.html',
        data: {
          css: [
            {
              href: 'module/login/css/login.css'
            }
          ]
        }
        })
        .state('menu', {
        url: '/menu',
        controller: 'menuController',
        templateUrl: 'module/menu.html',
        data: {
          css: [
            {
              href: 'module/css/menu.css'
            }
          ],
          js: [
            {
              href: 'module/js/table.js'
            }
          ]
        }
      })
    .state('menu.table', {
        url: '/table',
        controller: 'tableController',
        templateUrl: 'module/table/table.html',
        data: {
          css: [
            {
              href: 'module/css/table.css'
            }
          ],
          js: [
            {
              href: 'module/ks/table.js'
            }
          ]
        }
      })

}]);