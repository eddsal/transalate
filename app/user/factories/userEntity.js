angular.module('apptest').factory('userEntity', ['localStorageService', function (localStorageService) {

    this.login = function (username, number,email) {
        localStorageService.set('user', username);
        localStorageService.set('number', number);
        localStorageService.set('email', email);
    };

    this.logout = function () {
        localStorageService.remove('user','number','email');
    };

    this.isSignedIn = function () {
        return null !== this.getUser();
    };
    this.getUser = function () {
        return localStorageService.get('user');
    };

    return this;
}]);