(function(angular){
    angular
        .module("movie-coming",[])
        .config(["$routeProvider",function($routeProvider){
            $routeProvider.when("/coming_soon",{
                templateUrl : "./coming_soon/view.html",
                controller : "coming"
            })
        }])
        .controller("coming",["$scope","jsonpService",function($scope,jsonpService){
            jsonpService.jsonp("https://api.douban.com/v2/movie/coming_soon?start=0&count=10",function(data){
                console.log(data.subjects);
                $scope.data = data.subjects;
                $scope.$digest();
            })
        }])
})(angular)