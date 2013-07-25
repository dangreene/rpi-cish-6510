/**
 * Created with JetBrains WebStorm.
 * User: Dan
 * Date: 7/20/13
 * Time: 1:47 PM
 * To change this template use File | Settings | File Templates.
 */

app.controller('ManageProjectController', function ($scope, projectService) {

    $scope.projectList = [];

    initProjectList();

    function initProjectList() {
        $scope.projectList = projectService.getAllProjects();
    }
});