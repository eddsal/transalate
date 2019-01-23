angular.module('apptest').controller('loginController', ['$scope', 'userEntity', '$location', function($scope, userEntity, $location){
    $scope.submitLogin = function (form) {
        if(true === form.$valid) {
            userEntity.login($scope.username, '0613475864','eddy@supinternet.fr');
            return $location.path('/');
        }

        return alert('NOT GOOD');
    };
}]);