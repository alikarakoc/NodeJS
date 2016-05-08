var _ = require('lodash');

var book = [
  { 'name': 'AngularJS',  'publisher': 'Kodlab', 'year' : 2015 },
  { 'name': 'React ve React Native',    'publisher': 'Kodlab', 'year': 2016 }
];

console.log(_.filter(book, _.matches({ 'publisher': 'Kodlab', 'year': 2016 })));





