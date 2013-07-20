/**
 * Created with JetBrains WebStorm.
 * User: Dan
 * Date: 7/20/13
 * Time: 1:45 PM
 * To change this template use File | Settings | File Templates.
 */

app.controller('ProjectController', function ($scope, projectService) {

    $scope.projectList = [];

    init();

    function init() {
        $scope.projectList = projectService.getProjects();
    }

});
