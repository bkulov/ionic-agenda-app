angular.module('starter.services', [])

.factory('Lectures', function() {
  // Some fake testing data
  var lectures = [{
    id: 0,
    startTime: new Date(2016, 05, 10, 9),
    endTime: new Date(2016, 05, 10, 10),
    title: 'How to do what when and why',
    lector: 'Gerrard Buttler',
    difficulty: 'SOFT SKILLS'
  }, {
    id: 1,
    startTime: new Date(2016, 05, 10, 10),
    endTime: new Date(2016, 05, 10, 12),
    title: 'How not to do what the other guy before me told you to do',
    lector: 'Bradley Pitts',
    difficulty: 'SOFT SKILLS'
  }, {
    id: 2,
    startTime: new Date(2016, 05, 10, 12),
    endTime: new Date(2016, 05, 10, 14),
    title: 'Lunch',
    lector: '',
    difficulty: 'FOOD & ENTERTAINMENT'
  }, {
    id: 3,
    startTime: new Date(2016, 05, 10, 14),
    endTime: new Date(2016, 05, 10, 15),
    title: 'How to do what when and why',
    lector: 'Gerrard Buttler',
    difficulty: 'SOFT SKILLS'
  }, {
    id: 4,
    startTime: new Date(2016, 05, 10, 17),
    endTime: new Date(2016, 05, 10, 19),
    title: 'How not to do what the other guy before me told you to do',
    lector: 'Bradley Pitts',
    difficulty: 'DEVOPS'
  }, {
    id: 5,
    startTime: new Date(2016, 05, 11, 10),
    endTime: new Date(2016, 05, 11, 12),
    title: 'How not to do what the other guy before me told you to do',
    lector: 'Bradley Pitts',
    difficulty: 'DEVOPS'
  }];

  return {
    all: function() {
      return lectures;
    },
    allForDay: function(date) {
        var lecturesForDay = [];
        for (var i = 0; i < lectures.length; i++) {
            if (lectures[i].startTime.getDate() === date) {
                lecturesForDay.push(lectures[i]);
            }
        }
        return lecturesForDay;
    },
    get: function(lectureId) {
      for (var i = 0; i < lectures.length; i++) {
        if (lectures[i].id === parseInt(lectureId)) {
          return lectures[i];
        }
      }
      return null;
    }
  };
});
