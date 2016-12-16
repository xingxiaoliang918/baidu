'use strict';

/**
 * @ngdoc overview
 * @name baiduApp
 * @description
 * # baiduApp
 *
 * Main module of the application.
 */
angular
  .module('baiduApp', ['xing'])
  .controller('baidu',['$scope','$http',function($scope,$http){
  	$http({
  		url:'http://47.90.20.200:1602/news1/',
  		method:'get'
  	}).then(function(e){
  		$scope.data = e.data
  		console.log(e)
  	},function(e){
  		
  	})
  	$http({
  		url:'http://47.90.20.200:1602/news-img1/',
  		method:'get'
  	}).then(function(e){
  		$scope.data1 = e.data
  		console.log(e)
  	},function(e){
  		
  	})
  	$http({
  		url:'http://47.90.20.200:1602/news2/',
  		method:'get'
  	}).then(function(e){
  		$scope.data2 = e.data
  		console.log(e)
  	},function(e){
  		
  	})
  	$http({
  		url:'http://47.90.20.200:1602/news-img2/',
  		method:'get'
  	}).then(function(e){
  		$scope.data3 = e.data
  		console.log(e)
  	},function(e){
  		
  	})
  }])
