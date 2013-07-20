
var app = angular.module('earthDynamicsApp', []);

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




