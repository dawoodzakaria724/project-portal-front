import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { MatDialogRef } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-main-meetings-dialog',
  templateUrl: './main-meetings-dialog.component.html',
  styleUrls: ['./main-meetings-dialog.component.css'],
})
export class MainMeetingsDialogComponent implements OnInit {
  faTrash = faTrash;
  public attendeesList: string[] = [''];

  constructor(
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<MainMeetingsDialogComponent>,
    private http: HttpClient,
    private authService: AuthService
  ) {}

  attendees = new FormControl();

  meetingForm = this.formBuilder.group({
    name: [''],
    date: [''],
    agenda: [''],
    attendees: [this.attendeesList],
  });

  async createMeeting() {
    console.log('createMeeting...', this.meetingForm.value, 'end createMeeting...');
    // TODO: set attendees. (include user's email on top of it, if not already in list)
    // pull attendee emails from inputs.

    // has all non-empty items.
    const attendees1: string[] = this.meetingForm.value.attendees.filter((item) => {
      return item.length > 0;
    });
    const tokenData = this.authService.parseToken();
    console.log('token data', tokenData, 'end token data');
    const userEmail = this.authService.parseToken().email;
    // only needed to add user email to attendees
    if (!userEmail) {
      console.log('user didnt seem to be logged in... oof');
    } else {
      attendees1.push(userEmail);
    }
    // has only unique items. filters out duplicates
    const attendees2: string[] = Array.from(new Set(attendees1));

    const result = await this.http
      .post('http://localhost:3000/user/createMeeting', {
        name: this.meetingForm.value.name,
        date: this.meetingForm.value.date,
        agenda: this.meetingForm.value.agenda,
        attendees: attendees2,
        user: userEmail,
      })
      .toPromise();

    window.location.reload();
    this.dialogRef.close('Meeting Created');
  }

  addAttendee(): void {
    this.attendeesList.push('');
  }

  clearAttendee(index: number) {
    this.attendeesList.splice(index, 1);
  }

  trackByIndex(index: number, obj: any): any {
    return index;
  }

  ngOnInit(): void {}
}
