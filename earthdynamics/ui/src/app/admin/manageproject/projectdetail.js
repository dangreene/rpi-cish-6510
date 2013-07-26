/**
 * Created with JetBrains WebStorm.
 * User: Dan
 * Date: 7/24/13
 * Time: 10:58 PM
 * To change this template use File | Settings | File Templates.
 */

app.controller('ProjectDetailAdminController', function ($scope, projectService,$routeParams,$location) {

    $scope.project = {};
    loadProjectData();

    function loadProjectData() {
        if ($routeParams.projectId === '0')    {
             $scope.project._id = 0;
            $scope.pageMode = 'Add Project';
        } else {
            $scope.pageMode = 'Update Project';
            projectService.getProject($routeParams.projectId).then(function( val ) {
                $scope.project= val;
            });
        }
    }

    $scope.addUpdateProject = function(project) {
        var successCallback = function() { $location.path( "/admin/manageproject/"  ) } ;
        if (project._id === 0) {
            projectService.addProject(project, successCallback);
        } else {
            projectService.updateProject(project, successCallback);
        }

    } ;
});
