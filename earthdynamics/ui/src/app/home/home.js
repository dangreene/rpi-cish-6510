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
        $scope.addSlide = function() {
            var newWidth = 200 + ((slides.length + (25 * slides.length)) % 150);
            slides.push({
                image: 'http://placekitten.com/' + newWidth + '/200',
                text: ['More','Extra','Lots of','Surplus'][slides.length % 4] + ' ' +
                    ['Cats', 'Kittys', 'Felines', 'Cutes'][slides.length % 4]
            });
        };
        for (var i=0; i<4; i++) {
            $scope.addSlide();
        }
    }
});