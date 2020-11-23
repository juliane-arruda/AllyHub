

angular.module('challenge', [])
  .controller('CourseController', function () {
    const courseController = this;
    courseController.courses = JSON.parse(localStorage.getItem('courses')) || [];

    courseController.addCourse = function () {
      courseController.courses.push({
        name: courseController.name,
        startDate: courseController.startDate,
        endDate: courseController.endDate,
        duration: courseController.duration,
        description: courseController.description
      });
      localStorage.setItem('courses', JSON.stringify(courseController.courses));
      console.log(courseController)

      courseController.name = '';
      courseController.startDate = null;
      courseController.endDate = null;
      courseController.duration = null;
      courseController.description = '';
    }
  });

