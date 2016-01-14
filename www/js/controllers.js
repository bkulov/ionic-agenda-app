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
        var lectures = Lectures.getAllByDate(date);

        return lectures.filter(function (l) { return l.scheduled; });
    }

    $scope.setLectureSchedule = function (lecture, sheduled) {
        Lectures.setScheduled(lecture, sheduled);
    }

    $scope.navigateToLectures = function () {
        //$state.go('tab.lectures', {}, {location:'replace'});
        $state.go('tab.floorplan');
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
})

.controller('SpeakersCtrl', function ($scope, Speakers) {
    $scope.speakers = Speakers.all();
})

.controller('SpeakerDetailCtrl', function ($scope, $stateParams, Lectures, Speakers) {
    $scope.speaker = Speakers.get($stateParams.speakerId);

    $scope.lectures = Lectures.allBySpeaker($stateParams.speakerId);
})

.controller('FloorPlanCtrl', function ($scope) { });
