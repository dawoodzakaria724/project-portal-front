import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SignInComponent } from './sign-in/sign-in.component';
import { RegisterComponent } from './register/register.component';
import { MainModule } from './main/main.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HomeComponent } from './home/home.component';

// mat imports
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatMenuModule } from '@angular/material/menu';

@NgModule({
  declarations: [AppComponent, SignInComponent, RegisterComponent, HomeComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MainModule,
    FontAwesomeModule,
    MatDividerModule,
    MatListModule,
    MatIconModule,
    MatGridListModule,
    MatDialogModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatMenuModule,
  ],
  providers: [MatDatepickerModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
