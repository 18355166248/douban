(function(angular){
    angular
        .module("movieList",[])
        .config(["$routeProvider",function($routeProvider){
            $routeProvider.when("/:movieType/:page?",{
                templateUrl : "./movie_list/view.html",
                controller : "move-list"
            })
        }])
        .controller("move-list",["$scope","$routeParams","$http","$sce","jsonpService","$window","$route",function($scope,$routeParams,$http,$sce,jsonpService,$window,$route){
            // 在加载成功前 让css加载动画显示出来
            $scope.loading = true;
            // 获取哈希值第一个参数
            var movieType = $routeParams.movieType;
            // 获取哈希值第二个参数 如果没有 name默认为1
            var page = $routeParams.page || 1;
            // 搜索的时候 获取哈希值 第三个惨呼 如果没有 就是undifined
            var movieValue = $routeParams.q;
            var count = 10;
            var start = count * (page -1);
            // 调用 自己创建的一个服务 可以接受jsonp 的ajax请求
            jsonpService.jsonp("https://api.douban.com/v2/movie/"+movieType+"?start="+start+"&count="+count+"&q="+movieValue,function(data){
                // console.log(data);
                $scope.data = data;
                $scope.totalPage = $window.Math.ceil((data.total-0)/(data.count-0));
                $scope.currentPage = page;
                $scope.loading = false;
                $scope.$digest();
            })

             
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