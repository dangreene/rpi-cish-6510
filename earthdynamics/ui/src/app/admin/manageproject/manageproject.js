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
        clippy.load('Merlin', function(agent) {
            // Do anything with the loaded agent
            agent.show();
            agent.speak("It looks like you're trying to add a project. Would you like help with that?");
            //agent.hide();
            setTimeout(function() {agent.hide();},5000);
        });

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