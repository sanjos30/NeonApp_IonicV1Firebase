angular.module('Orders', ['firebase'])

.service('Orders', ['$firebaseArray',function($firebaseArray){
    
/*var myOrders=[
    {
        'status':'delivered',
        'amount':'100',
        'date':'30 April 2017'
    },
    {
         'status':'picked up',
        'amount':'400',
        'date':'2 April 2017'
        
    },
        {
        'status':'awaiting dropoff',
        'amount':'300',
        'date':'30 April 2017'
    },
    
    ];*/
    
    var ref=firebase().database().ref().child('orders');
    var myOrders=$firebaseArray(ref);
    var orders = {
        'orders':myOrders,
        addOrder:function(orderId){
            myOrders.$add({
                'orderId':orderId,
                'delivered':false
            });
        }
    };
    return orders;
}]);

