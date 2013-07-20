/**
 * Created with JetBrains WebStorm.
 * User: Dan
 * Date: 7/20/13
 * Time: 1:47 PM
 * To change this template use File | Settings | File Templates.
 */

app.controller('ManageProjectController', function ($scope, projectService) {

    $scope.projectList = [];

    init();

    function init() {
        $scope.projectList = projectService.getProjects();
        $scope.addAProject = addAProject;
    };

    function addAProject(){
        var newData = {
            title : $scope.txtTitle,
            description: $scope.txtDescription,
            location: {
                city: $scope.txtCity,
                state: $scope.txtState,
                postalCode: $scope.txtPostalCode
            },
            description : 'New Project.',
            startDate: $scope.txtStartDate,
            endDate: $scope.txtEndDate
        }
        $scope.projectList.push(newData);
    };

});