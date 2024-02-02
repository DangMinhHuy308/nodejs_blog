const Course = require('../modules/Cousre');
const { mutipleMongooseToObject } = require('../../util/mongoose')
class SiteController {
  // [Get => Home]
  home(req, res, next) {

    Course.find({})
      .then(courses => {
        res.render('home', {
          courses: mutipleMongooseToObject(courses)
        })
      })
      .catch(next);
  }
  // [Get => search]

  search(req, res) {
    res.render('search');
  }
}
module.exports = new SiteController();
