(function(angular){
    angular
        .module("movie-detail",[])
        .config(["$routeProvider",function($routeProvider){
            $routeProvider.when("/details",{
                templateUrl : "./details/view.html",
                controller : "moviedetail"
            })
        }])
        .controller("moviedetail",["$scope","$routeParams","jsonpService","$http",function($scope,$routeParams,jsonpService,$http){
            // 获取地址栏id值
            var id = $routeParams.id;
            console.log(jsonpService);

            jsonpService.jsonp("https://api.douban.com/v2/movie/subject/"+id+"?",function(data){
                $scope.data = data;
                console.log(data)
                $scope.$digest();
            });

        }])
})(angular)