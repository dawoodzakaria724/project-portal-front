import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { MainBoardsComponent } from './main-boards/main-boards.component';
import { MainCommitteesComponent } from './main-committees/main-committees.component';
import { MainMeetingsComponent } from './main-meetings/main-meetings.component';
import { MainDocumentsComponent } from './main-documents/main-documents.component';
import { MainMembersComponent } from './main-members/main-members.component';
import { MainRoutingModule } from './main/main-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

// mat imports
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MainMeetingsDialogComponent } from './main-meetings-dialog/main-meetings-dialog.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatMenuModule } from '@angular/material/menu';
import { TextFieldModule } from '@angular/cdk/text-field';
import { ClipboardModule } from '@angular/cdk/clipboard';

@NgModule({
  declarations: [
    MainComponent,
    MainBoardsComponent,
    MainCommitteesComponent,
    MainMeetingsComponent,
    MainDocumentsComponent,
    MainMembersComponent,
    MainMeetingsDialogComponent,
  ],
  exports: [MainComponent],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatListModule,
    RouterModule,
    MainRoutingModule,
    MatCardModule,
    MatDividerModule,
    MatButtonModule,
    HttpClientModule,
    MatDialogModule,
    FontAwesomeModule,
    MatInputModule,
    MatIconModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatTableModule,
    FormsModule,
    MatMenuModule,
    TextFieldModule,
    ClipboardModule,
  ],
  providers: [MatDatepickerModule],
})
export class MainModule {}
