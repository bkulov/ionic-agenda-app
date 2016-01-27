angular.module('starter.controllers', [])

.controller('TabsCtrl', function ($scope, $ionicHistory) {
    $scope.clearHistory = function () {
        $ionicHistory.clearHistory();
    }
})

.controller('AgendaCtrl', function ($scope, Lectures) {
    $scope.dates = Lectures.getDates();

    $scope.toLocaleDateString = Lectures.toLocaleDateString;

    $scope.getScheduledLecturesByDate = function (date) {
        var lectures = Lectures.getAllByDate(date);

        return lectures.filter(function (l) { return l.scheduled; });
    }

    $scope.setLectureSchedule = function (lecture, sheduled) {
        Lectures.setScheduled(lecture, sheduled);
    }
})

.controller('LecturesCtrl', function ($scope, Lectures, Speakers) {
    $scope.dates = Lectures.getDates();

    $scope.toLocaleDateString = Lectures.toLocaleDateString;

    $scope.getLectorName = function (lectorId) {
        var lector = Speakers.get(lectorId);

        if (lector)
            return lector.name;

        return '';
    }

    $scope.getLecturesByDate = Lectures.getAllByDate;

    $scope.setLectureSchedule = function (lecture, sheduled) {
        Lectures.setScheduled(lecture, sheduled);
    }
})

.controller('LectureDetailCtrl', function ($scope, $stateParams, Lectures, Speakers) {
    $scope.lecture = Lectures.get($stateParams.lectureId);

    $scope.toLocaleDateString = Lectures.toLocaleDateString;

    $scope.getLectorName = function (lectorId) {
        var lector = Speakers.get(lectorId);

        if (lector)
            return lector.name;

        return '';
    }

    $scope.setSchedule = function (sheduled) {
        Lectures.setScheduled($scope.lecture, sheduled);
    }

    $scope.setRating = function (rating) {
        $scope.lecture.rating = rating;
    }
})

.controller('SpeakersCtrl', function ($scope, Speakers) {
    $scope.speakers = Speakers.all();
})

.controller('SpeakerDetailCtrl', function ($scope, $stateParams, Lectures, Speakers) {
    $scope.speaker = Speakers.get($stateParams.speakerId);

    $scope.lectures = Lectures.allBySpeaker($stateParams.speakerId);
})

.controller('FloorPlanCtrl', function ($scope) { })

.controller('LoginCtrl', function ($scope, LoginService/*, $ionicPopup, $state*/) {
    $scope.user = {};

    $scope.login = function () {

        LoginService.loginOffice365();
        //LoginService.loginOffice365($scope.user.username, $scope.user.password)
        //.success(function (data) {
        //    $state.go('tab.agenda');
        //})
        //.error(function (data) {
        //    var alertPopup = $ionicPopup.alert({
        //        title: 'Login failed!',
        //        template: 'Please check your credentials!'
        //    });
        //});
    }
})

.controller('LoggedInCtrl', function ($scope, $location, LoginService, $state) {
    var params = $location.search();
    if (params) {
        LoginService.setOffice365LoginData(params.code, params.session_state);

        $state.go('tab.agenda');
    }
});
