var app = angular.module('app.index',[]);
app.controller('indexController', ['$scope', 'svIndex', function ($scope, svIndex) {
    $scope.products = [];
    $scope.newProducts = [];
    $scope.hotProducts = [];
    $scope.viewProducts = [];

    function compareByBuyDes(a,b) {
        if (a.SOLUOTBAN < b.SOLUOTBAN)
          return 1;
        if (a.SOLUOTBAN > b.SOLUOTBAN)
          return -1;
        return 0;
    }
    function compareByViewDes(a,b) {
        if (a.SOLUOTXEM < b.SOLUOTXEM)
          return 1;
        if (a.SOLUOTXEM > b.SOLUOTXEM)
          return -1;
        return 0;
    }

    svIndex.getProducts().then(function (result) {
        $scope.products = result.data;
        $scope.newProducts = $scope.products.reverse();
        $scope.hotProducts = $scope.products;
        $scope.hotProducts.sort(compareByBuyDes);
        $scope.viewProducts = $scope.products;
        $scope.viewProducts.sort(compareByViewDes);
        
    }, function (err) {
        console.log(err);
    });
    $scope.companies = [];
    
    svIndex.getCompanies().then(function (result) {
        result.data.forEach(element => {
            if(element.NHASANXUAT != 'undefined'){
                $scope.companies.push(element);
            }
        });
    });
}]);