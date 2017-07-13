(function(angular){
    angular
        .module("movie-tab",[])
        .directive("movieTab",["$location",function($location){
            return {
                templateUrl : "/app/common/directives/view.html",
                link : function($scope,ele,attrs) {
                    // location.url()可以获取地址哈希值  
                    // console.log($location.url());
                    // 将location值绑定到$scope上
                    $scope.location = $location;
                    // 将angular里面代表jqlite定义为$符号使用
                    var $ = angular.element;
                    
                    // 监视location的变化 这里的location是$scope绑定的location
                    $scope.$watch("location.url()",function(newValue, oldValue){
                        // 找到 ul下的所有的li
                        var lis = $(ele).find("li");
                        // 排他 将所有 li标签的active 都删除
                        for(var i=0;i<lis.length;i++){
                            $(lis[i]).removeClass("active");
                        }
                        // 遍历每个li标签
                        for (var i=0;i<lis.length;i++){
                            var li = lis[i];
                            var a = $(li).find("a");
                            //判断 如果 a链接的href值中存在哈希地址值 那么就给他加active
                            if ($(a).attr("href").indexOf(newValue) != -1){
                                $(li).addClass("active")
                            }
                        }
                    })
                    
                }
            }
        }])
})(angular)