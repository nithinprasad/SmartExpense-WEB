// https://scotch.io/tutorials/angular-routing-using-ui-router
smartExpenseApp.config(['$stateProvider', function ($stateProvider, $urlRouterProvider) {
    $stateProvider
    
    
    /*
        Summary        :  Login Page
        Description    :  Used to show the login page of application
        Author         :  Nithin Prasad
    */
        .state('/', {
            url: '/', 
            controller: 'loginController',
            templateUrl: 'module/login/login.html',
            data: {
                css: [
                        {
                            href: 'module/login/css/login.css'
                        }
                     ],
                 scripts: [
                        {
                            href: 'module/login/js/login.js'
                        }
                     ]
                  }
        })
    /*
        Summary        :  Login Page
        Description    :  Used to show the login page of application
        Author         :  Nithin Prasad
    */
        .state('/login', {
            url: '/', 
            controller: 'loginController',
            templateUrl: 'module/login/login.html',
            data: {
                css: [
                        {
                            href: 'module/login/css/login.css'
                        }
                     ],
                 scripts: [
                        {
                                href: 'module/login/js/login.js'
                        }
                     ]
                  }
        })
    
    /*
        Summary        :  menu Page
        Description    :  Used to show the different menu for the application
        Author         :  Nithin Prasad
    */
    
        .state('menu', {
            url: '/menu', 
            controller: 'menuController',
            templateUrl: 'module/menu/menu.html',
            data: {
                css: [
                        {
                            href: 'module/menu/css/menu.css'
                        }
                    ], 
                scripts: [
                        {
                                href: 'module/menu/js/menu.js'
                        }
                    ]
                }
        })
    
    /*
        Summary        :  Table Page
        Description    :  Used to show the Table Example
        Author         :  Nithin Prasad
    */
    
        .state('menu.table', {
            url: '/table',
            controller: 'tableController',
            templateUrl: 'module/table/table.html',
            data: {
                    css: [
                            {
                                href: 'module/table/css/table.css'
                            }
                        ], 
                    scripts: [
                            {
                                href: 'module/table/js/table.js'
                            }
                        ] 
                    }
        })
    
     /*
        Summary        :  Profile Page
        Description    :  Used to show the profile page
        Author         :  Nithin Prasad
    */
    
        .state('menu.profile', {
            url: '/menu/profile',
            controller: 'profileController',
            templateUrl: 'module/profile/profile.html',
            data: {
                    css: [
                            {
                                href: 'module/profile/css/profile.css'
                            }
                        ], 
                    scripts: [
                            {
                                href: 'module/profile/js/profile.js'
                            }
                        ] 
                    }
        })
     /*
        Summary        :  Logout Page
        Description    :  Used to show the login page
        Author         :  Nithin Prasad
    */
    
        .state('menu.logout', {
            url: '/',
            controller: 'loginController',
            templateUrl: 'module/login/login.html',
            data: {
                    css: [
                            {
                                href: 'module/login/css/login.css'
                            }
                        ], 
                    scripts: [
                            {
                                href: 'module/login/js/login.js'
                            }
                        ] 
                    }
        })

}]);