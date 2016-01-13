angular.module('starter.services', [])

.factory('Speakers', function () {
    // Some fake testing data
    var speakers = [{
        id: 0,
        name: 'Gerrard Buttler',
        photo: 'img/gerrard.jpg',
        company: 'Company Inc',
        jobTitle: 'Managing Director',
        bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vitae sollicitudin tellus. Pellentesque sit amet quam pretium, rhoncus leo at, vestibulum libero. Vestibulum volutpat nibh consequat augue porttitor aliquet. Fusce faucibus justo vitae enim fringilla posuere tempor quis dui. Morbi nulla diam, tristique pellentesque tempus at, semper non purus. Phasellus.'
    }, {
        id: 1,
        name: 'Bradley Pitts',
        photo: 'img/bradley.png',
        company: 'My Company',
        jobTitle: 'Senior Manager',
        bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vitae sollicitudin tellus. Pellentesque sit amet quam pretium, rhoncus leo at, vestibulum libero. Vestibulum volutpat nibh consequat augue porttitor aliquet. Fusce faucibus justo vitae enim fringilla posuere tempor quis dui. Morbi nulla diam, tristique pellentesque tempus at, semper non purus. Phasellus.'
    }];

    return {
        all: function () {
            return speakers;
        },
        get: function (speakerId) {
            for (var i = 0; i < speakers.length; i++) {
                if (speakers[i].id === parseInt(speakerId)) {
                    return speakers[i];
                }
            }
            return null;
        }
    };
})

