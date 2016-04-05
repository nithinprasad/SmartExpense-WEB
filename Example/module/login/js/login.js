 /*
        Summary        :  Login Page
        Description    :  Used to show the login page of application
        Author         :  Nithin Prasad
*/
var loginController = function ($scope, $log,$state) {
    $scope.userName = "nithinprasad59@yahoo.com";
    $scope.password = "nithin123";
    $scope.userEmail = $scope.userName;
    
    
     /*
        Summary        :  Submit function
        Description    :  Used to Submit the value to middleware
        Author         :  Nithin Prasad
    */
    $scope.signIn=function(){
        $log.info("Signin menthod Start");
        $state.go('menu');
        $log.info("Signin menthod End");
    }
}

smartExpenseApp.controller('loginController', loginController);
