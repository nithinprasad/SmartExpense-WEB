var smartController = function ($scope, $log, $route) {
    $scope.controllerSrc = $route.controllerPath;
   
}
var loginController = function ($scope, $log) {
    $scope.userName = "nithinprasad59@yahoo.com";
    $scope.password = "nithin123";
    $scope.userEmail = $scope.userName;
}

var tableController = function ($scope, $log) {
    $scope.names = [
        {
            name: 'Jani'
            , country: 'Norway'
        }


        
        , {
            name: 'Carl'
            , country: 'Sweden'
        }


        
        , {
            name: 'Margareth'
            , country: 'England'
        }


        
        , {
            name: 'Hege'
            , country: 'Norway'
        }


        
        , {
            name: 'Joe'
            , country: 'Denmark'
        }


        
        , {
            name: 'Gustav'
            , country: 'Sweden'
        }


        
        , {
            name: 'Birgit'
            , country: 'Denmark'
        }


        
        , {
            name: 'Mary'
            , country: 'England'
        }


        
        , {
            name: 'Kai'
            , country: 'Norway'
        }
  ];

    $scope.sortField = "name";
    $scope.sortBy = false;
    $scope.sortColumn = function (column) {
        $scope.sortField = column;
        $scope.sortBy = $scope.sortField == (column) ? !$scope.sortBy : false;

    }
    $scope.getSortClass = function (column) {
        if ($scope.sortField == column) {
            return $scope.sortBy ? "glyphicon glyphicon-triangle-bottom" : "glyphicon glyphicon-triangle-top";
        }

        return 'glyphicon glyphicon-minus-sign';
    }
}