.factory('Lectures', function() {
    // Some fake testing data
    var lectures = [{
        id: 0,
        startTime: new Date(2016, 04, 10, 9),
        endTime: new Date(2016, 04, 10, 10),
        title: 'How to do what when and why',
        lectorId: 0,
        difficulty: 'SOFT SKILLS',
        scheduled: false,
        rating: 5,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin condimentum congue sapien, id varius neque pretium sed. Etiam dapibus, enim non consectetur mollis, nulla odio feugiat tellus, a pharetra nisi ex nec leo. Aliquam arcu sem, elementum quis erat vitae, sodales molestie elit. Donec volutpat viverra commodo. Fusce eget efficitur neque. Donec sit amet felis lorem. Vestibulum tincidunt velit sit amet iaculis vulputate. Integer accumsan pulvinar commodo. Integer a vehicula augue. Ut mollis, ex vel eleifend ultricies, quam magna mattis turpis, nec viverra nunc quam sed risus. Mauris lacinia, ipsum quis tempor fermentum, dolor orci luctus urna, ac ultrices leo ligula ut nibh. Quisque porttitor pretium fringilla. Fusce nec odio varius, pretium diam et, tristique tellus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse vitae est augue. Nunc tristique imperdiet gravida.'
    }, {
        id: 1,
        startTime: new Date(2016, 04, 10, 10),
        endTime: new Date(2016, 04, 10, 12),
        title: 'How not to do what the other guy before me told you to do',
        lectorId: 1,
        difficulty: 'SOFT SKILLS',
        scheduled: true,
        rating: 0,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin condimentum congue sapien, id varius neque pretium sed. Etiam dapibus, enim non consectetur mollis, nulla odio feugiat tellus, a pharetra nisi ex nec leo. Aliquam arcu sem, elementum quis erat vitae, sodales molestie elit. Donec volutpat viverra commodo. Fusce eget efficitur neque. Donec sit amet felis lorem. Vestibulum tincidunt velit sit amet iaculis vulputate. Integer accumsan pulvinar commodo. Integer a vehicula augue. Ut mollis, ex vel eleifend ultricies, quam magna mattis turpis, nec viverra nunc quam sed risus. Mauris lacinia, ipsum quis tempor fermentum, dolor orci luctus urna, ac ultrices leo ligula ut nibh. Quisque porttitor pretium fringilla. Fusce nec odio varius, pretium diam et, tristique tellus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse vitae est augue. Nunc tristique imperdiet gravida.'
    }, {
        id: 2,
        startTime: new Date(2016, 04, 10, 12),
        endTime: new Date(2016, 04, 10, 14),
        title: 'Lunch',
        lectorId: -1,
        difficulty: 'FOOD & ENTERTAINMENT',
        scheduled: false,
        rating: 1,
        description: ''
    }, {
        id: 3,
        startTime: new Date(2016, 04, 10, 14),
        endTime: new Date(2016, 04, 10, 15),
        title: 'How to do what when and why',
        lectorId: 0,
        difficulty: 'SOFT SKILLS',
        scheduled: false,
        rating: 2,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin condimentum congue sapien, id varius neque pretium sed. Etiam dapibus, enim non consectetur mollis, nulla odio feugiat tellus, a pharetra nisi ex nec leo. Aliquam arcu sem, elementum quis erat vitae, sodales molestie elit. Donec volutpat viverra commodo. Fusce eget efficitur neque. Donec sit amet felis lorem. Vestibulum tincidunt velit sit amet iaculis vulputate. Integer accumsan pulvinar commodo. Integer a vehicula augue. Ut mollis, ex vel eleifend ultricies, quam magna mattis turpis, nec viverra nunc quam sed risus. Mauris lacinia, ipsum quis tempor fermentum, dolor orci luctus urna, ac ultrices leo ligula ut nibh. Quisque porttitor pretium fringilla. Fusce nec odio varius, pretium diam et, tristique tellus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse vitae est augue. Nunc tristique imperdiet gravida.'
    }, {
        id: 4,
        startTime: new Date(2016, 04, 10, 17),
        endTime: new Date(2016, 04, 10, 19),
        title: 'How not to do what the other guy before me told you to do',
        lectorId: 1,
        difficulty: 'DEVOPS',
        scheduled: false,
        rating: 3,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin condimentum congue sapien, id varius neque pretium sed. Etiam dapibus, enim non consectetur mollis, nulla odio feugiat tellus, a pharetra nisi ex nec leo. Aliquam arcu sem, elementum quis erat vitae, sodales molestie elit. Donec volutpat viverra commodo. Fusce eget efficitur neque. Donec sit amet felis lorem. Vestibulum tincidunt velit sit amet iaculis vulputate. Integer accumsan pulvinar commodo. Integer a vehicula augue. Ut mollis, ex vel eleifend ultricies, quam magna mattis turpis, nec viverra nunc quam sed risus. Mauris lacinia, ipsum quis tempor fermentum, dolor orci luctus urna, ac ultrices leo ligula ut nibh. Quisque porttitor pretium fringilla. Fusce nec odio varius, pretium diam et, tristique tellus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse vitae est augue. Nunc tristique imperdiet gravida.'
    }, {
        id: 5,
        startTime: new Date(2016, 04, 11, 10),
        endTime: new Date(2016, 04, 11, 12),
        title: 'How not to do what the other guy before me told you to do',
        lectorId: 1,
        difficulty: 'DEVOPS',
        scheduled: true,
        rating: 4,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin condimentum congue sapien, id varius neque pretium sed. Etiam dapibus, enim non consectetur mollis, nulla odio feugiat tellus, a pharetra nisi ex nec leo. Aliquam arcu sem, elementum quis erat vitae, sodales molestie elit. Donec volutpat viverra commodo. Fusce eget efficitur neque. Donec sit amet felis lorem. Vestibulum tincidunt velit sit amet iaculis vulputate. Integer accumsan pulvinar commodo. Integer a vehicula augue. Ut mollis, ex vel eleifend ultricies, quam magna mattis turpis, nec viverra nunc quam sed risus. Mauris lacinia, ipsum quis tempor fermentum, dolor orci luctus urna, ac ultrices leo ligula ut nibh. Quisque porttitor pretium fringilla. Fusce nec odio varius, pretium diam et, tristique tellus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse vitae est augue. Nunc tristique imperdiet gravida.'
    }];

    var dateEquals = function (date1, date2) {
        return date1.getDate() === date2.getDate() &&
            date1.getMonth() === date2.getMonth() &&
            date1.getYear() === date2.getYear();
    }

    var result = {};

    result.all = function () {
        return lectures;
    }

    result.toLocaleDateString = function (date) {
        var options = { day: 'numeric', month: 'short' };

        return date.toLocaleDateString("en-US", options);
    }

    result.getDates = function () {
        var dates = [];

        var isDatePresentInArray = function(date) {
            return dates.filter(function(d) { return dateEquals(d, date); }).length > 0;
        }

        for (lecture of lectures) {
            if (!isDatePresentInArray(lecture.startTime)) {
                dates.push(lecture.startTime);
            }
        }

        return dates;
    }

    result.getAllByDay = function (date) {
        var lecturesForDay = [];
        for (var i = 0; i < lectures.length; i++) {
            if (dateEquals(lectures[i].startTime, date)) {
                lecturesForDay.push(lectures[i]);
            }
        }
        return lecturesForDay;
    }

    result.get = function(lectureId) {
        for (var i = 0; i < lectures.length; i++) {
            if (lectures[i].id === parseInt(lectureId)) {
                return lectures[i];
            }
        }
        return null;
    }

    result.allBySpeaker = function (speakerId) {
        var lecturesBySpeaker = [];
        for (var i = 0; i < lectures.length; i++) {
            if (lectures[i].lectorId === parseInt(speakerId)) {
                lecturesBySpeaker.push(lectures[i]);
            }
        }
        return lecturesBySpeaker;
    }


    //result.selected = [];

    //result.add = function (lecture) {
    //    if (result.selected.length > 0) {
    //        // add items ordered by startTime
    //        for (var i = 0; i < result.selected.length; i++) {
    //            if (result.selected[i].startTime > lecture.startTime) {
    //                result.selected.splice(i, 0, lecture);
    //                return;
    //            }
    //        }
    //    }

    //    result.selected.push(lecture);
    //}

    //result.remove = function (lecture) {
    //    for (var i = 0; i < result.selected.length; i++) {
    //        if (result.selected[i] === lecture) {
    //            result.selected.splice(i, 1);
    //            return;
    //        }
    //    }
    //}

    return result;
});
