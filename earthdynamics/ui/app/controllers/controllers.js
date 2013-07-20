
app.controller('HomeController', function ($scope) {

    init();

    function init() {

    }
});

app.controller('AboutController', function ($scope) {

    init();

    function init() {

    }
});

app.controller('ContactController', function ($scope) {

    init();

    function init() {

    }

});

app.controller('ProjectController', function ($scope, projectService) {

    $scope.projectList = [];

    init();

    function init() {
        $scope.projectList = projectService.getProjects();
    }

});

app.controller('AdminController', function ($scope) {

    init();

    function init() {

    }

});

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

