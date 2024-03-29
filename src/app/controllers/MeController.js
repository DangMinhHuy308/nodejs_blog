const Course = require('../modules/Cousre');
const { mutipleMongooseToObject } = require('../../util/mongoose')
class MeController {

  // [Get => me /stored/courses]

  storedCourses(req, res, next) {
    let courseQuery = Course.find({})

    if (req.query.hasOwnProperty('_sort')) {
      courseQuery = courseQuery.sort({
        [req.query.column]: req.query.type
      })
    }

    Promise.all([courseQuery, Course.countDocumentsWithDeleted({ deleted: true })])
      .then(([courses, deleteCount]) =>
        res.render('me/stored-courses', {
          deleteCount,
          courses: mutipleMongooseToObject(courses)
        })
      )
      .catch(next)
  }
  // [Get => me/trash/courses]

  trashCourses(req, res, next) {
    Course.findDeleted({})
      .then(courses => res.render('me/trash-courses', {
        courses: mutipleMongooseToObject(courses)
      }))
      .catch(next)
  }
}
module.exports = new MeController();
