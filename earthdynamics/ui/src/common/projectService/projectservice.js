app.factory('projectService', function ($http) {
    var myService = {
        getAllProjects: function () {
            // $http returns a promise, which has a then function, which also returns a promise
            var promise = $http.get('http://localhost:3000/projects').then(function (response) {
                // The then function here is an opportunity to modify the response
                console.log(response);
                // The return value gets picked up by the then in the controller.
                return response.data;
            });
            // Return the promise to the controller
            return promise;
        },
        getProject: function (id) {
            // $http returns a promise, which has a then function, which also returns a promise

            var url = 'http://localhost:3000/projects/' + id;
            var promise = $http.get(url).then(function (response) {
                // The then function here is an opportunity to modify the response
                console.log(response);
                // The return value gets picked up by the then in the controller.
                return response.data;
            });
            // Return the promise to the controller
            return promise;
        },
        updateProject: function (project, successCallback) {
            var url = 'http://localhost:3000/projects/' + project._id;
            var promise = $http.put(url, project)
                .success(function(data,status,headers,config) { console.log(status); alert('Project Saved.'); successCallback();})
                .error(function(status) {console.log('An Error Occurred, Please Try Again.');})
                .then(function (response) {
                return response.data;
            })
            return promise;
        },
        addProject: function (project, successCallback) {
            var url = 'http://localhost:3000/projects/';
            var promise = $http.post(url, project)
                .success(function(data,status,headers,config) { console.log(status); alert('Project Saved.'); successCallback();})
                .error(function(status) {console.log('An Error Occurred, Please Try Again.');})
                .then(function (response) {
                    return response.data;
                })
            return promise;
        },
        deleteProject: function (id, successCallback)  {
            var url = 'http://localhost:3000/projects/' + id;
            var promise = $http.delete(url)
                .success(function(data,status,headers,config) { console.log(status); alert('Project Deleted.'); successCallback();})
                .error(function(status) {console.log('An Error Occurred, Please Try Again.');})
                .then(function (response) {
                    return response.data;
                })
            return promise;
        }


    };
    return myService;
});