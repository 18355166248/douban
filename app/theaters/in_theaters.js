(function(angular){
    angular
        .module("movie-theaters",[])
        .config(["$routeProvider",function($routeProvider){
            $routeProvider.when("/in_theaters/:page?",{
                templateUrl : "./theaters/view.html",
                controller : "theaters"
            })
        }])
        .controller("theaters",["$scope","$routeParams","$http","$sce","jsonpService","$window","$route",function($scope,$routeParams,$http,$sce,jsonpService,$window,$route){
            var page = $routeParams.page || 1;
            var count = 10;
            var start = count * (page -1);
            // 调用 自己创建的一个服务 可以接受jsonp 的ajax请求
            jsonpService.jsonp("https://api.douban.com/v2/movie/in_theaters?start="+start+"&count="+count,function(data){
                console.log(data);
                $scope.data = data;
                $scope.totalPage = $window.Math.ceil((data.total-0)/(data.count-0));
                $scope.currentPage = page;
                $scope.$digest();
            })
            // var url =  $sce.trustAsResourceUrl("https://douban.com/v2/movie/in_theaters?start="+start+"&count="+count)

            // angular自带的http请求 
            // $http({
            //     method : "GET",
            //     url : "/app/theaters/data.json"
            // }).then(function(data){
            //     console.log(data.data);
            //     $scope.data = data.data
            //     $scope.totalPage = $window.Math.ceil(($scope.data.total-0)/($scope.data.count-0));
            //     $scope.currentPage = page;
            // })
            // jsonp 请求不行 因为angular自带的jsonp的回调函数里面参数有小数点 所以我们需要自己写一个jsonp 函数
            // 用angular自带的jsonp请求试试
            // $http.jsonp(url)
            // .then(function(data){
            //     console.log(data);
            // })
            
            // 点击上一页 下一页 发送请求
            $scope.prevPage = function() {
                if (page == 1) return;
                $route.updateParams({page :page-1})
            }
            $scope.nextPage = function() {
                if (page == $scope.totalPage) return;
                $route.updateParams({page : (page-0)+1})
            }
        }])
})(angular)