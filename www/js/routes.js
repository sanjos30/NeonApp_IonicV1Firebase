angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('menu.home', {
    url: '/home',
    views: {
      'side-menu21': {
        templateUrl: 'templates/home.html',
        controller: 'homeCtrl'
      }
    }
  })

  .state('menu.scheduleMyPickup', {
    url: '/step1',
    views: {
      'side-menu21': {
        templateUrl: 'templates/scheduleMyPickup.html',
        controller: 'scheduleMyPickupCtrl'
      }
    }
  })

  .state('menu.addItems', {
    url: '/step2',
	params: {
		OrderTypeDryClean: "",
		OrderTypeWashPress: "",
		OrderTypeIroning: "",
		pickuptime: "",
		deliverytime: ""		
},
    views: {
      'side-menu21': {
        templateUrl: 'templates/addItems.html',
        controller: 'addItemsCtrl'
      }
    }
  })

  .state('menu.completeOrder', {
    url: '/step3',
	params: {
		OrderTypeDryClean: "",
		OrderTypeWashPress: "",
		OrderTypeIroning: "",
		pickuptime: "",
		deliverytime: "",
		shirts: "",
		pants: "",
		coats: "",
		sarees: "",
		addItemsLater: ""		
},
    views: {
      'side-menu21': {
        templateUrl: 'templates/completeOrder.html',
        controller: 'completeOrderCtrl'
      }
    }
  })

  .state('menu.myOrders', {
    url: '/myorder',
	params: {
		OrderTypeDryClean: "",
		OrderTypeWashPress: "",
		OrderTypeIroning: "",
		pickuptime: "",
		deliverytime: "",
		shirts: "",
		pants: "",
		coats: "",
		sarees: "",
		name: "",
		phone: "",
		pickupaddress: "",
		deliveryaddress: ""		
},
    views: {
      'side-menu21': {
        templateUrl: 'templates/myOrders.html',
        controller: 'myOrdersCtrl'
      }
    }
  })

  .state('menu', {
    url: '/side-menu21',
    templateUrl: 'templates/menu.html',
    controller: 'menuCtrl'
  })

  .state('login', {
    url: '/page5',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl'
  })

  .state('menu.contactUs', {
    url: '/contactus',
    views: {
      'side-menu21': {
        templateUrl: 'templates/contactUs.html',
        controller: 'contactUsCtrl'
      }
    }
  })

  .state('menu.myAccount', {
    url: '/myaccount',
    views: {
      'side-menu21': {
        templateUrl: 'templates/myAccount.html',
        controller: 'myAccountCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/page5')

  

});