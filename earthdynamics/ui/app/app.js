
var app = angular.module('earthDynamicsApp', []);

app.config(function ($routeProvider) {
    $routeProvider
        .when('/',
            {
                controller: 'HomeController',
                templateUrl: '/app/partials/home.html'
            })
        .when('/about',
            {
                controller: 'AboutController',
                templateUrl: '/app/partials/about.html'
            })
        .when('/contact',
        {
            controller: 'ContactController',
            templateUrl: '/app/partials/contact.html'
        })
        .when('/projects',
        {
            controller: 'ProjectController',
            templateUrl: '/app/partials/project.html'
        })
        .when('/admin',
        {
            controller: 'AdminController',
            templateUrl: '/app/partials/admin.html'
        })
        .when('/admin/projects',
        {
            controller: 'ManageProjectController',
            templateUrl: '/app/partials/manageprojects.html'
        })
        .otherwise({ redirectTo: '/' });
});




