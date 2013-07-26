/**
 * Created with JetBrains WebStorm.
 * User: Dan
 * Date: 7/20/13
 * Time: 1:47 PM
 * To change this template use File | Settings | File Templates.
 */

app.controller('ManageProjectController', function ($scope, $location, projectService) {

    $scope.projectList = [];

    initProjectList();

    function initProjectList() {
        $scope.projectList = projectService.getAllProjects();
    }

    $scope.redirectToModify = function(id) {
        var path = "/admin/manageproject/" + id  ;
        $location.path( path  ) ;
    }

    $scope.redirectToAdd = function() {
        var path = "/admin/manageproject/" + 0  ;
        $location.path( path  ) ;
    }

    $scope.deleteProject = function(id) {
        var callback = function() {$location.path( "/admin/manageproject/"  ) };
        projectService.deleteProject(id, callback);

    }
});