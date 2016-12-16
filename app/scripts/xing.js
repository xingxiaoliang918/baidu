angular.module("xing",[]).directive('mytive',[function(){
  	return {
  		restrict:'ECMA',
  		template:'<div class="container"><h1>国内<small>时政要闻</small></h1><div class="container conbox"><div class="row"><div class="col-md-6"><p ng-repeat="x in data">{{x.title | f}}</p></div><div class="col-md-4 col-md-offset-2"><p ng-repeat="i in data2"><img ng-src="{{i.img}}" alt="..." class="img-thumbnail"></p></div></div></div></div>',
  		scope:{data:"=xxl",data2:"=xxl2"},
  		replace:true,
  	}
  }]).filter("f",[function(){
  	return function(e){
  		if(e.length>20){
  			return e.substr(0,20)+'...'
  		}else{
  			return e
  		}
  	}
  }])
