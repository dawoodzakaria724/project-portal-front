import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainBoardsComponent } from '../main-boards/main-boards.component';
import { MainCommitteesComponent } from '../main-committees/main-committees.component';
import { MainDocumentsComponent } from '../main-documents/main-documents.component';
import { MainMeetingsComponent } from '../main-meetings/main-meetings.component';
import { MainMembersComponent } from '../main-members/main-members.component';
import { MainComponent } from './main.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      { path: 'boards', component: MainBoardsComponent },
      { path: 'committees', component: MainCommitteesComponent },
      { path: 'documents', component: MainDocumentsComponent },
      { path: 'meetings', component: MainMeetingsComponent },
      { path: 'members', component: MainMembersComponent },
    ],
  },
  { path: '**', redirectTo: 'main' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainRoutingModule {}
