(function(angular){
    angular
        .module("common-jsonp",[])
        .service("jsonpService",["$window",function($window){
            this.jsonp = function(url,callback){
                var $ = angular.element;
                var cbname = "jsonp"+(new Date() -0)+$window.parseInt($window.Math.random()*10000);
                $window[cbname] = callback;
                var script = document.createElement("script");
                script.src=url +"&callback="+cbname;
                document.body.appendChild(script);
            }
        }])
})(angular)