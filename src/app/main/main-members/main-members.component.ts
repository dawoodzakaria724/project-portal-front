import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-members',
  templateUrl: './main-members.component.html',
  styleUrls: ['./main-members.component.css'],
})
export class MainMembersComponent implements OnInit {
  members: any = null;

  constructor() {}

  ngOnInit(): void {}
}
