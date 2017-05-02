angular.module('app.controllers', [])
  
.controller('homeCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('scheduleMyPickupCtrl', ['$scope', '$stateParams', '$state', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams,$state) {

$scope.pickuptimeslot=[
    {
        'id':'1',
        'label':'30 April 2017 - 3:00-4:00 PM'
    },
    {
        'id':'2',
        'label':'30 April 2017 - 5:00-6:00 PM'
    },
        {
        'id':'1',
        'label':'30 April 2017 - 3:00-4:00 PM'
    },
     {
        'id':'3',
        'label':'30 April 2017 - 9:00-10:00 AM'
    }
    
    ];
    
    $scope.deliverytimeslot=[
    {
        'id':'1',
        'label':'1 May 2017 - 3:00-4:00 PM'
    },
    {
        'id':'2',
        'label':'2 May 2017 - 5:00-6:00 PM'
    },
        {
        'id':'1',
        'label':'30 April 2017 - 3:00-4:00 PM'
    },
     {
        'id':'3',
        'label':'3 May 2017 - 9:00-10:00 AM'
    }
    
    ];
    
    $scope.data={
        'OrderTypeDryClean':false,
        'OrderTypeWashPress':false,
        'OrderTypeIroning':false,
        'pickuptime':$scope.pickuptimeslot[0].id,
        'deliverytime':$scope.deliverytimeslot[0].id
    }
    
    $scope.addItems=function(){
        $state.go('menu.addItems',$scope.data);
    }
}])
   
.controller('addItemsCtrl', ['$scope', '$stateParams', '$state', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams,$state) {

$scope.data={
   'OrderTypeDryClean':$stateParams.OrderTypeDryClean,
   'OrderTypeWashPress':$stateParams.OrderTypeWashPress,
   'OrderTypeIroning':$stateParams.OrderTypeIroning,
   'pickuptime':$stateParams.pickuptime,
   'deliverytime':$stateParams.deliverytime
}

$scope.orderComplete=function(){
    console.log('In the controller');
    $state.go('menu.completeOrder',$scope.data);
}

$scope.gotoStep1=function(){
    $state.go('menu.scheduleMyPickup',$scope.data);
}

}])
   
.controller('completeOrderCtrl', ['$scope', '$stateParams', '$state', '$firebaseObject', '$firebaseArray', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams,$state,$firebaseObject, $firebaseArray) {

$scope.data={
   'OrderTypeDryClean':$stateParams.OrderTypeDryClean,
   'OrderTypeWashPress':$stateParams.OrderTypeWashPress,
   'OrderTypeIroning':$stateParams.OrderTypeIroning,
   'pickuptime':$stateParams.pickuptime,
   'deliverytime':$stateParams.deliverytime,
   'shirts':$stateParams.shirts,
   'pants':$stateParams.pants,
   'coats':$stateParams.coats,
   'sarees':$stateParams.sarees
}

$scope.submitOrder=function(){
    $state.go('menu.myOrders',$scope.data);
    }
    
$scope.addOrder=function(){
    
       var ref = new Firebase("https://neonserver-274ae.firebaseio.com");
        $scope.data = $firebaseArray(ref.child('data'));
 $state.go('menu.myOrders',$scope.data);
}
}])
   
.controller('myOrdersCtrl', ['$scope', '$stateParams', 'Orders', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, Orders) {


$scope.orders=Orders.orders;
    
$scope.data={
   'OrderTypeDryClean':$stateParams.OrderTypeDryClean,
   'OrderTypeWashPress':$stateParams.OrderTypeWashPress,
   'OrderTypeIroning':$stateParams.OrderTypeIroning,
   'pickuptime':$stateParams.pickuptime,
   'deliverytime':$stateParams.deliverytime,
   'shirts':$stateParams.shirts,
   'pants':$stateParams.pants,
   'coats':$stateParams.coats,
   'sarees':$stateParams.sarees,
   'name':$stateParams.name,
   'phone':$stateParams.phone,
   'pickupaddress':$stateParams.pickupaddress,
   'dropoffaddress':$stateParams.dropoffaddress,
   'usesamedropaddrflag':$stateParams.useSameDropAddr
}


}])
   
.controller('menuCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('loginCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('contactUsCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('myAccountCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
 