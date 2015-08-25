var express = require('express');
var router = express.Router();

puppies = [
{
  name: 'joe',
  age: 14
},
{
  name: 'fred',
  age: 10
},
{
  name: 'sam',
  age: 5
  }
];

// GET all puppies - /puppies/
router.get('/', function(req, res, next) {
  res.render('index');
});

// POST add a puppy to the array
// POST single puppy - /puppies/
router.post('/puppies', function(req, res, next) {
  console.log(req.body);
  var new_puppy = { name: req.body.dogname, age: req.body.dogage };
  puppies.push(new_puppy);
  // call it by itself
  // res.json(puppies);
  // makes it an object with a key of dogs and values of puppies
  res.json({dogs: puppies});
});

// find and respond with a SINGLE puppy
// GET single puppy - /puppy/:id
router.get('/puppies/:id', function(req, res, next) {
  console.log(req.body + "req.body");
  console.log(req.params + "req.params");
  res.json(puppies[req.params.id-1]);
  // res.json({puppies: puppies});
});

// PUT single puppy - /puppy/:id
// UPDATE a list
router.put('/puppies/:id', function (req, res, next) {
  puppies[req.params.id-1].name = req.body.name;
  puppies[req.params.id-1].age = req.body.age;
  res.json(puppies);
});

// delete a single puppy
router.delete('/puppies/:id', function(req, res, next) {
  puppies.splice((req.params.id-1), 1);
  res.json(puppies);
});




module.exports = router;
