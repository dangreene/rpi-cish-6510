/**
 * Created with JetBrains WebStorm.
 * User: Dan
 * Date: 7/20/13
 * Time: 1:45 PM
 * To change this template use File | Settings | File Templates.
 */

app.controller('ProjectController', function ($scope, projectService, $routeParams) {

    $scope.projectList = [];
    $scope.activeProject = {};

    init();

    function init() {
        $scope.projectFilter = $routeParams.completed;
        $scope.projectList = projectService.getAllProjects();
    }

    $scope.viewProject = function(id) {

        projectService.getProject(id).then(function( val ) {
            if (!val.picture)
            {
                val.picture = "images/misc/nophoto.jpg";
            }
            //debugger;
            $scope.activeProject = val;
        });

        $scope.open();
    }

    $scope.open = function () {
        $scope.shouldBeOpen = true;
    };

    $scope.close = function () {
        $scope.shouldBeOpen = false;
    };

    $scope.opts = {
        backdropFade: true,
        dialogFade:true
    };

});
