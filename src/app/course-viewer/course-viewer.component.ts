import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-course-viewer',
  templateUrl: './course-viewer.component.html',
  styleUrls: ['./course-viewer.component.css']
})
export class CourseViewerComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  courseId: '';
  course = {
    _id: '',
    title: ''
  }
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.courseId = params.cid;
      fetch(`https://wbdv-generic-server.herokuapp.com/api/001203225/courses/${this.courseId}`)
        .then(response => response.json())
        .then(course => this.course = course);
    });
  }

}
