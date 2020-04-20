import {Injectable} from '@angular/core';

@Injectable()
export class LessonServiceClient {
  findLessonsForModule = (mid) =>
    fetch(`http://wbdv-generic-server.herokuapp.com/api/001203225/modules/${mid}/lessons`)
      .then(response => response.json())
}
