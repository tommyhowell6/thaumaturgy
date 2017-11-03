var app = window.angular.module('app', [])

app.factory('todoFetcher', todoFetcher)
app.controller('mainCtrl', mainCtrl)

function todoFetcher ($http) {

  var API_ROOT = 'todo'
  return {
    get: function () {
      return $http
        .get(API_ROOT)
        .then(function (resp) {
          return resp.data
        })
    }
  }

}

function mainCtrl ($scope, todoFetcher, $http) {
  $scope.todoList = []
  todoFetcher.get()
    .then(function (data) {
      $scope.todoList = data
    })
  $scope.addItem = function() {
    var formData = {title:$scope.title,priority:$scope.priority};
    console.log(formData);
    var itemURL = 'todo';
    $http({
       url: itemURL,
       method: "POST",
       data: formData
    }).success(function(data, status, headers, config) {
      console.log("Post worked");
      location.reload();
    }).error(function(data, status, headers, config) {
      console.log("Post failed");
    });
  }
  $scope.onCompleteTask = function(item) {
    console.log('running onCompleteTask function');
    document.getElementById('item.title').style('backgroundColor: green');
    console.log(item);//delete the item from db. 
    $http({
      url: 'todo',
      method: "DELETE",
      data: item.title
    }).success(function(data, status, headers, config) {
      console.log("Delete worked");
    }).error(function(data, status, headers, config) {
      console.log("Delete failed");
    });
  }
}
