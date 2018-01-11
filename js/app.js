var myApp = angular.module("myApp", []);

myApp.controller("myController", function($scope){
	console.log("in controller...");
	$scope.newDept = {};
	$scope.info = "";

	$scope.Departments = [
		{DeptName: "HR", Dec: "Human Resources"},
		{DeptName: "Sales", Dec: "Marketing"},
		{DeptName: "Devlopment", Dec: "IT-Devlopment"}
    ];
    
    $scope.saveDept = function(){
		console.log("Saving...");
		$scope.Departments.push($scope.newDept);
		$scope.info = "New Devlopment Added Successfully!";
		$scope.newDept = {};
    };
    
    $scope.selectDept = function(D){
        console.log(D)
    };
    $scope.selectDept = function(D){
        $scope.clickedDept = D;
        //$scope.info = "User Update Successfully!";
	};

	$scope.deleteDept = function(){
		console.log($scope.Departments.indexOf($scope.clickedDept));
		$scope.Departments.splice($scope.Departments.indexOf($scope.clickedDept), 1);
		$scope.info = "User Deleted Successfully!";
	};

	$scope.clearInfo = function(){
		$scope.info = "";
	};
});