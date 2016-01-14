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

.controller('FloorPlanCtrl', function ($scope) { });
