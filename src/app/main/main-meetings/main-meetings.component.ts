import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MainMeetingsDialogComponent } from '../main-meetings-dialog/main-meetings-dialog.component';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../../auth.service';

export interface PeriodicElement {
  name: string;
  date: Date;
  attendees: string;
  icon: any;
}

@Component({
  selector: 'app-main-meetings',
  templateUrl: './main-meetings.component.html',
  styleUrls: ['./main-meetings.component.css'],
})
export class MainMeetingsComponent implements OnInit {
  constructor(public dialog: MatDialog, private http: HttpClient, private authService: AuthService) {}

  displayedColumns: string[] = ['name', 'date', 'attendees', 'icon'];

  meetings: any[] = [];

  ngOnInit(): void {
    this.fetchMeeting();
  }

  async fetchMeeting() {
    const result = await this.http.get<any>('http://localhost:3000/user/getMeetings').toPromise();
    console.log('post fetch data', result, 'fetch end');
    this.meetings = result;
  }

  async onNewMeeting() {
    let dialogRef = this.dialog.open(MainMeetingsDialogComponent, {});

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
      if (result) {
        console.log(result);
      }
    });
  }

  displayAttendees(data: any[]): string {
    const tokenData = this.authService.parseToken();
    const userEmail = this.authService.parseToken().email;
    const attendees: string[] = [];
    for (const person of data) {
      if (person.toLowerCase() != userEmail.toLowerCase()) {
        attendees.push(<string>person);
      }
    }
    if (!attendees.length) return 'no attendees';
    if (attendees.length == 1) {
      return attendees[0];
    }
    if (attendees.length == 2) {
      return attendees.join(', ');
    } else {
      const extra = attendees.length - 2;
      return `${attendees.slice(0, 2).join(', ')} + ${extra} other(s)`;
    }
  }

  async onDeleteMeeting(id) {
    const result = await this.http.delete(`http://localhost:3000/user/deleteMeeting/${id}`).toPromise();

    await this.fetchMeeting();
  }
}
