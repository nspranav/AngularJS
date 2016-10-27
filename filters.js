angular.module("exampleApp.Filters",[])
.filter("dayName",function(){
	var dayNames=['Sunday',"Monday","Tuesday","Wednesday",'Thursday','Friday','Saturday'];
	
	return function(inp){
		return angular.isNumber(inp)? dayNames[inp]:inp;
	};
});