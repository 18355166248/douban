(function(angular){
    angular
        .module("movie-top",[])
        .config(["$routeProvider",function($routeProvider){
            $routeProvider.when("/top250",{
                templateUrl : "./top250/view.html",
                controller : "top"
            })
        }])
        .controller("top",["$scope","jsonpService",function($scope,jsonpService){
            jsonpService.jsonp("https://api.douban.com/v2/movie/top250?start=0&count=10",function(data){
                console.log(data.subjects);
                $scope.data = data.subjects;
                $scope.$digest();
            })
        }])
})(angular)