var app = angular.module("listApp", ['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider
        .when('/landing', {
            templateUrl: 'landing.html',
            controller: 'landingController'
        })
        .when('/viewList', {
            templateUrl: 'viewList.html',
            controller: 'viewListController'
        })
        .otherwise({
            redirectTo: '/landing'
        });
});

app.controller('landingController', function($scope) {
    $scope.date = new Date();;
});

app.controller('viewListController', function($scope) {
    $scope.customers = [
        {'name': 'Serious Guy', 'city':'Praha'},
        {'name': 'Business Man', 'city':'Moscow'},
        {'name': 'Gandalf The Grey', 'city':'Los Angeles'}
    ];

    $scope.add = function() {
          x = {}
          x['name'] = $scope.name;
          x['city'] = $scope.city;
          $scope.message = $scope.name + " " + $scope.city
          $scope.customers.push(x);
          $scope.name = "";
          $scope.city = "";
          $scope.message = $scope.customers;
    };
});
