var myApp = angular.module('apptest', [
    'ngRoute',
    'LocalStorageModule',
    'pascalprecht.translate'
]);

myApp.config(['$routeProvider',
    function routeProvider($routeProvider){
        $routeProvider.
        when('/', {
            templateUrl:'app/home/templates/home.html',
            controller:'homeController'
        }).
        when('/user/login/', {
            templateUrl:'app/user/templates/login.html',
            controller:'loginController'
        }).
        otherwise({
            redirectTo:'/'
        });
    }
]).run(function($rootScope, localStorageService, $location, userEntity){
    $rootScope.$on("$routeChangeStart", function(event, next, current) {
        var userData = localStorageService.get('user');
        if($location.path() !== '/user/login/' && !userEntity.isSignedIn()){
            $location.path('/user/login/');
        }
        if($location.path() === '/user/login/' && userEntity.isSignedIn()){
            $location.path('/');
        }
    });
});
 myApp.config(function($translateProvider){
     $translateProvider.translations('en',{
         h2:'im the header',
         h2:'im the footer',
         En_Btn: 'english',
         Fr_btn:'french'

     });
     $translateProvider.translations('en',{
        h2:'je suis header',
        h2:'je suis footer',
        En_Btn: 'english',
        Fr_btn:'french'
    });
    $translateProvider.preferredLanguage('en');
  
 })
 myApp.controller('ctrl',function($scope, $translate){
    $scope.lang = function(trans){
        $translate.use(trans);
    }
})