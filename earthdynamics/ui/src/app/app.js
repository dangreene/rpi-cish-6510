
var app = angular.module('earthDynamicsApp', ['ui.bootstrap']);

app.config(['$httpProvider', function($httpProvider) {
        $httpProvider.defaults.useXDomain = true;
        delete $httpProvider.defaults.headers.common['X-Requested-With'];
  }]);
  
app.config(function ($routeProvider) {
    $routeProvider
        .when('/',
            {
                controller: 'HomeController',
                templateUrl: 'app/home/home.tpl.html'
            })
        .when('/about',
            {
                controller: 'AboutController',
                templateUrl: 'app/about/about.tpl.html'
            })
        .when('/contact',
        {
            controller: 'ContactController',
            templateUrl: 'app/contact/contact.tpl.html'
        })
        .when('/projects',
        {
            controller: 'ProjectController',
            templateUrl: 'app/project/project.tpl.html'
        })
        .when('/admin',
        {
            controller: 'AdminController',
            templateUrl: 'app/admin/admin.tpl.html'
        })
        .when('/admin/manageproject',
        {
            controller: 'ManageProjectController',
            templateUrl: 'app/admin/manageproject/manageproject.tpl.html'
        })
        .otherwise({ redirectTo: '/' });
});




