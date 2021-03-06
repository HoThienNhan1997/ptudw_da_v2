var app = angular.module('app.shop',[]);
app.controller('shopController',['$scope', 'svShop', ShopCtrl]);

function ShopCtrl($scope, svShop) {
    function shuffle(array) {
        var m = array.length, t, i;
        // Chừng nào vẫn còn phần tử chưa được xáo trộn thì vẫn tiếp tục
        while (m) {
            // Lấy ra 1 phần tử
            i = Math.floor(Math.random() * m--);
            // Sau đó xáo trộn nó
            t = array[m];
            array[m] = array[i];
            array[i] = t;
        }
        return array;
    }
    $scope.products = [];
    svShop.getProducts().then(function (result) {
       $scope.products = result.data;
       //shuffle($scope.products);
    }, function (err) {
        console.log(err);
    });
}