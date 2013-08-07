/**
 * Created with JetBrains WebStorm.
 * User: Dan
 * Date: 7/20/13
 * Time: 1:44 PM
 * To change this template use File | Settings | File Templates.
 */

app.controller('HomeController', function ($scope) {

    init();

    function init() {
        initCarousel();
    }

    function initCarousel() {
        $scope.myInterval = 5000;
        var slides = $scope.slides = [];
        $scope.addSlide = function(fileName, title, text) {
            slides.push({
                image: 'images/carousel/' + fileName,
                title: title,
                text: text
            });
        };
        $scope.addSlide('1.jpg', 'Project 1', 'This was project 1')
        $scope.addSlide('2.jpg', 'Project 2', 'This was project 2')
        $scope.addSlide('3.jpg', 'Project 3', 'This was project 3')
    }
});