import {Injectable} from '@angular/core';

@Injectable()
export class CourseServiceClient {
  findAllCourses = () =>
    fetch('https://wbdv-generic-server.herokuapp.com/api/001203225/courses')
      .then(response => response.json())

  findCourseById = (courseId) =>
    fetch(`http://wbdv-generic-server.herokuapp.com/api/001203225/courses/${courseId}`)
      .then(response => response.json())
}
