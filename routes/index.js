var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: "Zhe's Potfilio" });
});

/* GET about page. */
router.get('/about', function(req, res, next) {
  res.render('index', { title: 'About Me' });
});

/* GET projects page. */
router.get('/projects', function(req, res, next) {
  res.render('index', { title: 'Projects' });
});

/* GET services page. */
router.get('/services', function(req, res, next) {
  res.render('index', { title: 'Services' });
});

/* GET contact page. */
router.get('/contact', function(req, res, next) {
  res.render('index', { title: 'Contact Me' });
});

/* GET android app project page. */
router.get('/android', function(req, res, next) {
  res.render('projectDetail', { title: 'Android health tracking app' });
});

/* GET IT help desk system project page. */
router.get('/helpDesk', function(req, res, next) {
  res.render('projectDetail', { title: 'IT help desk system' });
});

/* GET Inventory System project page. */
router.get('/inventory', function(req, res, next) {
  res.render('projectDetail', { title: 'Inventory System' });
});

/* GET term of use page. */
router.get('/termOfUse', function(req, res, next) {
  res.render('termOfUse', { title: 'Term of Use' });
});

module.exports = router;
