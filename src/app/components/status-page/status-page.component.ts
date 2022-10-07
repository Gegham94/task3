import { Component, OnInit } from '@angular/core';

import { SocketService } from '../../core/services';
import { StudentsDataService } from '../../core/services';

@Component({
  selector: 'app-status-page',
  templateUrl: './status-page.component.html',
  styleUrls: ['./status-page.component.scss']
})
export class StatusPageComponent implements OnInit {

  p = 1;
  count = 6;
  public newStudentData = [];

  constructor( private socketService: SocketService , public studentsDataService: StudentsDataService) {}

  public studentsData = this.studentsDataService.student;

  ngOnInit(): void {
    this.studentsData.forEach(element => {
      if (element.isPickedToday === false) {
        this.newStudentData.push(element)
      }
    });
    this.socketService.connectSocket();
  }

}
