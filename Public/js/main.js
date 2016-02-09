angular.module('jesseyApp', ['ui.router']);


angular.module('jesseyApp')
    .config(['$stateProvider',
        function($stateProvider){

            console.log('config loaded');

            $stateProvider
                .state('/main', {
                    url: "",
                    templateUrl: "html/views/home.html"
                })

                .state('home', {
                    url: "/home",
                    templateUrl: "html/views/home.html"
                })

                .state('projects', {
                    url: "/projects",
                    templateUrl: "html/views/projects.html"
                })

                .state('skillz', {
                    url: "/skillz",
                    templateUrl: "html/views/skillz.html"
                })

                .state('experience', {
                    url: "/experience",
                    templateUrl: "html/views/experience.html"
                })
                //.state('disclaimer', {
                //    url: "/theLegalStuff",
                //    templateUrl: "html/views/disclaimer.html"
                //})
        }
    ]);



angular.module('jesseyApp').controller('mainController', ['$scope', '$http', function($scope, $http) {
    console.log('mainController loaded');

    //$scope.form = {};
    //
    //$scope.formSubmit = function() {
    //    console.log($scope.form)
    //    //$http.post('/submit', $scope.form)
    //    $http({
    //        method  : 'post',
    //        url     : '/api/register',
    //        data    : $scope.form
    //    })
    //
    //};

    $(document).ready(function () {
        $(".navbar-nav li a").click(function(event) {
            $(".navbar-collapse").collapse('hide');
        });
    });



}]);

