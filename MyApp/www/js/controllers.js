angular.module('starter.controllers', [])
.controller('AppCtrl', function($scope, $ionicModal, $timeout) {
  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})
.controller('PlaylistsCtrl', function($scope) {
  $scope.categories = [
    { title: 'Cheap meals', id: 1 },
    { title: 'Luxury meals', id: 2 },
    { title: 'Easy-made meals', id: 3 },
    { title: 'Fast-creatable meals', id: 4 },
    { title: 'Vegetarian meals', id: 5 },
    { title: 'Gluten free Meal', id: 6 }
  ];
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
})

.controller('FeaturedsCtrl', function($scope) {
  $scope.featured1 = { title: 'Frikandel',description:'A typical dutch snack, most commonly eaten with french fries', id: 1 ,img:'http://blog.just-eat.nl/wp-content/uploads/2014/04/large_0408.jpg'};
  $scope.featured2 = { title: 'Bulgogi',description:'a Korean dish that usually consists of grilled marinated beef.', id:2 , img:'http://www.trifood.com/image/food/bulgogi.JPG'};
  $scope.featured3 = { title: 'Ramen',description:'Ramen is a Japanese noodle soup dish.', id:3, img:'http://upload.wikimedia.org/wikipedia/commons/9/95/Tonkotsu_ramen.JPG'};
})

.controller('FeaturedCtrl', function($scope, $stateParams) {
});