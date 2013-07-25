/**
 * Created with JetBrains WebStorm.
 * User: Dan
 * Date: 7/24/13
 * Time: 10:58 PM
 * To change this template use File | Settings | File Templates.
 */

app.controller('ProjectDetailAdminController', function ($scope, projectService,$routeParams) {

    $scope.project = {};
    loadProjectData();

    function loadProjectData() {

        var dan = projectService.getProject($routeParams.projectId);
        dan.then(function( val ) {
            $scope.project= val;
        });
    }

    $scope.addUpdateProject = function(data) {
        alert(data);
    } ;
});
