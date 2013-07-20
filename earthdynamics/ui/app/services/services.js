app.service('projectService', function () {
    this.getProjects = function () {
        return projectList;
    };

    var projectList = [
        {
            title : 'Project 1',
            location: {
                city: 'Coventry',
                state: 'CT',
                postalCode: 06238
            },
            description : 'This is project 1.',
            startDate: '1/1/2012',
            endDate: '1/2/2012'
        },
        {
            title : 'Project 2',
            location: {
                city: 'Coventry',
                state: 'CT',
                postalCode: 06238
            },
            description : 'This is project 2.',
            startDate: '5/1/2012',
            endDate: '8/2/2012'
        },
        {
            title : 'Project 3',
            location: {
                city: 'Coventry',
                state: 'CT',
                postalCode: 06238
            },
            description : 'This is project 3.',
            startDate: '4/1/2012',
            endDate: '6/2/2012'
        },
        {
            title : 'Project 4',
            location: {
                city: 'Coventry',
                state: 'CT',
                postalCode: 06238
            },
            description : 'This is project 4.',
            startDate: '1/1/2013',
            endDate: '7/2/2014'
        }
    ];
});