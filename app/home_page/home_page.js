(function(angular){
    angular
        .module("movie-homepage",[])
        .config(["$routeProvider",function($routeProvider){
            $routeProvider
            .when("/home_page",{
                templateUrl : "./home_page/view.html"
            })
        }])
})(angular)
