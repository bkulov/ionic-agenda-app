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

.controller('AgendaCtrl', function ($scope) { })

.controller('LecturesCtrl', function ($scope, Lectures, Speakers) {
    $scope.lectures = Lectures.all();

    $scope.speakers = Speakers;

    $scope.getLectorName = function (lectorId) {
        var lector = Speakers.get(lectorId);

        if (lector)
            return lector.name;

        return '';
    };

    //$scope.days = [];
    //for (var i = 0; i < $scope.lectures.length; i++) {
    //    if ($scope.days.indexOf) {

    //    }
    //}

    $scope.lecturesFirstDay = Lectures.allForDay(new Date(2016, 05, 10).getDate());
    $scope.lecturesSecondDay = Lectures.allForDay(new Date(2016, 05, 11).getDate());
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

.controller('SpeakersCtrl', function ($scope) { })

.controller('FloorPlanCtrl', function ($scope) { });
