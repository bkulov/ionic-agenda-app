angular.module('starter.controllers', [])

.controller('DashCtrl', function ($scope) { })

.controller('ChatsCtrl', function ($scope, Chats) {
    // With the new view caching in Ionic, Controllers are only called
    // when they are recreated or on app start, instead of every page change.
    // To listen for when this page is active (for example, to refresh data),
    // listen for the $ionicView.enter event:
    //
    //$scope.$on('$ionicView.enter', function(e) {
    //});

    $scope.chats = Chats.all();
    $scope.remove = function (chat) {
        Chats.remove(chat);
    };
})

.controller('ChatDetailCtrl', function ($scope, $stateParams, Chats) {
    $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function ($scope) {
    $scope.settings = {
        enableFriends: true
    };
})

.controller('AgendaCtrl', function ($scope, Lectures) {
    $scope.dates = Lectures.getDates();

    $scope.toLocaleDateString = Lectures.toLocaleDateString;

    $scope.getScheduledLecturesByDate = function (date) {
        var lectures = Lectures.getAllByDay(date);

        return lectures.filter(function (l) { return l.scheduled; });
    }
})

.controller('LecturesCtrl', function ($scope, Lectures, Speakers) {
    $scope.lectures = Lectures.all();

    $scope.speakers = Speakers;

    $scope.getLectorName = function (lectorId) {
        var lector = Speakers.get(lectorId);

        if (lector)
            return lector.name;

        return '';
    };

    // TODO: refactor this using the dates from the service

    $scope.lecturesFirstDay = Lectures.getAllByDay(new Date(2016, 04, 10).getDate());
    $scope.lecturesSecondDay = Lectures.getAllByDay(new Date(2016, 04, 11).getDate());
})

.controller('LectureDetailCtrl', function ($scope, $stateParams, Lectures, Speakers) {
    $scope.lecture = Lectures.get($stateParams.lectureId);
    $scope.speakers = Speakers;

    $scope.getLectorName = function (lectorId) {
        var lector = Speakers.get(lectorId);

        if (lector)
            return lector.name;

        return '';
    };
})

.controller('SpeakersCtrl', function ($scope, Speakers) {
    $scope.speakers = Speakers.all();
})

.controller('SpeakerDetailCtrl', function ($scope, $stateParams, Lectures, Speakers) {
    $scope.speaker = Speakers.get($stateParams.speakerId);

    $scope.lectures = Lectures.allBySpeaker($stateParams.speakerId);
})

.controller('FloorPlanCtrl', function ($scope) { });
