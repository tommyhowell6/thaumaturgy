var express = require('express');
var router = express.Router();
var request = require('request')

/* GET home page. */
router.get('/', function(req, res) {
  res.sendFile('index.html', { root: 'public' });
});

router.get('/todo', function(req, res) {
  console.log("In Todo List");
  res.send(todo);
});
router.post('/todo', function(req, res) {
    console.log("In Todo post");
    console.log(req.body);
    pokemon.push(req.body);
    res.end('{"success" : "Updated Successfully", "status" : 200}');
});

module.exports = router;
var todo = [
  {
    title: 'Rake Leaves',
    priority: 3
  },
  {
    name: 'Buy Milk',
    priority: 1
  },
  {
    name: 'Use Todo List',
    priority: 2
  }
];
