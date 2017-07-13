(function (angular) {
    // "use strict";

    angular
        .module("moviecat",[
            // 在这里 加入依赖模板 ngRoute 那么下面的模板都可以使用这个依赖项
            "ngRoute",
            "movie-tab",
            "common-jsonp",
            "movie-detail",
            "movie-homepage",
            "movieList"  
        ])
        .config(["$locationProvider","$routeProvider",function($locationProvider,$routeProvider){
            // 更改哈希路径前的字符 #!/ 感叹号是可以修改的  不用可以设置成空
            $locationProvider.hashPrefix("");
            // 如果哈希路径没有的话 那么默认跳转到 home_page页面
            $routeProvider.when("/",{
                redirectTo : "/home_page"
            })
        }])
        .controller("serach",["$scope","$location",function($scope,$location){
            $scope.search = function(){
                var movievalue = $scope.movievalue;
                var url = "/search/1?q="+movievalue;
                $location.url(url);
                $scope.movievalue = "";
            }

        }])
})(angular);