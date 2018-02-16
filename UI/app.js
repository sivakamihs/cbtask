var myApp = angular.module("myApp", ["ngRoute"]);

myApp.config(function ($routeProvider) {
	$routeProvider
		.when("/user", {
			templateUrl: "view/user.html",
			controller: "UserListCtrl",
			styleUrls: ['css/app.css']
		})
		.when("/about", {
			templateUrl: "view/about.html",
			controller: "aboutCtrl"
		})
		.otherwise({
			redirectTo: "/user"
		});
});

myApp.factory("userService", function ($http) {
	
	return {
		list: function (callback) {
			$http.get("http://localhost:8001/user/listUser").success(callback);
		},

		update: function (callback) {
			$http.post('http://localhost:8000/user/updateUser').success(callback);
		}
	};

});

myApp.controller("aboutCtrl", function () {
	//Tod later	
});

myApp.controller("LoginCtrl", function ($scope) {
	//Todo login 
});

myApp.controller("UserListCtrl", function ($scope, userService) {
	$scope.init = function () {

		userService.list(function (data) {
			$scope.userdata = data.data;
		});
	}

	$scope.updatefun = function (data) {
		$scope.showalert = false;

		userService.update(function (data) {
			if (data.success == true) {

				$scope.successmsg = 'Updated Successfully';
				$scope.showalert = true;
				$scope.init(); //To reload a list page after updates

			}
		});
		setTimeout(function () { 
			$scope.showalert = false;
			console.log($scope.showalert);
		}, 3000);
	}
});